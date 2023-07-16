import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-membres',
  templateUrl: './detail-membres.page.html',
  styleUrls: ['./detail-membres.page.scss'],
})
export class DetailMembresPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
