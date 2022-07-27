import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 miPortfolio: any;

  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      this.miPortfolio = data;
    });
  }

}
