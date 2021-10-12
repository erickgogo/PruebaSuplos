import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  API_URL = environment.API_URL
  constructor(public http: HttpClient) { }
/**
 * Función que realiza la petición al api de imágenes con parámetros opcionales
 * @param category (optional)
 * @param search (optional)
 * @returns Observable
 * */
  getImages(category?,search?) {

    let url =encodeURI((this.API_URL+"&lang=ES")+ (category ? '&category='+category : '')+(search? '&q='+search:''))
    console.log(url);
    return this.http.get<any>(url);
  }
}
