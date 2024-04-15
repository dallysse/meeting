import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepensesPage } from './depenses.page';

describe('DepensesPage', () => {
  let component: DepensesPage;
  let fixture: ComponentFixture<DepensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
