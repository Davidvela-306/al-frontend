import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CirculationResponse } from '@app/circulation-response.model';
import { CirculationService } from '@app/circulation.service';

@Component({
  selector: 'formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class FormComponent {
  // Event emitters:
  // Event emit when recibe a response from the server.
  @Output() responseReceived = new EventEmitter<CirculationResponse>();
  // Event emit when loading response server.
  @Output() loading = new EventEmitter<boolean>();

  private fb=inject(FormBuilder);
  // Inject CirculationService in the component. Used to make the request to the server.
  private circulationService = inject(CirculationService);

  // Reactive form, property that is an object that represents the form
  form = this.fb.group({
    plate: [],
    date: [],
    time: [],
  });

  handleSubmit() {
    if (this.form.valid) {
      this.loading.emit(true);

      this.circulationService
        .checkPicoPlaca({
          plate: this.form.get('plate')?.value ?? '',
          date: this.form.get('date')?.value ?? '',
          time: this.form.get('time')?.value ?? '',
        })
        .subscribe({
          // next:method that is executed when the request is successful, error: method that is executed when the request fails
          next: (res) => {
            this.responseReceived.emit(res);
            this.loading.emit(false);
          },
          error: (error) => {
            this.responseReceived.emit({ puedeCircular: false, mensaje: "Ha ocurrido un error en el servidor, por favor intenta más tarde" });
            this.loading.emit(false);
          },
        });
    }
  }
}
