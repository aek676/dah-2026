import { Component, inject, model, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/angular/standalone";
import { GenerateTextService } from "src/app/core/services/generate-text.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule,
  ],
})
export class HomePage {
  public title = signal("Home Page");
  public word = model("Initial word");

  public testservice = inject(GenerateTextService);

  getWord() {
    this.word.set(this.testservice.getRandomWord());
  }

  changeTitle(title: string) {
    this.title.set(title);
  }
}
