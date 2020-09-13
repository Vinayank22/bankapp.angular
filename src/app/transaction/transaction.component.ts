import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions=[];
  constructor(private dataservice:DataService) {

    this.transactions=dataservice.getTransactionDetails();
   }
  

  ngOnInit(): void {
  }

}
