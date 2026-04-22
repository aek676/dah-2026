import { Injectable } from '@angular/core';
import { Incidence } from '../models/incidence.model';

const STORAGE_KEY = 'incidences';

@Injectable({
  providedIn: 'root',
})
export class IncidenceService {
  getAll(): Incidence[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  create(incidence: Incidence): void {
    const incidences = this.getAll();
    incidences.push(incidence);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(incidences));
  }

  delete(id: string): void {
    const incidences = this.getAll().filter((i) => i.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(incidences));
  }
}
