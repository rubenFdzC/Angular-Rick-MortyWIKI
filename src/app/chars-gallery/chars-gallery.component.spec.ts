import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharsGalleryComponent } from './chars-gallery.component';

describe('CharsGalleryComponent', () => {
  let component: CharsGalleryComponent;
  let fixture: ComponentFixture<CharsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharsGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
