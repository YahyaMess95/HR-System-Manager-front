export  class  Demande {

  private _id : number ;
  private _mission : string  ;
  private _speciality : string ;
  private _anneeExp : string  ;
  private _tmps : string ;
  private _etat : string ;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get mission(): string {
    return this._mission;
  }

  set mission(value: string) {
    this._mission = value;
  }

  get speciality(): string {
    return this._speciality;
  }

  set speciality(value: string) {
    this._speciality = value;
  }

  get anneeExp(): string {
    return this._anneeExp;
  }

  set anneeExp(value: string) {
    this._anneeExp = value;
  }

  get tmps(): string {
    return this._tmps;
  }

  set tmps(value: string) {
    this._tmps = value;
  }


  get etat(): string {
    return this._etat;
  }

  set etat(value: string) {
    this._etat = value;
  }
}
