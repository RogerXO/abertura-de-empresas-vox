import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label?: string;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() mask?: string;
  @Input() formGroup?: FormGroup;
  @Input() control?: FormControl;
  @Input() isInvalid: boolean | undefined = false;
  @Input() errorMessage = 'Campo obrigatório.';
}
