import { TestBed } from "@angular/core/testing";

import { GenerateTextService } from "./generate-text.service";

describe("GenerateTextService", () => {
  let service: GenerateTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateTextService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return a non-empty array", () => {
    let result = service.getWords();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
  });

  it("should return a random word as a string", () => {
    expect(typeof service.getRandomWord()).toBe("string");
  });

  it("should have 'DAH' and 'service' in the list of words", () => {
    let result = service.getWords();
    expect(result).toContain("DAH");
    expect(result).toContain("service");
  });
});
