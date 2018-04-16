import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
  providers: [ContactsService]
})
export class EditContactComponent implements OnInit {
    firstName: string = '';
    lastName: string = '';
    id: number = 0;
  constructor(private _data: ContactsService, private route: ActivatedRoute, private router: Router) { }
  contacts = [];
  ngOnInit() {
      if(this.route.snapshot.paramMap.get('id') !== 'new') {
          this.id = +this.route.snapshot.paramMap.get('id');
      } else {
          this.id = -1;
      }
      this._data.contact.subscribe(res => this.contacts = res);
      this.firstName = this.id > -1 ? this.contacts[this.id].firstName : '';
      this.lastName = this.id > -1 ? this.contacts[this.id].lastName: '';
  }
  saveItem() {
      let contactInfo = {
          firstName: this.firstName,
          lastName: this.lastName
      }
      if (this.id > -1) {
        this.contacts[this.id] = contactInfo;
      } else {
        this.contacts.push(contactInfo);
      }
      debugger;
      this._data.changeContact(this.contacts);
      this.backToList();
  }
  backToList() {
      this.router.navigate(['']);
  }

}
