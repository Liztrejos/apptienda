import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarproductoPage } from './eliminarproducto.page';

describe('EliminarproductoPage', () => {
  let component: EliminarproductoPage;
  let fixture: ComponentFixture<EliminarproductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarproductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
