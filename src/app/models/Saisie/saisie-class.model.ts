export class SaisieClass {
    idSaisie : number|undefined;
    idPartenaire : number|undefined;
    idProduit : number|undefined;
    isCompleted : boolean = false;
    dateModif : Date|undefined;
    dateCreation : Date|undefined;

    constructor(ids:number, idpart:number, idprod:number, isCompleted:boolean, dateM:Date, dateC:Date) {
        this.idSaisie = ids;
        this.idPartenaire = idpart;
        this.idProduit = idprod;
        this.isCompleted = isCompleted;
        this.dateModif = dateM;
        this.dateCreation = dateC;
    }
}
