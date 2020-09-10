import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
 

 dashboardForm=this.fb.group({
  
  acno:['',[Validators.required],Validators.minLength[4]],
  pin:['',[Validators.required]],
  amt:['',[Validators.required]]

 });

  withdrawalForm=this.fb.group({

    acno:['',[Validators.required],Validators.minLength[4]],
    pin:['',[Validators.required]],
    amt:['',[Validators.required]]
  


  });



  constructor(public dataService:DataService,private fb:FormBuilder) { }


  getError(field){
    return (this.dashboardForm.get(field).touched || this.dashboardForm.get(field).dirty)&&this.dashboardForm.get(field).errors
  
  }

  getErrors(field){
    return (this.withdrawalForm.get(field).touched || this.withdrawalForm.get(field).dirty)&&this.withdrawalForm.get(field).errors

  }

  acnoSet(event)
  {
    this.dashboardForm.value.acno=event.target.value;
  }
  
  pinSet(event)
  {
    this.dashboardForm.value.pin=event.target.value;
  }

  amtSet(event){
    this.dashboardForm.value.amt=event.target.value;
  }

  deposit(){
    if(this.dashboardForm.valid){
      const result =this.dataService.deposit(this.dashboardForm.value.acno,this.dashboardForm.value.pin,this.dashboardForm.value.amt)
      console.log(this.dashboardForm.value.acno);
      if(result){
    
            //alert (bal);
            //alert(amd);
            alert("amount has been credited");
            alert(this.dataService.currentUser);
           
            
            //console.log(res);
      }
      else{
        alert("Invalid Credentials");
      }    
        
    }
    else{
      alert("Form invalid");
    }
}
  


  withdraw(){
             
    if(this.withdrawalForm.valid){
      const result =this.dataService.withdraw(this.withdrawalForm.value.acno,this.withdrawalForm.value.pin,this.withdrawalForm.value.amt)
      console.log(this.withdrawalForm.value.acno);
      if(result){

    
            alert("amount withdrawn successfully");
            alert(this.dataService.currentUser);
            
        }
        else{
          alert("Invalid credentials");
        }
    }
    else{
      alert("Invalid Form");
    }
    

}



  ngOnInit(): void {
  }

}
