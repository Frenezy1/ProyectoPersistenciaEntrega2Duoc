import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BootuppagePage } from './bootuppage.page';

describe('BootuppagePage', () => {
  let component: BootuppagePage;
  let fixture: ComponentFixture<BootuppagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BootuppagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
