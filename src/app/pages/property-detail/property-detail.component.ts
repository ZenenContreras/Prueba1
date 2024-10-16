import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { RentalRequestService } from '../../services/rental-request.service';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})

export class PropertyDetailComponent implements OnInit {
    property: any;
    rentalRequest = {
      startDate: '',
      endDate: '',
      guestCount: 1
    };
    currentImageIndex = 0;
  
    constructor(
      private route: ActivatedRoute,
      private propertyService: PropertyService,
      private rentalRequestService: RentalRequestService
    ) {}
  
    ngOnInit() {
      const propertyId = this.route.snapshot.paramMap.get('id');
      if (propertyId) {
        this.propertyService.getProperty(propertyId).subscribe(
          property => this.property = property
        );
      }
    }
  
    submitRentalRequest() {
      if (this.isValidRequest()) {
        this.rentalRequestService.createRentalRequest({
          ...this.rentalRequest,
          propertyId: this.property.id
        }).subscribe(
          response => {
            console.log('Rental request submitted successfully', response);
            alert('Solicitud de arriendo enviada con éxito');
          },
          error => {
            console.error('Error submitting rental request', error);
            alert('Error al enviar la solicitud de arriendo');
          }
        );
      } else {
        alert('Por favor, verifique las fechas y la cantidad de personas');
      }
    }
  
    isValidRequest(): boolean {
      const today = new Date();
      const startDate = new Date(this.rentalRequest.startDate);
      const endDate = new Date(this.rentalRequest.endDate);
  
      return (
        startDate >= today &&
        endDate > startDate &&
        this.rentalRequest.guestCount >= 1 &&
        this.rentalRequest.guestCount <= this.property.capacity
      );
    }
  
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.property.images.length) % this.property.images.length;
    }
  
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.property.images.length;
    }
  }

