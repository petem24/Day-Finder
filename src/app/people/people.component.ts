import { Component, OnInit, Output } from "@angular/core";
import { Person } from "../app.component";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  @Output() people: Array<Person> = [];
  name = "";
  currentPerson: Person;

  constructor() {}

  ngOnInit() {}

  addPerson() {
    if (this.name !== "") {
      this.people.push(new Person(this.name));
      this.currentPerson = this.people[this.people.length - 1];
      this.name = "";
    }
  }

  selectPerson(index: number) {
    if (this.currentPerson !== this.people[index]) {
      this.currentPerson = this.people[index];
    }
  }
}
