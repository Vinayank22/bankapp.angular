import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 accountDetails={

    1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000},
    1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3000},
    1003:{name:"user3",acno:1003,pin:4567,password:"userthree",balance:3000},
    1004:{name:"user4",acno:1004,pin:5678,password:"userfour",balance:3000},
    1005:{name:"user5",acno:1005,pin:6789,password:"userfive",balance:3000}

}
acno="";
pwd="";
  constructor() { }

  validaccno(event){
    //alert("accno changed");
  this.acno=event.target.value;
  }
  passwdchng(event){
    //alert("pwdchanged");
    this.pwd=event.target.value;
    alert(event.target.value)
  }

  login(){
    var acno=this.acno
    var pwd=this.pwd
    alert(acno+","+pwd);
    var data=this.accountDetails;
    console.log(acno in data);
    if(acno in data){
        let pd=data[acno].password
        console.log(pd);
        if(pd==pwd){
            alert("login successfull");
            window.location.href="userhome.html";
            
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
