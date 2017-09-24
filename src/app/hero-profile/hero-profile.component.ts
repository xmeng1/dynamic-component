import {Component, Input, OnInit} from '@angular/core';
import {Ad} from '../ad';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit, Ad {
  @Input() data: any;
  ngOnInit() {
  }

}
