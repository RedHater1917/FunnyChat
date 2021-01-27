import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponlistComponent } from './weaponlist.component';

describe('WeaponlistComponent', () => {
  let component: WeaponlistComponent;
  let fixture: ComponentFixture<WeaponlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
