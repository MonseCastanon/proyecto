import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviroments } from '../../../enviroments/enviroments';
import { Hotel } from "../interfaces/hotel.interface";

@Injectable({ providedIn: "root" })
export class HotelesService {    /*Recuerden que lleva 2 "S" */

  private baseUrl:string = enviroments.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getHoteles(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${this.baseUrl}/hoteles`);
  }

}
