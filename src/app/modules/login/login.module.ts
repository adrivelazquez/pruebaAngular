import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainModule } from '../main/main.module';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MainModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { } 
  