import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage, IonicModule],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 tab buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tabButtons = compiled.querySelectorAll('ion-tab-button');
    expect(tabButtons.length).toBe(3);
  });

  it('should have tab1 with correct tab attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tab1Button = compiled.querySelector('ion-tab-button[tab="tab1"]');
    expect(tab1Button).toBeTruthy();
  });

  it('should have tab2 with correct tab attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tab2Button = compiled.querySelector('ion-tab-button[tab="tab2"]');
    expect(tab2Button).toBeTruthy();
  });

  it('should have tab3 with correct tab attribute', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tab3Button = compiled.querySelector('ion-tab-button[tab="tab3"]');
    expect(tab3Button).toBeTruthy();
  });
});