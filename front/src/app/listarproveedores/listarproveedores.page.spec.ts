import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarproveedoresPage } from './listarproveedores.page';

describe('ListarproveedoresPage', () => {
  let component: ListarproveedoresPage;
  let fixture: ComponentFixture<ListarproveedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproveedoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarproveedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
