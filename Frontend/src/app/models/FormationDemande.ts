export class FormationDemande  {
private _id : number ;

private _formation1 : string ;
private _formation2 : string ;
private _formation3 : string ;
private _formation4 : string ;
private _demande_id : number ;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get formation1(): string {
    return this._formation1;
  }

  set formation1(value: string) {
    this._formation1 = value;
  }

  get formation2(): string {
    return this._formation2;
  }

  set formation2(value: string) {
    this._formation2 = value;
  }

  get formation3(): string {
    return this._formation3;
  }

  set formation3(value: string) {
    this._formation3 = value;
  }

  get formation4(): string {
    return this._formation4;
  }

  set formation4(value: string) {
    this._formation4 = value;
  }

  get demande_id(): number {
    return this._demande_id;
  }

  set demande_id(value: number) {
    this._demande_id = value;
  }
}
