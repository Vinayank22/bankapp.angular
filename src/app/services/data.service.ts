import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails={

    1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000},
    1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3000},
    1003:{name:"user3",acno:1003,pin:4567,password:"userthree",balance:3000},
    1004:{name:"user4",acno:1004,pin:5678,password:"userfour",balance:3000},
    1005:{name:"user5",acno:1005,pin:6789,password:"userfive",balance:3000}

}

currentUser;

  constructor() { }

  register(name,acno,pin,pwd){
    if(acno in this.accountDetails){
      alert("its Already there change accno")
    }
    this.accountDetails[acno]={
      name,
      acno,
      pin,
      password:pwd,
      balance:0
      

    }
    console.log(this.accountDetails);
    return true;
  }


  login(acno1,pwd){
    //console.log(abc.value);
    //console.log(defg.value)// Template Referencing
    var acno=parseInt(acno1);
  
    var data=this.accountDetails;
    console.log(acno in data);
    if(acno in data){
      let pd=data[acno].password
      console.log(pd);
      if(pd==pwd){
        this.currentUser=data[acno];
       return true;
      
      }
    }
  }
}
      

