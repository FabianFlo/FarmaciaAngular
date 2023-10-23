import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteModificarPage } from './cliente-modificar.page';

describe('ClienteModificarPage', () => {
  let component: ClienteModificarPage;
  let fixture: ComponentFixture<ClienteModificarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClienteModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
