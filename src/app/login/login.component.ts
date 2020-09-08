import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 

loginForm=this.fb.group({
  acno:["",[Validators.required],Validators.minLength[4]],
  pwd:["",[Validators.required]]
});


  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder){ }
  

  getError(field){
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty)&&this.loginForm.get(field).errors
  }


  validaccno(event){
    //alert("accno changed");
  //this.acno=event.target.value;
  }
  passwdchng(event){
    //alert("pwdchanged");
    this.loginForm.value.pwd=event.target.value;
    //alert(event.target.value)
  }

  login(){
  
    if(this.loginForm.valid){
      const result =this.dataService.login(this.loginForm.value.acno,this.loginForm.value.pwd);
      if(result){
       alert("login success");
        this.router.navigateByUrl("dashboard");
  
        
      }
      else{
        alert("Invalid Credentials")
      }
    }
    else{
      alert("This form is Invalid");
      return;
    }
   
  }

}

    



