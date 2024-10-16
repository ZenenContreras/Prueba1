import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'https://api.arriendatufinca.com/properties'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getProperty(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Add more methods as needed (e.g., getProperties, createProperty, updateProperty, etc.)
}