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

  listReunions() {
    return this.http
      .get<any[]>('http://127.0.0.1:8000/api/reunions');
  }

  getReunion(id) {
    return this.http
      .get<any[]>('http://127.0.0.1:8000/api/reunion/'+id);
  }

  listMembres() {
    return this.http
      .get<any[]>('http://127.0.0.1:8000/api/membres');
  }

  getMembre(id) {
    return this.http
      .get<any[]>('http://127.0.0.1:8000/api/membre/'+id);
  }

  listMembresPresent() {
    return this.http
      .get<any[]>('http://127.0.0.1:8000/api/presence');
  }

  getPrets() {
    return this.http
      .get<any[]>('http://localhost:8000/api/prets')
  }

  getSanctions() {
    return this.http
      .get<any[]>('http://localhost:8000/api/sanctions')
  }

  getFonds() {
    return this.http
      .get<any[]>('http://localhost:8000/api/fondDeCaisses')
  }

  getDepenses() {
    return this.http
      .get<any[]>('http://localhost:8000/api/depenses')
  }

  getAides() {
    return this.http
      .get<any[]>('http://localhost:8000/api/aides')
  }
}
