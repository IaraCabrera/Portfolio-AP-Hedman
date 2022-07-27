import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
worksList : any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      this.worksList = data.proyectos;
    });
  }

}
