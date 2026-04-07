import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  LoadingController,
  ToastController,
  IonInput,
  IonText,
  IonButton,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    IonInput,
    IonText,
    IonButton,
    IonButtons,
    IonBackButton,
  ],
})
export class LoginPage {
  private authService = inject(AuthService);
  private toastController = inject(ToastController);
  private loadingController = inject(LoadingController);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  async login() {
    if (this.loginForm.invalid) {
      this.showErrorMessage('Please complete the fields correctly.');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Logging in...',
      spinner: 'crescent',
      duration: 2000,
    });

    await loading.present();

    const { email, password } = this.loginForm.value;
    try {
      await this.authService.login(email!, password!);
      this.showInfoMessage('Login successful. Redirecting...');

      setTimeout(() => {
        this.router.navigate(['/products']);
      }, 2000);
    } catch (error: any) {
      let customMessage = 'An authentication error occurred.';

      if (error.code === 'auth/user-not-found') {
        customMessage = 'User does not exist in our records.';
      } else if (error.code === 'auth/wrong-password') {
        customMessage = 'Incorrect password.';
      } else if (error.code === 'auth/invalid-credential') {
        customMessage = 'Incorrect email or password.';
      } else if (error.code === 'auth/too-many-requests') {
        customMessage = 'Too many failed attempts. Please try again later.';
      }

      this.showErrorMessage(customMessage);
    } finally {
      loading.dismiss();
    }
  }

  async showErrorMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });

    toast.present();
  }

  async showInfoMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });

    toast.present();
  }
}