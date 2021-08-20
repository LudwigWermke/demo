import {
  AdministrationTime,
  MedicationStatement,
} from './medication-statement';

/**
 * medication plan, contains info about person and other stuff in future dev
 * currently: only medication statements
 */
export class MedicationPlan {
  constructor(public statements: MedicationStatement[]) {
    this.morning = this.getByTime(AdministrationTime.morning);
    this.midday = this.getByTime(AdministrationTime.midday);
    this.evening = this.getByTime(AdministrationTime.evening);
    this.night = this.getByTime(AdministrationTime.night);
    this.unknown = this.getByTime(AdministrationTime.unknown);
  }

  // medication statements by day-time
  public morning: MedicationStatement[];
  public midday: MedicationStatement[];
  public evening: MedicationStatement[];
  public night: MedicationStatement[];
  public unknown: MedicationStatement[];

  private getByTime(time: AdministrationTime): MedicationStatement[] {
    return this.statements.filter((c) => c.administrationTime === time);
  }
}
