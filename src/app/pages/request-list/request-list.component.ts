import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RentalRequestService } from '../../services/rental-request.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-request-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css',   
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})

export class RequestListComponent implements OnInit {
  rentalRequests: any[] = [];
  showRatingModal = false;
  currentRequest: any;
  rating = {
    score: 5,
    comment: ''
  };

  constructor(private rentalRequestService: RentalRequestService) {}

  ngOnInit() {
    this.rentalRequestService.getRentalRequests().subscribe(
      requests => this.rentalRequests = requests
    );
  }

  openRatingModal(request: any) {
    this.currentRequest = request;
    this.showRatingModal = true;
  }

  closeRatingModal() {
    this.showRatingModal = false;
    this.rating = { score: 5, comment: '' };
  }

  submitRating() {
    this.rentalRequestService.rateTenant(this.currentRequest.id, this.rating).subscribe(
      response => {
        console.log('Tenant rated successfully', response);
        this.closeRatingModal();
        this.currentRequest.tenantRated = true;
        alert('Calificación enviada con éxito');
      },
      error => {
        console.error('Error rating tenant', error);
        alert('Error al enviar la calificación');
      }
    );
  }
}
