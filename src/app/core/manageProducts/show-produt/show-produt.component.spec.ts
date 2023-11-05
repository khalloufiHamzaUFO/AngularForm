import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdutComponent } from './show-produt.component';

describe('ShowProdutComponent', () => {
  let component: ShowProdutComponent;
  let fixture: ComponentFixture<ShowProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProdutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
