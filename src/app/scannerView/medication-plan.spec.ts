import { MedicationPlan } from './medication-plan';
import {
  AdministrationTime,
  MedicationStatement,
} from 'src/app/scannerView/medication-statement';

describe('MedicationPlan', () => {
  it('should create an instance', () => {
    expect(new MedicationPlan([])).toBeTruthy();
  });

  it('should separate the medications accordingly', () => {
    let list = [
      new MedicationStatement(),
      new MedicationStatement(),
      new MedicationStatement(),
      new MedicationStatement(),
      new MedicationStatement(),
    ];

    list[0].administrationTime = AdministrationTime.morning;
    list[0].pzn = '0';

    list[1].administrationTime = AdministrationTime.evening;
    list[1].pzn = '1';

    list[2].administrationTime = AdministrationTime.morning;
    list[2].pzn = '2';

    list[3].administrationTime = AdministrationTime.unknown;
    list[3].pzn = '3';

    list[4].administrationTime = AdministrationTime.midday;
    list[4].pzn = '4';

    let plan = new MedicationPlan(list);

    expect(plan.morning.length).toBe(2);
    expect(plan.evening.length).toBe(1);
    expect(plan.midday.length).toBe(1);
    expect(plan.unknown.length).toBe(1);

    expect(plan.statements.length).toBe(5);

    expect(plan.midday[0].pzn).toBe('4');
  });
});
