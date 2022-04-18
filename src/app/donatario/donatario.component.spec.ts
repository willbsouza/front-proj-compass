import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatarioComponent } from './donatario.component';

describe('DonatarioComponent', () => {
  let component: DonatarioComponent;
  let fixture: ComponentFixture<DonatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
