import { DoadorComponent } from './doador.component'; 
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DoadorComponent', () => {
  let component: DoadorComponent;
  let fixture: ComponentFixture<DoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
