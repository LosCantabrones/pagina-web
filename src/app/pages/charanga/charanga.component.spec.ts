import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharangaComponent } from './charanga.component';

describe('CharangaComponent', () => {
  let component: CharangaComponent;
  let fixture: ComponentFixture<CharangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharangaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
