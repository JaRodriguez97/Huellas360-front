import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/Login/login.service'; // Asegúrate de tener el servicio de autenticación configurado
import { MapServiceService } from '@services/Map/map-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private mapService: MapServiceService
  ) {}

  ngOnInit(): void {
    // Inicialización del formulario reactivo con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false], // Campo para recordar sesión
    });
  }

  // Método para manejar el submit del formulario
  onSubmit(): void {
    if (this.loginForm.invalid) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    this.isSubmitting = true;

    const { email, password, remember } = this.loginForm.value;

    // Llamada al servicio de autenticación
    this.authService.login(email, password, remember).subscribe({
      next: (response) => {
        this.mapService.infoUser = response.user;
        // Si el login es exitoso, redirigir a la página principal o donde sea necesario
        this.router.navigate(['/MapaDeHuellas']);
      },
      error: (error) => {
        // Manejo de errores si la autenticación falla
        this.isSubmitting = false;
        console.error('Error de autenticación:', error);
        // Puedes agregar lógica adicional para mostrar un mensaje de error al usuario
      },
    });
  }
}
