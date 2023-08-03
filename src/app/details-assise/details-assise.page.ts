import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ReunionServiceService } from '../reunion-service.service';

@Component({
  selector: 'app-details-assise',
  templateUrl: './details-assise.page.html',
  styleUrls: ['./details-assise.page.scss'],
})
export class DetailsAssisePage implements OnInit {

  constructor(private route: ActivatedRoute, private reunionService: ReunionServiceService) { }

  reunion: any[] = [];

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    this.reunionService.getReunion(id).subscribe((reunion: any[]) => {
      this.reunion = reunion.data[0];
    });
  }

}
