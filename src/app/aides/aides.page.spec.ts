import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AidesPage } from './aides.page';

describe('AidesPage', () => {
  let component: AidesPage;
  let fixture: ComponentFixture<AidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
