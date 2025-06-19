import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  dialogTimer = 2000;
  constructor() {}

  showSuccessDialog(
    title = 'Solicitação cadastrada com sucesso',
    message?: string,
    showConfirmButton = true,
    confirmButtonText = "Ótimo",
    allowCloseOnActionOnly = false
  ) {
    return Swal.fire({
      icon: 'success',
      title,
      text: message,
      showConfirmButton: showConfirmButton,
      confirmButtonColor: "#2C88D9",
      confirmButtonText: confirmButtonText,
      timer: showConfirmButton ? undefined : this.dialogTimer,
      allowOutsideClick: !allowCloseOnActionOnly,
      allowEscapeKey: !allowCloseOnActionOnly,
    });
  }
}
