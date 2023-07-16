import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMembresPage } from './detail-membres.page';

describe('DetailMembresPage', () => {
  let component: DetailMembresPage;
  let fixture: ComponentFixture<DetailMembresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMembresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMembresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
