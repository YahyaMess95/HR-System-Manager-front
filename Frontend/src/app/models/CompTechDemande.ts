export  class CompTechDemande
{

private _id : number ;
private _comptech1 : string ;
private _comptech2 : string ;
private _comptech3 : string ;
private _comptech4 : string ;
private _demande_id : number ;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get comptech1(): string {
    return this._comptech1;
  }

  set comptech1(value: string) {
    this._comptech1 = value;
  }

  get comptech2(): string {
    return this._comptech2;
  }

  set comptech2(value: string) {
    this._comptech2 = value;
  }

  get comptech3(): string {
    return this._comptech3;
  }

  set comptech3(value: string) {
    this._comptech3 = value;
  }

  get comptech4(): string {
    return this._comptech4;
  }

  set comptech4(value: string) {
    this._comptech4 = value;
  }

  get demande_id(): number {
    return this._demande_id;
  }

  set demande_id(value: number) {
    this._demande_id = value;
  }
}
