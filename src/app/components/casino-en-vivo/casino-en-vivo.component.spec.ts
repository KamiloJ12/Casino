import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoEnVivoComponent } from './casino-en-vivo.component';

describe('CasinoEnVivoComponent', () => {
  let component: CasinoEnVivoComponent;
  let fixture: ComponentFixture<CasinoEnVivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoEnVivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoEnVivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
