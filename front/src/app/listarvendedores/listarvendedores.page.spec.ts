import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarvendedoresPage } from './listarvendedores.page';

describe('ListarvendedoresPage', () => {
  let component: ListarvendedoresPage;
  let fixture: ComponentFixture<ListarvendedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarvendedoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarvendedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
