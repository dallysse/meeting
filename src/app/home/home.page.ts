import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private http: HttpClient) {}

  reunions: any[] = [];
  ngOnInit() {
    this.getReunions();
  }

  getReunions() {
        this.http
            .get<any[]>('http://localhost:8888/ApiReunion/listMembres.php')
            .subscribe((reunions: any[]) => {
                this.reunions = reunions;
            });
  }

}
