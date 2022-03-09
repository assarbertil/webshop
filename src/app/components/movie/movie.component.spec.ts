import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { MovieComponent } from "./movie.component";

describe("MovieComponent", () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let de: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MovieComponent],
      }).compileComponents(); // Compiles tempplate and css
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges(); // Trigger change detection
  });

  it("should create", () => expect(component).toBeTruthy());

  it("should have a movie object", () => expect(component.movie).toBeDefined());

  it("should render an h2 as title", () => {
    expect(de.query(By.css("h2")).nativeElement).toBeTruthy();
  });

  it("should toggle the modal", () => {
    expect(component.modalOpen).toBeFalse();
    component.showModal();
    expect(component.modalOpen).toBeTrue();
    component.hideModal();
    expect(component.modalOpen).toBeFalse();
  });
});
