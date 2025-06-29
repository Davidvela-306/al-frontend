import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CirculationResponse } from '@app/circulation-response.model';

export interface PicoPlacaRequest {
  plate: string;
  date: string;
  time: string;
}

@Injectable({
  providedIn: 'root',
})
export class CirculationService {
  private http = inject(HttpClient);
  private readonly API_URL = "http://localhost:8080/api";

  /**
   * Performs a POST request to the /pico-placa endpoint with the given data to
   * check if the vehicle can circulate according to the pico y placa rules.
   *
   * @param data The request data. Only the plate, date and time fields are
   *   required.
   * @returns An observable that emits the response from the API.
   */
  checkPicoPlaca(
    data: Partial<PicoPlacaRequest>
  ): Observable<CirculationResponse> {
    return this.http.post<CirculationResponse>(
      `${this.API_URL}/pico-placa`,
      data
    );
  }
}
