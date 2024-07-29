import { NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonLabel,
    NgIf,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //2ejemplo
})
export class HomePage {
  selectedImage: string | null = null;
  showSplash!: boolean;
  
  constructor() {
    // Simula una carga inicial de 2 segundos antes de mostrar el contenido principal
    setTimeout(() => {
      this.showSplash = false;
    }, 2000); // 2000 milisegundos = 2 segundos
  }

  showImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
