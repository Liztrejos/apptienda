import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearclientePage } from './crearcliente.page';

describe('CrearclientePage', () => {
  let component: CrearclientePage;
  let fixture: ComponentFixture<CrearclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
