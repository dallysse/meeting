import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SanctionsPage } from './sanctions.page';

describe('SanctionsPage', () => {
  let component: SanctionsPage;
  let fixture: ComponentFixture<SanctionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SanctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
