export  class  CompSocialeDemande  {

  private _id : number ;
  private _compsocial : string ;
  private _demande_id : number ;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get composocial(): string {
    return this._compsocial;
  }

  set composocial(value: string) {
    this._compsocial = value;
  }

  get demande_id(): number {
    return this._demande_id;
  }

  set demande_id(value: number) {
    this._demande_id = value;
  }
}
