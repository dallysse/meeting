import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ReunionServiceService } from '../reunion-service.service';

@Component({
  selector: 'app-fond-caisses',
  templateUrl: './fond-caisses.page.html',
  styleUrls: ['./fond-caisses.page.scss'],
})
export class FondCaissesPage implements OnInit {

  constructor(private reunionService: ReunionServiceService) {}

  fonds: any[] = [];
  total_fonds : number = 0;
  total_fonds_disponible : number = 0;
  total_fonds_caisse : number = 0;

  prets: any[] = [];
  total_prets_non_rembourser : number = 0;
  total_interet_generer : number = 0;  

  total_depenses : number = 0;
  depenses :  any[] = [];

  sanctions :  any[] = [];
  total_sanctions: number = 0;  

  ngOnInit() {
    this.getFonds();
    this.getPrets();
    this.getDepenses();
    this.getSanctions();
  }

  getSommeDispo(): number {
    this.total_fonds_disponible=this.total_fonds_caisse+this.total_interet_generer+this.total_sanctions-this.total_depenses-this.total_prets_non_rembourser;

    return this.total_fonds_disponible;
  }

  getSommeTotal(): number {
    this.total_fonds=this.total_fonds_caisse+this.total_interet_generer+this.total_sanctions-this.total_depenses;
  
    return this.total_fonds;
  }

  getPrets() {
         this.reunionService.getPrets().subscribe((prets: any[]) => {
                this.prets = prets;
                for(let pret of this.prets){
                  // calcule du total des prets non rembourser
                  if(pret.rembourser==0){
                    this.total_prets_non_rembourser += pret.montant*1;
                  }
                  // calcule de taux d'interet généré par pret
                  if(pret.rembourser==1){
                    let interet_generer;
                    if( pret.duree == 3) {                    
                      interet_generer=pret.montant*3/100; 
                    }
                    else {
                      interet_generer=pret.montant*6/100;                       
                    }
                    // calcule du total de taux d'interet généré 
                    this.total_interet_generer+=interet_generer;
                  }
                }
            });
  }

  getSanctions() {
    this.reunionService.getSanctions().subscribe((sanctions: any[]) => {
            this.sanctions = sanctions;
            for(let sanction of this.sanctions){
              this.total_sanctions+=sanction.montant*1;   
              console.log(this.total_sanctions)               
            }   
        });
}
  getFonds() {
        this.reunionService.getFonds().subscribe((fonds: any[]) => {
                this.fonds = fonds;
                for(let fond of this.fonds){
                  this.total_fonds_caisse+=fond.somme*1;                  
                  }               
            });
  }

  getDepenses() {
    this.reunionService.getDepenses().subscribe((depenses: any[]) => {
            this.depenses = depenses;
            for(let depense of this.depenses){
              this.total_depenses+=depense.montant*1;                  
              }               
        });
}
}
