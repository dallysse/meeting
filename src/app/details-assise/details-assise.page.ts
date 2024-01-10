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
  presents: string[] = []; 


  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    this.reunionService.getReunion(id).subscribe((reunion: any[]) => {
      this.reunion = reunion.data[0];

    });

    this.reunionService.listMembresPresent().subscribe((presents: any[]) => {   
      for (let present of presents.data) {
        if(present.date == this.reunion.date){
          this.presents.push(present.nom) ; 
          console.log(this.presents.length)
        }

      }
    });
  }

}
