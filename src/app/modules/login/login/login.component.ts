import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['',
            [Validators.minLength(8),Validators.required]
          ],
      });
  }


async enviarFormulario() {

  const usuario = this.formulario.value;

  let email=usuario.email;
  let password=usuario.password;


  if(email == "admin@admin.com"){
    localStorage.setItem('ROL', 'admin');
    console.log("rol admin");
  }

  //guardamos la informacion del usuario en variables locales
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('logged', 'true');

  this.router.navigate(['/posts']);
}

public controlErrores(controlName: string): string {
  let error = '';
  const control = this.formulario.get(controlName);

  if (control.touched && control.errors != null) {
    error = JSON.stringify(control.errors);
    console.log(error);

    if(error.includes("requiredLength")){
      error="Contraseña demasiado corta";
    }else if(error.includes("true")){
      error="Email incorrecto";
    }
  }
  return error;
}






}