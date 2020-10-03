import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions=[];
  IdToBeDeleted="";
  constructor(private dataservice:DataService) {
    this.getTransactions();
  }
  getTransactions()
  {

    this.dataservice.getTransactionDetails()
    .subscribe((data:any)=>{
   this.transactions=data.transactions

    })
   }
  

  ngOnInit(): void {
  }
  onDelete($event)
  {
    this.dataservice.deleteTransactionDetails($event)
    .subscribe((data:any)=>{
      //this.transactions=data.transactions;
      alert(data.message); 
      this.IdToBeDeleted=""
      this.getTransactions();
      
    })
  }
  onCancel($event)
  {
    this.IdToBeDeleted=""
  }
  showConfirmationDialog(id){
    //alert(id)
    this.IdToBeDeleted=id;
  }
    //this.dataservice.deleteTransactionDetails(id)
    //.subscribe((data:any)=>{
      //this.transactions=data.transactions;
      //alert(data.message); 
      //this.IdToBeDeleted=""
      //this.getTransactions();
      
    //})
  //}
  //showConfirmationDialog(id)
  //{
    //this.IdToBeDeleted=id;
  //}

}
