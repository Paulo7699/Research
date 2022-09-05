import { PartnenaireClass } from "../Partner/partnenaire-class.model";
import { ProduitClass } from "../Product/produit-class.model";

export class EntrepriseClass {
    idEntreprise : number|undefined;
    nomEntreprise : string|undefined;
    partenaires : PartnenaireClass[] = [];
    produitsDemandes : ProduitClass[] = [];

    constructor(ide:number, ne:string) {
        this.idEntreprise = ide;
        this.nomEntreprise = ne;
    }

    addPartnenaire(partenaire:PartnenaireClass) {
        this.partenaires.push(partenaire)
    }

    addProduit(produit:ProduitClass) {
        this.produitsDemandes.push(produit)
    }
}
