import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReunionServiceService } from '../reunion-service.service';


@Component({
  selector: 'app-detail-membres',
  templateUrl: './detail-membres.page.html',
  styleUrls: ['./detail-membres.page.scss'],
})
export class DetailMembresPage implements OnInit {

  constructor(private route: ActivatedRoute, private reunionService: ReunionServiceService) { }

  membre: any[] = [];

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    this.reunionService.getMembre(id).subscribe((membre: any[]) => {
      this.membre = membre.data[0];
      console.log(this.membre)
    });
  }

}
