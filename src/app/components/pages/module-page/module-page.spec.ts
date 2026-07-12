import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePage } from './module-page';

describe('ModulePage', () => {
  let component: ModulePage;
  let fixture: ComponentFixture<ModulePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
