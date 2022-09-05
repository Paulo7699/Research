import { CaracteristiqueClass } from "../Caracteristic/caracteristique-class.model";

export class ProduitClass {
    idProduit : number|undefined;
    nomProduit : string|undefined;
    caracteristiques : CaracteristiqueClass[] = [];

    constructor(idp:number, np:string) {
        this.idProduit = idp;
        this.nomProduit = np;
    }

    addCarac(caracteristique:CaracteristiqueClass) {
        this.caracteristiques.push(caracteristique)
    }
}

