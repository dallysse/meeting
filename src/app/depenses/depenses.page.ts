import { Component, OnInit } from '@angular/core';
import { ReunionServiceService } from '../reunion-service.service';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.page.html',
  styleUrls: ['./depenses.page.scss'],
})
export class DepensesPage implements OnInit {

  total_depenses : number = 0;
  depenses :  any[] = [];
  montant: number ;
  dateDepense : Date ;
  motif : string;
  datePipe = new DatePipe('en-US');

  constructor(private reunionService: ReunionServiceService) { }

  ngOnInit() {
    this.getDepenses();
  }

  getDepenses() {
    this.reunionService.getDepenses().subscribe((depenses: any[]) => {
            this.depenses = depenses.data;
            for(let depense of this.depenses){
              this.total_depenses+=depense.montant*1;                  
              }               
        });
}
register()
{
  let bodyData = {
    "montant" : this.montant,
    "dateDepense" : this.datePipe.transform(this.dateDepense, 'yyyy.MM.dd'),
    "motif" : this.motif

};

  this.reunionService.registerDepense(bodyData).subscribe((resultData: any)=>
  {
      console.log("resultData "+this.datePipe.transform(this.dateDepense, 'yyy.MM.dd'));
      alert('You have registered successfully');
    
    });
}

add(){
  this.register();
}
}
