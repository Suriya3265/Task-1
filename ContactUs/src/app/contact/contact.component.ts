import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('', Validators.email),
    message:new FormControl('',Validators.required)

  })
success:string=''
  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
      this.success="Submitted Successfully"
    }
  }
  }

