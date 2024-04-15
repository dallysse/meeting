import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtatCaissePage } from './etat-caisse.page';

describe('EtatCaissePage', () => {
  let component: EtatCaissePage;
  let fixture: ComponentFixture<EtatCaissePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatCaissePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtatCaissePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
