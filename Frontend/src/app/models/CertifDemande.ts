export class CertifDemande
{

private _id : number ;
private _certification1 :  string ;
private _certification2 :  string ;
private _certification3 : string;
private _demande_id : number ;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get certification1(): string {
    return this._certification1;
  }

  set certification1(value: string) {
    this._certification1 = value;
  }

  get certification2(): string {
    return this._certification2;
  }

  set certification2(value: string) {
    this._certification2 = value;
  }

  get certification3(): string {
    return this._certification3;
  }

  set certification3(value: string) {
    this._certification3 = value;
  }

  get demande_id(): number {
    return this._demande_id;
  }

  set demande_id(value: number) {
    this._demande_id = value;
  }
}
