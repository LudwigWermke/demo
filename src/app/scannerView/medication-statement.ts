/**
 * simple medication statement aka dosage, when, why etc. a medication has to be administered
 */
export class MedicationStatement {
  administrationTime = AdministrationTime.unknown;
  pzn = 'n.A.';
  dosageUnit = 'n.A.';
  reason = 'n.A.';
  /**
   * further staff
   */
}

export enum AdministrationTime {
  morning = 0,
  midday = 1,
  evening = 2,
  unknown = 3,
}
