import { TestBed } from '@angular/core/testing';

import { MediationPlanParserService } from './mediation-plan-parser.service';

let validData = `<MP v="025" U="02BD2867FB024401A590D59D94E1FFAE" l="de-DE"><P g="Jürgen" f="Wernersen" b="19400324"/><A n="Praxis Dr. Michael Müller" s="Schloßstr. 22" z="10555" c="Berlin" p="030-1234567" e="dr.mueller@kbv-net.de" t="2018-07-01T12:00:00"/><S><M p="230272" m="1" du="1" r="Herz/Blutdruck"/><M p="2223945" m="1" du="1" r="Blutdruck"/><M p="558736" m="20" v="20" du="p" i="Wechseln der Injektionsstellen, unmittelbar vor einer Mahlzeit spritzen" r="Diabetes"/><M p="9900751" v="1" du="1" r="Blutfette"/></S><S t="zu besonderen Zeiten anzuwendende Medikamente"><M p="2239828" t="alle drei Tage 1" du="1" i="auf wechselnde Stellen aufkleben" r="Schmerzen"/></S><S c="418"><M p="2455874" m="1" du="1" r="Stimmung"/></S></MP>`;

describe('MediationPlanParserService', () => {
  let service: MediationPlanParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediationPlanParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error for invalid data', () => {
    expect(() => {
      service.parse('<dev h1');
    }).toThrow(Error('Invalid XML'));
  });

  it('should throw an error for empty data sets (aka no medication statement)', () => {
    expect(() => {
      service.parse('<MP></MP>');
    }).toThrow(Error('Empty medication plan or wrong xml-format'));
  });

  it('should read the correct value and parse the medication statements accordingly', () => {
    let val = service.parse(validData);
    console.log(val);
    expect(val.statements.length).toBe(6);
    expect(val.evening.length).toBe(1);
    console.log(val.statements);
    // further tests -> out of the scope of this exercise
  });
});
