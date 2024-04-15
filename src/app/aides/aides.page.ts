import { Component, OnInit } from '@angular/core';
import { ReunionServiceService } from '../reunion-service.service';



@Component({
  selector: 'app-aides',
  templateUrl: './aides.page.html',
  styleUrls: ['./aides.page.scss'],
})
export class AidesPage implements OnInit {
  constructor(private reunionService: ReunionServiceService) { }

  aides: any[] = [];
  beneficiaire: string = "";
  type_aide: string = "";
  remis: any = 0;

  ngOnInit() {
    this.reunionService.getAides().subscribe((aides: any[]) => {
      this.aides = aides.data;
    });
  }

  register() {
    let bodyData = {
      "type_aide": this.type_aide,
      "beneficiaire": this.beneficiaire
    };

    this.reunionService.registerAide(bodyData).subscribe((resultData: any) => {
      console.log("resultData" + resultData);
      alert('You have registered successfully');

    });
  }

  add() {
    this.register();
  }

  isChecked() {
    {
      let bodyData = {
        "remis": this.remis
      };
      this.reunionService.registerAide(bodyData).subscribe((resultData: any) => {
        console.log("resultData" + resultData);
        alert('You have registered successfully');

      });
    }
  }
}