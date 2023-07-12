import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FondCaissesPage } from './fond-caisses.page';

describe('FondCaissesPage', () => {
  let component: FondCaissesPage;
  let fixture: ComponentFixture<FondCaissesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondCaissesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FondCaissesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
