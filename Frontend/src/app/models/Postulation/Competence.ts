export class Competence
{
  private id : number;
  private competence : string ;



  get id1(): number {
    return this.id;
  }

  set id1(value: number) {
    this.id = value;
  }

  get competence1(): string {
    return this.competence;
  }

  set competence1(value: string) {
    this.competence = value;
  }

}
