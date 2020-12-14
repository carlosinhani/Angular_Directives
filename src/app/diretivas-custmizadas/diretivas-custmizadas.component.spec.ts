import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustmizadasComponent } from './diretivas-custmizadas.component';

describe('DiretivasCustmizadasComponent', () => {
  let component: DiretivasCustmizadasComponent;
  let fixture: ComponentFixture<DiretivasCustmizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasCustmizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustmizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
