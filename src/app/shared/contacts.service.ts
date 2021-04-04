import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  constructor(public http: HttpClient) {}
  getContacts() {
    return this.http
      .get("../../assets/backend/contacts.json")
      .subscribe((data) => {
        console.log(data);
      });
  }
}
