import { Component, OnInit } from '@angular/core';
import { ISlider } from '../ngc-range/ngc-range.component';
import { ISliderFromApi, SliderDataService } from '../services/slider-data.service';


@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {

  constructor(
    private sliderService: SliderDataService
  ) {}

  slider$: ISliderFromApi;
  // initial values
  slider1: ISlider = {
    minValue: 1,
    maxValue: 100,
    minSelected: 0,
    maxSelected: 0,
    currencySymbol: '€',
    currentValues: []
  }

  slider2: ISlider = {
    minValue: 5,
    maxValue: 200,
    minSelected: 100,
    currencySymbol: '$',
    currentValues: []
  }

  slider3: ISlider = {
    minValue: 10,
    maxValue: 200,
    minSelected: 50,
    maxSelected: 150,
    step: 10,
    showStepIndicator: true,
    currencySymbol: '£',
    currentValues: []
  }

  /*Methods to listen for onChange event from slider*/
  onSliderChange(selectedValues: number[]) {
    this.slider1.currentValues = selectedValues;
    // console.log('slider 1', this.slider1);
  }

  onSliderChange2(selectedValues: number[]) {
    this.slider2.currentValues = selectedValues;
    // console.log('slider 2', this.slider2);
  }

  onSliderChange3(selectedValues: number[]) {
    this.slider3.currentValues = selectedValues;
    // console.log('slider 3', this.slider3);
  }

  ngOnInit(): void {
    // we need to setup the slider only once on coponent init
    this.sliderService.getSlider(1).subscribe(
      data => {
        this.slider1.minValue = data.min;
        this.slider1.maxValue = data.max;
        this.slider1.minSelected = data.minSelected;
        this.slider1.maxSelected = data.maxSelected;
      }
    );  
      
  }


}
