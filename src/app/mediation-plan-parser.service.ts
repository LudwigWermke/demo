import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediationPlanParserService {
  constructor() {}

  parse(xml: string): string {
    return xml;
  }
}
