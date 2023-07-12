import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-aides',
  templateUrl: './aides.page.html',
  styleUrls: ['./aides.page.scss'],
})
export class AidesPage implements OnInit {
  
  constructor(private http: HttpClient) {}

  aides: any[] = [];
  ngOnInit() {
    this.getAides();
  }

  getAides() {
        this.http
            .get<any[]>('http://localhost:8888/ApiReunion/listAides.php')
            .subscribe((aides: any[]) => {
                this.aides = aides;
            });
  }
}
