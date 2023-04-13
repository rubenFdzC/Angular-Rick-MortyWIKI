import { Component,  OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
contactForm : FormGroup;
isSubmit : boolean = false;

constructor(private formBuilder : FormBuilder){
  this.contactForm = this.formBuilder.group({
    email:["pepe@pepe.com" ,[Validators.required, Validators.email]],
    name:["pepe alvarez" ,[Validators.required ,Validators.minLength(10)]],
    age: []
  })
}
ngOnInit(): void {
    
}
submit(){
  console.log(this.contactForm)
  console.log(this.contactForm.value)
}
}
