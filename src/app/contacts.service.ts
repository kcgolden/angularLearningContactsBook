import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ContactsService {
  private contacts new BehaviorSubject<any>([{firstName: "Kelsey", lastName: "Golden"}]);
  contact = this.contacts.asObservable();

  constructor() { }
  changeContact(contact) {
      this.contacts.next(contact);
      debugger;
  }
}
