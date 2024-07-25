import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviroments } from '../../../enviroments/enviroments';
import { Experiencia } from "../interfaces/experiencia.interface";


@Injectable({ providedIn: "root" })
export class ExperienciasService {    /*Recuerden que lleva 2 "S" */

  private baseUrl:string = enviroments.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getExperiencias(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(`${this.baseUrl}/experiencias`);
  }

}
