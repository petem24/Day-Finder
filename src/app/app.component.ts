import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}

export class Person {
  name: string;
  dates: Array<Date>;

  constructor(name: string) {
    this.name = name;
  }
}
