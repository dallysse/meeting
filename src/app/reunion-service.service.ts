import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReunionServiceService {

  membres: any[] = [];

  fonds: any[] = [];
  total_fonds: number = 0;
  total_fonds_disponible: number = 0;
  total_fonds_caisse: number = 0;

  prets: any[] = [];
  total_prets_non_rembourser: number = 0;
  total_interet_generer: number = 0;

  total_depenses: number = 0;
  depenses: any[] = [];

  sanctions: any[] = [];
  total_sanctions: number = 0;

  constructor(private http: HttpClient) { }


  getMembres() {
    return this.http
      .get<any[]>('http://localhost:8888/ApiReunion/listMembres.php');
  }

  getPrets() {
    return this.http
      .get<any[]>('http://localhost:8888/ApiReunion/listPrets.php')
  }

  getSanctions() {
    return this.http
      .get<any[]>('http://localhost:8888/ApiReunion/listSanctions.php')
  }

  getFonds() {
    return this.http
      .get<any[]>('http://localhost:8888/ApiReunion/listFondCaisse.php')
  }

  getDepenses() {
    return this.http
      .get<any[]>('http://localhost:8888/ApiReunion/listDepense.php')
  }

  getAides() {
    return this.http
      .get<any[]>('http://localhost:8888/ApiReunion/listAides.php')
  }
}
