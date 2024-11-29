import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaHuellasComponent } from './mapa-huellas.component';

describe('MapaHuellasComponent', () => {
  let component: MapaHuellasComponent;
  let fixture: ComponentFixture<MapaHuellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaHuellasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaHuellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
