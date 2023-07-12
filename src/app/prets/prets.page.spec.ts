import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PretsPage } from './prets.page';

describe('PretsPage', () => {
  let component: PretsPage;
  let fixture: ComponentFixture<PretsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PretsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
