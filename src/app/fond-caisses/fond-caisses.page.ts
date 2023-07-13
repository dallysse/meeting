import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-fond-caisses',
  templateUrl: './fond-caisses.page.html',
  styleUrls: ['./fond-caisses.page.scss'],
})
export class FondCaissesPage implements OnInit {

  constructor(private http: HttpClient) {}

  fonds: any[] = [];
  prets: any[] = [];
  total_prets : number;
  interet_generer : number;
  total_interet_generer : number = 0;  

  ngOnInit() {
    this.getFonds();
    this.getPrets();
  }

  getPrets() {
        this.http
            .get<any[]>('http://localhost:8888/ApiReunion/listPrets.php')
            .subscribe((prets: any[]) => {
                this.prets = prets;
                for(let pret of this.prets){
                  this.total_prets = pret.montant;
                  console.log(this.total_prets );

                  if(pret.rembourser==1){
                    if( pret.duree == 3) {
                      this.interet_generer=pret.montant*3/100; 
                      //console.log(this.interet_generer);                      
                    }
                    else {
                      this.interet_generer=pret.montant*6/100;                       

                    }
                    this.total_interet_generer+=this.interet_generer;

                  }
                }
            });
  }


  getFonds() {
        this.http
            .get<any[]>('http://localhost:8888/ApiReunion/listFondCaisse.php')
            .subscribe((fonds: any[]) => {
                this.fonds = fonds;
            });
  }
}
