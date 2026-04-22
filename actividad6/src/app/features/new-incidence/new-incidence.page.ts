import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonImg,
  IonCard,
  IonCardContent,
  IonText,
  IonSpinner,
} from '@ionic/angular/standalone';
import { CameraService } from '../../core/services/camera.service';
import { GeolocationService } from '../../core/services/geolocation.service';
import { IncidenceService } from '../../core/services/incidence.service';
import { Incidence } from '../../core/models/incidence.model';
import { camera, cameraOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-incidence',
  templateUrl: './new-incidence.page.html',
  styleUrls: ['./new-incidence.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonImg,
    IonCard,
    IonCardContent,
    IonText,
    IonSpinner,
  ],
})
export class NewIncidencePage {
  public photoUri: string | null = null;
  public latitude: number | null = null;
  public longitude: number | null = null;
  public capturing = false;
  public saving = false;

  private cameraService = inject(CameraService);
  private geolocationService = inject(GeolocationService);
  private incidenceService = inject(IncidenceService);
  private router = inject(Router);
  private toastController = inject(ToastController);

  constructor() {
    addIcons({ camera, cameraOutline });
  }

  async capturePhoto(): Promise<void> {
    this.capturing = true;
    try {
      const [photoUri, position] = await Promise.all([
        this.cameraService.takePicture(),
        this.geolocationService.getCurrentPosition(),
      ]);

      this.photoUri = photoUri;
      this.latitude = position.latitude;
      this.longitude = position.longitude;
    } catch (error) {
      console.error('Error al capturar foto o geolocalización:', error);
      const toast = await this.toastController.create({
        message: 'No se pudo capturar la foto o la ubicación.',
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
    } finally {
      this.capturing = false;
    }
  }

  async saveIncidence(): Promise<void> {
    if (!this.photoUri || this.latitude === null || this.longitude === null) {
      return;
    }

    this.saving = true;
    try {
      const incidence: Incidence = {
        id: Date.now().toString(),
        photoUri: this.photoUri,
        latitude: this.latitude,
        longitude: this.longitude,
        timestamp: Date.now(),
      };

      this.incidenceService.create(incidence);

      const toast = await this.toastController.create({
        message: 'Incidencia guardada correctamente.',
        duration: 2000,
        color: 'success',
      });

      await toast.present();

      toast.onDidDismiss().then(() => {
        this.router.navigate(['/incidence-list']);
      });
    } catch (error) {
      console.error('Error al guardar la incidencia:', error);

      const toast = await this.toastController.create({
        message: 'No se pudo guardar la incidencia.',
        duration: 3000,
        color: 'danger',
      });

      await toast.present();
    } finally {
      this.saving = false;
    }
  }
}
