import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompentencyComponent } from './compentency.component';

describe('CompentencyComponent', () => {
  let component: CompentencyComponent;
  let fixture: ComponentFixture<CompentencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompentencyComponent]
    });
    fixture = TestBed.createComponent(CompentencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
