import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails = {

    1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000,transactions:[] },
    1002: { name: "user2", acno: 1002, pin: 1234, password: "usertwo", balance: 3000,transactions:[] },
    1003: { name: "user3", acno: 1003, pin: 4567, password: "userthree", balance: 3000,transactions:[] },
    1004: { name: "user4", acno: 1004, pin: 5678, password: "userfour", balance: 3000,transactions:[] },
    1005: { name: "user5", acno: 1005, pin: 6789, password: "userfive", balance: 3000,transactions:[] }

  }

  currentUser;

  constructor() { 
    this.getDetails();
  }


  setDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    }
  }

  getTransactionDetails()
  {
   return this.accountDetails[this.currentUser.acno].transactions;
  }

  getDetails(){
    if(localStorage.getItem("accountDetails")){
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails"));
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    }
    

  }

  register(name, acno, pin, pwd) {
    if (acno in this.accountDetails) {
      alert("its Already there change accno")
      return false;
    }
    this.accountDetails[acno] = {
      name,
      acno,
      pin,
      password: pwd,
      balance: 0,
      transactions:[]


    }
    console.log(this.accountDetails);
    this.setDetails();
    return true;
  }


  login(acno1, pwd) {
    //console.log(abc.value);
    //console.log(defg.value)// Template Referencing
    var acno = parseInt(acno1);

    var data = this.accountDetails;
    console.log(acno in data);
    if (acno in data) {
      let pd = data[acno].password
      console.log(pd);
      if (pd == pwd) {
        this.currentUser = data[acno];
        this.setDetails();
        return true;
        

      }
    }
  }
  deposit(acno1, pp, amt) {
    var acc = parseInt(acno1);
    //var pp=this.dashboardForm.value.pin;
    //var amt = parseInt(amd);
    console.log(amt);

    var details = this.accountDetails

    if (acc in details) {


      //console.log(acc);
      let mpin = details[acc].pin;
      //console.log(mpin);
      //var bal = details[acc].balance;
      // console.log(bal);
      //var bala = parseInt(bal);
      // console.log(bala);
      if (pp == mpin) {
        details[acc].balance+=parseInt(amt);
        details[acc].transactions.push({

          Amount:amt,
          Type:"Credit"
        })
    
        
      
        //console.log(res);
        this.setDetails();

        return{
          status:true,
          message:"Amount has been credited",
          Balance:details[acc].balance
        }

      }

    }
  }

  withdraw(acno1, pi, amt) {
    var acnt = parseInt(acno1);
    //var pi=this.dashboardForm.value.pin;
    var amd = parseInt(amt)

    let db = this.accountDetails;

    if (acnt in db) {
      console.log(acnt);

      let wpin = db[acnt].pin;
       if(db[acnt].balance<amd)
       return{
         status:false,
         message:"Insufficient Balance",
         Balance:db[acnt].balance
        
       }

      if (pi == wpin) {
        db[acnt].balance -=amd;
        db[acnt].transactions.push({
          Amount:amd,
          Type:"debit"
        })

        //this.currentUser = db[acnt].balance;
        this.setDetails();
        return{
          status:true,
          message:"Amount has been debited",
          Balance:db[acnt].balance
        }

      }
      else{
        return{
          staus:false,
          message:"insufficent  balance"
          
        }
      }
    }
  }


}
