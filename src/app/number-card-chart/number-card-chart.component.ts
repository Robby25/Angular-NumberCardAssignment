import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { productSales } from '../data/products'

// import {product} from '../data';

@Component({
  selector: 'app-number-card-chart',
  templateUrl: './number-card-chart.component.html',
  styleUrls: ['./number-card-chart.component.css']
})
export class NumberCardChartComponent implements OnInit {

  productSales: any[];
  view: any[] = [300, 400];
  activeData :any[];
  deActiveData:any[];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#deaff0';
  showDataLabel: boolean = true; // numbers on bars
  controllerObj={
    text:'Controller Health',
    controller_icon:'fa fa-solid fa-database',
    controller_health:'9',
    controller_status_1:'Active',
    controller_status_2:'InActive',
    title:'Number Card'
   }

  constructor() {
    Object.assign(this, { productSales});
    // this.dataBinding()
    }

     dataBinding(){
      this.productSales.forEach((el)=>{
        if(el.isActive===true){
          // this.activeData.push(el)
          console.log(el)
          this.activeData.push(el)
        }else{
          this.deActiveData.push(el)
        }
      })
    }




  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
