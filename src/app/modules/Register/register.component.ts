import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '@services/Register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;  
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const { password, confirmPassword } = this.registerForm.value;
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.isSubmitting = true;

    this.registerService.registerUser(this.registerForm.value).subscribe({
      next: (response) => {
        alert('Usuario registrado exitosamente.');
        this.registerForm.reset();
      },
      error: (err) => {
        alert('Error al registrar el usuario.');
        console.error(err);
      },
      complete: () => {
        this.isSubmitting = false;
      },
    });
  }
}
