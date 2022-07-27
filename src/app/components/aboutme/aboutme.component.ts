import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
 miPortfolio:any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      this.miPortfolio = data;
    });
  }

}
