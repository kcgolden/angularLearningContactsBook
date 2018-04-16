import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component.ts';
import { EditContactComponent } from './edit-contact/edit-contact.component.ts';

const routes: Routes = [
    {
        path: '',
        component: ContactListComponent
    },
    {
        path: 'edit/:id',
        component: EditContactComponent
    }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
