import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponentityComponent } from './weaponentity.component';

describe('WeaponentityComponent', () => {
  let component: WeaponentityComponent;
  let fixture: ComponentFixture<WeaponentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
