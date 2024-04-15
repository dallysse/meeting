import { Component, OnInit } from '@angular/core';
import { ReunionServiceService } from '../reunion-service.service';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-prets',
  templateUrl: './prets.page.html',
  styleUrls: ['./prets.page.scss'],
})
export class PretsPage implements OnInit {

  constructor(private reunionService: ReunionServiceService) { }

  prets: any[] = [];
  total_prets: number = 0;
  interet_generer: number;
  total_interet_generer: number = 0;

  datePret: Date = new Date();
  dateRemboursement: Date = new Date();
  duree: number;
  beneficiaire : string = "";
  montant : number ;
  datePipe = new DatePipe('en-US');

  ngOnInit() {
    this.reunionService.getPrets().subscribe((prets: any[]) => {
      this.prets = prets.data;
      for (let pret of this.prets) {
        if (pret.rembourser == 1) {
          if (pret.duree == 3) {
            this.interet_generer = pret.montant * 3 / 100;
          }
          else {
            this.interet_generer = pret.montant * 6 / 100;

          }
          this.total_interet_generer += this.interet_generer;
        }
      }
    });
  }

  register()
  {
    let bodyData = {
      "duree" : this.duree,
      "beneficiaire" : this.beneficiaire,
      "datePret" : this.datePipe.transform(this.datePret, 'yyyy.MM.dd'),
      "montant" : this.montant,
      "dateRemboursement" : this.dateRemboursement,

    };

    this.reunionService.registerPret(bodyData).subscribe((resultData: any)=>
    {
        console.log("resultData "+this.datePret,);
        alert('You have registered successfully');
      
      });
  }

  add(){
    this.register();
  }
}
