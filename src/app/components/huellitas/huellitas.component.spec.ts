import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuellitasComponent } from './huellitas.component';

describe('HuellitasComponent', () => {
  let component: HuellitasComponent;
  let fixture: ComponentFixture<HuellitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuellitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuellitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
