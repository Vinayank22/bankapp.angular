import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
 acno="";
 pin="";
 amt="";
  constructor(private dataService:DataService) { }

  acnoSet(event)
  {
    this.acno=event.target.value;
  }
  
  pinSet(event)
  {
    this.pin=event.target.value;
  }

  amtSet(event){
    this.amt=event.target.value;
  }

  deposit(){
    

    var acc=this.acno;
    var pp=this.pin;
    var amd=parseInt(this.amt);

    var details=this.dataService.accountDetails

    if(acc in details){
       
        console.log(acc);
      let mpin=details[acc].pin;
        console.log(mpin);

        if(pp==mpin){
            var bal=details[acc].balance;
            //alert (bal);
            //alert(amd);
            alert("amount has been credited");
            var res=(bal+amd);
            alert(res);
            console.log(res);
            
            
            
        
    }
}
  }


  withdraw(){

    var acnt=this.acno;
    var pi=this.pin;
    var amt=parseInt(this.amt)

    let db=this.dataService.accountDetails;

    if(acnt in db){
        console.log(acnt);

        let wpin=db[acnt].pin;

        if(pi==wpin){

            db[acnt].balance-=amt;
            alert("amount withdrawn successfully");
            alert(db[acnt].balance);
            
        }
    }







}


  ngOnInit(): void {
  }

}
