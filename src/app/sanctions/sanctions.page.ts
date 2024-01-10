import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReunionServiceService } from '../reunion-service.service';

@Component({
  selector: 'app-sanctions',
  templateUrl: './sanctions.page.html',
  styleUrls: ['./sanctions.page.scss'],
})
export class SanctionsPage implements OnInit {
  constructor(private reunionService: ReunionServiceService) { }

  sanctions: any[] = [];
  ngOnInit() {
    this.reunionService.getSanctions().subscribe((sanctions: any[]) => {
      this.sanctions = sanctions.data;
      console.log(this.sanctions)
    });
  }
}



