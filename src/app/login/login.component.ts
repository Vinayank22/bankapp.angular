import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
acno="";
pwd="";
  constructor(private router:Router,private dataService:DataService) { }

  validaccno(event){
    //alert("accno changed");
  this.acno=event.target.value;
  }
  passwdchng(event){
    //alert("pwdchanged");
    this.pwd=event.target.value;
    //alert(event.target.value)
  }

  login(){
    //console.log(abc.value);
    //console.log(defg.value)// Template Referencing
    var acno=parseInt(this.acno);
    var pwd=this.pwd;
    alert(acno+","+pwd);
    var data=this.dataService.accountDetails;
    console.log(acno in data);
    if(acno in data){
        let pd=data[acno].password
        console.log(pd);
        if(pd==pwd){
            alert("login successfull");
            //window.location.href="userhome.html";
            this.router.navigateByUrl("dashboard");
            
        }
         else{
             alert("incorrect credentials");
         }
    }
    else{
        alert("userdoesnot exist");
    }
   


}


}
