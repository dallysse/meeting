import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReunionServiceService } from '../reunion-service.service';



@Component({
  selector: 'app-aides',
  templateUrl: './aides.page.html',
  styleUrls: ['./aides.page.scss'],
})
export class AidesPage implements OnInit {
  constructor(private reunionService: ReunionServiceService) { }

  aides: any[] = [];

  ngOnInit() {
    this.reunionService.getAides().subscribe((aides: any[]) => {
      this.aides = aides;
    });
  }

}
