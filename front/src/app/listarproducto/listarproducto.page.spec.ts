import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarproductoPage } from './listarproducto.page';

describe('ListarproductoPage', () => {
  let component: ListarproductoPage;
  let fixture: ComponentFixture<ListarproductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
