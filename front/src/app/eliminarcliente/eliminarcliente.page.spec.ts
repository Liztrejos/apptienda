import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarclientePage } from './eliminarcliente.page';

describe('EliminarclientePage', () => {
  let component: EliminarclientePage;
  let fixture: ComponentFixture<EliminarclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
