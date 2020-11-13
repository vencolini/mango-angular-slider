import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss']
})
export class Exercise2Component implements OnInit {

  workWageSlider: object = {
    min: 1,
    max: 1000,
    start: 500,
    thumbShow: true,
    barColor: "",
    dotColor: "",
    thumbColor: "",
    filledBarColor: "",
    barWidth: "",
    selectCallBack: this.selectCallBack.bind(this)
  }

  selectCallBack(object){
    console.log('log this selectCallBack fn', object);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
