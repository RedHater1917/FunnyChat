import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeapondetailsComponent } from './weapondetails.component';

describe('WeapondetailsComponent', () => {
  let component: WeapondetailsComponent;
  let fixture: ComponentFixture<WeapondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeapondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeapondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
