import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from '../model/ad-item';
import {AdDirective} from '../shared/ad.directive';
import {Ad} from '../ad';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit() {
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAddIndex];
    // After loadComponent() selects an ad, it uses ComponentFactoryResolver
    // to resolve a ComponentFactory for each specific component.
    // The ComponentFactory then creates an instance of each component.
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // Next, you're targeting the viewContainerRef that exists on this specific
    // instance of the component. How do you know it's this specific instance?
    // Because it's referring to adHost and adHost is the directive you set up
    // earlier to tell Angular where to insert dynamic components.
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    // To add the component to the template,
    // you call createComponent() on ViewContainerRef.
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<Ad>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
