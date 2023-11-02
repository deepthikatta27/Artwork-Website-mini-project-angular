import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArtworks(page: number, pageSize: number): Observable<any[]> {
    const url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${pageSize}`;
    return this.http.get<any[]>(url);
  }
  getArtworkById(productId: number): Observable<any> {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/${productId}`)
  }
  getArtworksByTextSearch(searchedValue:string, page: number, pageSize: number):Observable<any[]>{
    return this.http.get<any[]>(`https://api.artic.edu/api/v1/artworks/search?q=${searchedValue}`)
  }
}
