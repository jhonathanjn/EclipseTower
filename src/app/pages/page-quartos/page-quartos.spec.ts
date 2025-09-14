import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuartos } from './page-quartos';

describe('PageQuartos', () => {
  let component: PageQuartos;
  let fixture: ComponentFixture<PageQuartos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageQuartos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQuartos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
