export class AssociationSaisieCaracteristiqueClass {
    idSaisie : number|undefined;
    idCaracteristique : number|undefined;
    valeurIncertitude : number|undefined;
    valeurMin : number|undefined;
    valeurMax : number|undefined;
    valeur : number|undefined;
    unite : string|undefined;
    nomLaboratoireEventuel : string|undefined;

    constructor(ids:number, idc:number, vinc:number|undefined, vmin:number|undefined, vmax:number|undefined, valeur:number, u:string|undefined, nle:string|undefined) {
        this.idSaisie = ids;
        this.idCaracteristique = idc;
        if(vinc)
            this.valeurIncertitude = vinc;
        if(vmin)
            this.valeurMin = vmin;
        if(vmax)
            this.valeurMax = vmax;
        this.valeur = valeur;
        if(u)
            this.unite = u;
        if(nle)
            this.nomLaboratoireEventuel = nle;
    }

    displayAsso() {
        console.log("idSaisie :"+this.idSaisie+", idCarac :"+this.idCaracteristique+", incertitude :"+this.valeurIncertitude+", valeurMin :"+this.valeurMin+", valeurMax :"+this.valeurMax+", valeur :"+this.valeur+", unite :"+this.unite);        
    }
}
