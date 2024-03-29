import { Component, OnInit } from '@angular/core';
import { ReunionServiceService } from '../reunion-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  reunions: any[] = [];

  constructor(private reunionService: ReunionServiceService) { }

  ngOnInit() {
    this.reunionService.listReunions().subscribe((reunions: any[]) => {
      this.reunions = reunions.data;
    });
  }
}
