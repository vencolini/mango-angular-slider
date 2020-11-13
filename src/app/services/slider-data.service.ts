import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, tap } from 'rxjs/operators';
import { ISlider } from '../ngc-range/ngc-range.component';

export interface ISliderFromApi {
  id: number
  min: number
  max: number
  minSelected?: number
  maxSelected?: number
}

@Injectable({
  providedIn: 'root'
})
export class SliderDataService {

  constructor(
    private http: HttpClient) { }

  // https://5f902ec1e0559c0016ad6353.mockapi.io/api/v2/mango-slider
  private base_url: string = 'https://5f902ec1e0559c0016ad6353.mockapi.io/api/v2';

  getSlider(id:number): Observable<ISliderFromApi> {
    return this.http.get<ISliderFromApi>(`${this.base_url}/mango-slider/${id}`).pipe(
        map(result => result), // keep map in case some transformation is needed
        tap(data=> console.log('sldier data in service', data)),
        catchError(this.errorHandler)
    );
  }
  

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  } 

}
