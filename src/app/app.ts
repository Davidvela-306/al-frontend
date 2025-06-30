import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './formulario/formulario';
import { CirculationResponse } from '@app/circulation-response.model';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  respuesta: CirculationResponse | null = null;
  isLoading = false;
  reset = false;

  onResponseReceived(response: CirculationResponse) {
    this.respuesta = response;
  }

  onLoadingChange(loading: boolean) {
    this.isLoading = loading;
  }

  isSuccessResponse(): boolean {
    if (!this.respuesta) return false;

    const successMessages = ['Puede circular', 'No puede circular'];

    return (
      this.respuesta.puedeCircular !== undefined &&
      successMessages.some((msg) =>
        this.respuesta!.mensaje.toLowerCase().includes(msg.toLowerCase())
      )
    );
  }
  resetApp() {
    this.respuesta = null;
    this.isLoading = false;
    this.reset = true;
    setTimeout(() => (this.reset = false));
  }
}
