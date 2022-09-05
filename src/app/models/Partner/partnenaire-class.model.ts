import { ProduitClass } from "../Product/produit-class.model";

export class PartnenaireClass {
    idPartenaire : number|undefined;
    nomPartenaire : string|undefined;
    produits : ProduitClass[] = [];

    constructor(idp:number, np:string) {
        this.idPartenaire = idp;
        this.nomPartenaire = np;
    }

    addProduit(produit:ProduitClass) {
        this.produits.push(produit)
    }
}
