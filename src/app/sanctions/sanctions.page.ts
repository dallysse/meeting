import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sanctions',
  templateUrl: './sanctions.page.html',
  styleUrls: ['./sanctions.page.scss'],
})
export class SanctionsPage implements OnInit {
  constructor(private http: HttpClient) {}

  sanctions: any[] = [];
  ngOnInit() {
    this.getSanctions();
  }

  getSanctions() {
        this.http
            .get<any[]>('http://localhost:8888/ApiReunion/listSanctions.php')
            .subscribe((sanctions: any[]) => {
                this.sanctions = sanctions;
            });
  }
}
