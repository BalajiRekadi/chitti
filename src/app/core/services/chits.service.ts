import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chit } from 'src/app/types/Chit';

@Injectable({ providedIn: 'root' })
export class ChitsService {
  constructor(private http: HttpClient) {}

  domain = 'http://localhost:3000/';

  fetchChits(): Observable<Chit[]> {
    return this.http.get<Chit[]>(`${this.domain}chits`);
  }

  createChit(chit: Chit): Observable<Chit> {
    return this.http.post<Chit>(`${this.domain}chits`, chit);
  }
}
