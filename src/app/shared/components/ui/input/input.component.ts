import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label?: string;
  @Input() placeholder = "";
  @Input() type = 'text';
  @Input() formGroup?: FormGroup
  @Input() controlName: string | null = null
  @Input() isInvalid: boolean | undefined = false;
  @Input() errorMessage = 'Campo obrigatório.';
}
