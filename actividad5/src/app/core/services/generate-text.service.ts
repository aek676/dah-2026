import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GenerateTextService {
  public words: string[] = [
    "This",
    "is",
    "an",
    "example",
    "of",
    "service",
    "for",
    "DAH",
  ];

  constructor() {}

  getWords() {
    return this.words;
  }

  getRandomWord() {
    return this.words[this.getRandomInt(0, this.words.length - 1)];
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
