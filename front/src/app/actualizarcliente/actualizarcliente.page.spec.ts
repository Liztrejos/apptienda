import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarclientePage } from './actualizarcliente.page';

describe('ActualizarclientePage', () => {
  let component: ActualizarclientePage;
  let fixture: ComponentFixture<ActualizarclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
