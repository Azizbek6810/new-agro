import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Guide } from './guide/guide';
import { Statistics } from './statistics/statistics';
import { News } from './news/news';

@Component({
  selector: 'app-home',
  imports: [ Hero, Guide, Statistics, News],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
