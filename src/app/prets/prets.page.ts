import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-prets',
  templateUrl: './prets.page.html',
  styleUrls: ['./prets.page.scss'],
})
export class PretsPage implements OnInit {

  constructor(private http: HttpClient) {}

  prets: any[] = [];
  total_prets : number;
  interet_generer : number;
  total_interet_generer : number = 0;  
  
  ngOnInit() {
    this.getPrets();
  }

  getPrets() {
        this.http
            .get<any[]>('http://localhost:8888/ApiReunion/listPrets.php')
            .subscribe((prets: any[]) => {
                this.prets = prets;
                for(let pret of this.prets){
                  this.total_prets =+pret.montant;
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
                  console.log(this.total_interet_generer);
                }
            });
  }

}
