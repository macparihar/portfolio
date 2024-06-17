import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  {
  onSubmit() {
    // Here you can handle the form submission, like sending the data to a backend server
    alert('Form submitted successfully!');
  }
 }
