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
  ngOnInit() {
    this.getFonds();
  }

  getFonds() {
        this.http
            .get<any[]>('http://localhost:8888/ApiReunion/listFondCaisse.php')
            .subscribe((fonds: any[]) => {
                this.fonds = fonds;
            });
  }
}
