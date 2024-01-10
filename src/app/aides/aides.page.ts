import { Component, OnInit } from '@angular/core';
import { ReunionServiceService } from '../reunion-service.service';



@Component({
  selector: 'app-aides',
  templateUrl: './aides.page.html',
  styleUrls: ['./aides.page.scss'],
})
export class AidesPage implements OnInit {
  constructor(private reunionService: ReunionServiceService) { }

  aides: object[] = [];

  ngOnInit() {
    this.reunionService.getAides().subscribe((aides: object[]) => {
      this.aides = aides.data;
    });
  }

}
