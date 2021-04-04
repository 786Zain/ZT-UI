import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../../shared/contacts.service";
@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  constructor(private contacts: ContactsService) {}

  ngOnInit(): void {
    this.contacts.getContacts();
  }
}
