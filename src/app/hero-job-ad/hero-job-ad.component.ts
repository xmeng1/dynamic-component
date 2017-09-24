import {Component, Input, OnInit} from '@angular/core';
import {Ad} from '../ad';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.css']
})
export class HeroJobAdComponent implements OnInit, Ad {
  @Input() data: any;

  ngOnInit() {
  }

}
