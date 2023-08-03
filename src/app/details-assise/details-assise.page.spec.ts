import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsAssisePage } from './details-assise.page';

describe('DetailsAssisePage', () => {
  let component: DetailsAssisePage;
  let fixture: ComponentFixture<DetailsAssisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAssisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsAssisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
