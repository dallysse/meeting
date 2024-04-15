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
  prets: any[] = [];
  aides: any[] = [];


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.reunionService.getMembre(id).subscribe((membre: any[]) => {
      this.membre = membre.data[0];


    });

    this.reunionService.getPrets().subscribe((prets: any[]) => {

      for (let pret of prets.data) {
        // calcule du total des prets non rembourser
        if (pret.beneficiaire == this.membre.prenom) {
          this.prets.push(pret);
          console.log(this.prets)
        }

      }

    });

    this.reunionService.getAides().subscribe((aides: any[]) => {
      for (let aide of aides.data) {
        // calcule du total des prets non rembourser
        if (aide.beneficiaire == this.membre.prenom) {
          this.aides.push(aide);
          console.log(this.aides)
        }

      }    });
  }

}
