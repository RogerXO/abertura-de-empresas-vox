import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

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
    confirmButtonText = 'Ótimo',
    allowCloseOnActionOnly = false
  ) {
    return Swal.fire({
      icon: 'success',
      title,
      text: message,
      showConfirmButton: showConfirmButton,
      confirmButtonColor: '#2C88D9',
      confirmButtonText: confirmButtonText,
      timer: showConfirmButton ? undefined : this.dialogTimer,
      allowOutsideClick: !allowCloseOnActionOnly,
      allowEscapeKey: !allowCloseOnActionOnly,
    });
  }

  showErrorDialog(err: HttpErrorResponse) {
    if (
      err.error.status?.code == 401 ||
      err.error.status?.code == 404 ||
      err.error.status?.code == 400
    ) {
      const message = err?.error?.messages[0] ?? '';
      Swal.fire({
        title: 'Atenção',
        text: message.includes('format type')
          ? 'Este arquivo contém caractéres invalidos'
          : message,
        icon: 'warning',
        showCancelButton: false,
        showConfirmButton: false,
        timer: this.dialogTimer,
      });
    } else {
      Swal.fire({
        title: 'Erro',
        text: 'Ops, não foi possível concluir a ação.',
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
  }

  showToastDialog(
    text: string,
    icon: SweetAlertIcon = 'success',
    time = this.dialogTimer,
    position: SweetAlertPosition = 'top-end'
  ) {
    Swal.mixin({
      toast: true,
      position: position,
      showConfirmButton: false,
      timer: time,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire({
      icon: icon,
      title: text || '',
    });
  }

  showErrorToastDialog(
    text: string,
    icon: SweetAlertIcon = 'error',
    time = this.dialogTimer,
    position: SweetAlertPosition = 'top-end'
  ) {
    Swal.mixin({
      toast: true,
      position: position,
      showConfirmButton: false,
      timer: time,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire({
      icon: icon,
      title: text ? `Não foi possível carregar ${text}.` : '',
    });
  }
}
