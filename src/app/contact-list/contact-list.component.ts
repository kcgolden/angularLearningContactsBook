import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactsService]
})
export class ContactListComponent implements OnInit {

  constructor(private _data: ContactsService) { }
  contacts: any;
  ngOnInit() {
      this._data.contact.subscribe(res => this.contacts = res);
      debugger;
  }

}
