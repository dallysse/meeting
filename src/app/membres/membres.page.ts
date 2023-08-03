import { Component, OnInit } from '@angular/core';
import { ReunionServiceService } from '../reunion-service.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.page.html',
  styleUrls: ['./membres.page.scss'],
})
export class MembresPage implements OnInit {


  membres: any[] = [];

  constructor(private reunionService: ReunionServiceService) { }

  ngOnInit() {
    this.reunionService.listMembres().subscribe((membres: any[]) => {
      this.membres = membres.data;
    });
  }

}
