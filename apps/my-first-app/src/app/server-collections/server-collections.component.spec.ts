import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCollectionsComponent } from './server-collections.component';

describe('ServerCollectionsComponent', () => {
  let component: ServerCollectionsComponent;
  let fixture: ComponentFixture<ServerCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerCollectionsComponent]
    });
    fixture = TestBed.createComponent(ServerCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
