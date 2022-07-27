import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
miPortfolio: any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      this.miPortfolio = data;
    });
  }

}
