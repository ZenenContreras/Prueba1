import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalRequestService {
  private apiUrl = 'https://api.arriendatufinca.com/rental-requests'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createRentalRequest(request: any): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }

  getRentalRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  rateTenant(requestId: string, rating: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${requestId}/rate-tenant`, rating);
  }

  // Add more methods as needed
}