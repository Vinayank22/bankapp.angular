import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const options={
  withCredentials:true
}

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

  constructor(private http:HttpClient) { 
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
   //return this.accountDetails[this.currentUser.acno].transactions;
   return this.http.get("http://localhost:4000/transactionHistory",options)
  }
  deleteTransactionDetails(id)
  {
    return this.http.delete("http://localhost:4000/transactionHistory/"+id,options)
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
   
    const data = {
      name,
      acno,
      pin,
      pwd,
      balance: 0,
      transactions:[]


    }
    return this.http.post("http://localhost:4000/register",data)
    //console.log(this.accountDetails);
    //his.setDetails();
    //eturn true;
  }


  login(acno1, pwd) {
    //withCredentials:true
    //console.log(abc.value);
    //console.log(defg.value)// Template Referencing
    //var acno = parseInt(acno1);

    //var data = this.accountDetails;
    const data = {
      acno1,
      pwd
      
    }
    return this.http.post("http://localhost:4000/login",data,options)
    
    //console.log(acno in data);
    //if (acno in data) {
      //let pd = data[acno].password
      //console.log(pd);
      //if (pd == pwd) {
        //this.currentUser = data[acno];
        //this.setDetails();
        //return true;
        

      //}
    //}
  }
  deposit(acno1, pin, amt) {
    var acno = parseInt(acno1);
    //var pp=this.dashboardForm.value.pin;
    //var amt = parseInt(amd);
    console.log(amt);
    const data = {
      acno,
      pin,
      amt

    }
    return this.http.post("http://localhost:4000/deposit",data,options)
    


    //var details = this.accountDetails

    //if (acc in details) {


      //console.log(acc);
      //let mpin = details[acc].pin;
      //console.log(mpin);
      //var bal = details[acc].balance;
      // console.log(bal);
      //var bala = parseInt(bal);
      // console.log(bala);
      //if (pp == mpin) {
        //details[acc].balance+=parseInt(amt);
        //details[acc].transactions.push({

          //Amount:amt,
          //Type:"Credit"
        //})
    
        
      
        //console.log(res);
        //this.setDetails();

        //return{
          //status:true,
          //message:"Amount has been credited",
          //Balance:details[acc].balance
        //}

      //}

    //}
  }

  withdraw(acno, pin, amt) {
    //var acnt = parseInt(acno1);
    //var pi=this.dashboardForm.value.pin;
    //var amd = parseInt(amt)
    
    const data = {
      acno,
      pin,
      amt

    }
    return this.http.post("http://localhost:4000/withdraw",data,options)
  }
    
    //let db = this.accountDetails;

    //if (acnt in db) {
      //console.log(acnt);

      //let wpin = db[acnt].pin;
       //if(db[acnt].balance<amd)
       //return{
         //status:false,
         //message:"Insufficient Balance",
         //Balance:db[acnt].balance
        
       //}

      //if (pi == wpin) {
        //db[acnt].balance -=amd;
        //db[acnt].transactions.push({
          //Amount:amd,
          //Type:"debit"
        //})

        //this.currentUser = db[acnt].balance;
        //this.setDetails();
        //return{
          //status:true,
          //message:"Amount has been debited",
          //Balance:db[acnt].balance
        //}

      //}
      //else{
        //return{
          //staus:false,
          //message:"insufficent  balance"
          
        //}
      //}
    //}
  //}


}
