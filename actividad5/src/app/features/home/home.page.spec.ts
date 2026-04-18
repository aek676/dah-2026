import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomePage } from "./home.page";
import { By } from "@angular/platform-browser";

describe("HomePage", () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("initialize the title from signal", () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector("ion-title")?.textContent.trim()).toBe("Home Page");
  });

  it("should update the word in the DOM when button clicked", () => {
    const button = fixture.debugElement.query(By.css("ion-button"));
    button.triggerEventHandler("click", null);

    fixture.detectChanges();

    expect(component.word()).not.toBe("Hello World!");
  });

  it("should update the title in the DOM when changeTitle is called", () => {
    component.changeTitle("New title");
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector("ion-title")?.textContent).toContain("New title");
  });
});
