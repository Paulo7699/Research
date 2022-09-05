export class IncertitudeClass {
    idIncertitude : number|undefined;
    idLaboratoire : number|undefined;
    idCaracteristique : number|undefined;
    valeur : number|undefined;

    constructor(idi:number, idl:number, idc:number, valeur:number|undefined) {
        this.idIncertitude = idi;
        this.idLaboratoire = idl;
        this.idCaracteristique = idc;
        this.valeur = valeur;
    }
}
