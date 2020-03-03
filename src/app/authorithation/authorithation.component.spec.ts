import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorithationComponent } from './authorithation.component';

describe('AuthorithationComponent', () => {
  let component: AuthorithationComponent;
  let fixture: ComponentFixture<AuthorithationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorithationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorithationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
