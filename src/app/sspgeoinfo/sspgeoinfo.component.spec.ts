import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SspgeoinfoComponent } from './sspgeoinfo.component';

describe('SspgeoinfoComponent', () => {
  let component: SspgeoinfoComponent;
  let fixture: ComponentFixture<SspgeoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SspgeoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SspgeoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
