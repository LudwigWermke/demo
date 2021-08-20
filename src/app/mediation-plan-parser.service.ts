import { Injectable } from '@angular/core';
import { MedicationPlan } from './scannerView/medication-plan';
import {
  AdministrationTime,
  MedicationStatement,
} from './scannerView/medication-statement';

@Injectable({
  providedIn: 'root',
})
export class MediationPlanParserService {
  constructor() {}

  parse(xml: string): MedicationPlan {
    let medicationStatementList: MedicationStatement[] = [];

    let doc = new DOMParser().parseFromString(xml, 'text/xml');
    // check, if error
    let error = doc.getElementsByTagName('parsererror');
    if (error?.length && error.length > 0) throw Error('Invalid XML');
    let medications = this.getMedicationStatements(doc);

    for (let medication of medications) {
      let statement = this.parseMedicationStatement(medication);
      medicationStatementList.push(statement);
    }
    return new MedicationPlan(medicationStatementList);
  }

  private parseMedicationStatement(medication: Element): MedicationStatement {
    let statement = new MedicationStatement();

    let pzn = medication.getAttribute('p');
    if (pzn) {
      statement.pzn = pzn;
    }

    let reason = medication.getAttribute('r');
    if (reason) {
      statement.reason = reason;
    }

    let dosageUnit = medication.getAttribute('du');
    if (dosageUnit) {
      statement.dosageUnit = dosageUnit;
    }

    statement.administrationTime = this.parseAdminTime(medication);
    return statement;
  }

  private getMedicationStatements(doc: Document): Element[] {
    //XML is case-sensitive as is the medication statement
    let medicationContent = doc.getElementsByTagName('M');
    let length = medicationContent?.length || 0;
    let usableArray: Element[] = [];

    for (let i = 0; i < length; ++i) {
      let temp = medicationContent?.item(i);
      if (!temp) continue;
      usableArray.push(temp);
    }
    return usableArray;
  }

  parseAdminTime(medication: Element) {
    let morning = medication.getAttribute('m');
    if (morning) return AdministrationTime.morning;

    let midday = medication.getAttribute('d');
    if (midday) {
      return AdministrationTime.midday;
    }

    let evening = medication.getAttribute('v');
    if (evening) {
      return AdministrationTime.evening;
    }

    return AdministrationTime.unknown;
  }
}
