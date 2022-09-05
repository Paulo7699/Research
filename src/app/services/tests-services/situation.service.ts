import { Injectable } from '@angular/core';
import { AssociationSaisieCaracteristiqueClass } from 'src/app/models/AssociationSaisieCaracteristique/association-saisie-caracteristique-class.model';
import { CaracteristiqueClass } from 'src/app/models/Caracteristic/caracteristique-class.model';
import { EntrepriseClass } from 'src/app/models/Entreprise/entreprise-class.model';
import { PartnenaireClass } from 'src/app/models/Partner/partnenaire-class.model';
import { ProduitClass } from 'src/app/models/Product/produit-class.model';
import { SaisieClass } from 'src/app/models/Saisie/saisie-class.model';
import { SpecificationClass } from 'src/app/models/Specification/specification-class.model';
import { UserClass } from 'src/app/models/User/user-class.model';

@Injectable({
  providedIn: 'root'
})
export class SituationService {
  user : UserClass = new UserClass(2,"Mathilde", "Bridier", "Mathilde", "mcbridier@aol.com", 5, -1, 1, true);
  entreprise : EntrepriseClass = new EntrepriseClass(5,"Nutriset");

  partenaire1 : PartnenaireClass = new PartnenaireClass(10, "Partenaire01");
  partenaire2 : PartnenaireClass = new PartnenaireClass(20, "Partenaire02");

  produit1 : ProduitClass = new ProduitClass(30,"Produit01");
  caracteristique1 : CaracteristiqueClass = new CaracteristiqueClass(31,"Sodium");
  specificationCarac1 : SpecificationClass = new SpecificationClass("mg",10,15);
  caracteristique2 : CaracteristiqueClass = new CaracteristiqueClass(32,"Potassium");
  specificationCarac2 : SpecificationClass = new SpecificationClass("g",undefined,undefined);
  caracteristique3 : CaracteristiqueClass = new CaracteristiqueClass(33,"Uranium");
  specificationCarac3 : SpecificationClass = new SpecificationClass("kg",100,115);
  
  produit2 : ProduitClass = new ProduitClass(40,"Produit02");
  caracteristique4 : CaracteristiqueClass = new CaracteristiqueClass(41,"Carbon");
  specificationCarac4 : SpecificationClass = new SpecificationClass("cl",20,35);
  caracteristique5 : CaracteristiqueClass = new CaracteristiqueClass(42,"Azote");
  specificationCarac5 : SpecificationClass = new SpecificationClass("mf",0,55);
  caracteristique6 : CaracteristiqueClass = new CaracteristiqueClass(43,"Hydrogen");
  specificationCarac6 : SpecificationClass = new SpecificationClass("ng",0,5);

  //saisies du partenaire 1 pour le produit 1
  saisie1 : SaisieClass = new SaisieClass(34,10,30,true,new Date(2021,1,30,22,50,30),new Date(2021,1,30,22,50,30));
  saisie2 : SaisieClass = new SaisieClass(35,10,30,true,new Date(2021,2,20,21,12,33),new Date(2021,2,20,21,12,33));

  //associations saisie carac
  asso1saisie1 : AssociationSaisieCaracteristiqueClass | undefined;
  asso2saisie1 : AssociationSaisieCaracteristiqueClass | undefined;
  asso3saisie1 : AssociationSaisieCaracteristiqueClass | undefined;
  asso1saisie2 : AssociationSaisieCaracteristiqueClass | undefined;
  asso2saisie2 : AssociationSaisieCaracteristiqueClass | undefined;
  asso3saisie2 : AssociationSaisieCaracteristiqueClass | undefined;

  //saisies du partenaire 2 pour le produit 2
  saisie3 : SaisieClass = new SaisieClass(44,10,40,true,new Date(2020,1,26,22,50,26),new Date(2020,1,26,22,50,26));
  saisie4 : SaisieClass = new SaisieClass(45,10,40,true,new Date(2021,6,3,21,12,33),new Date(2021,6,3,21,12,33));

  //associations saisie carac
  asso1saisie3 : AssociationSaisieCaracteristiqueClass | undefined;
  asso2saisie3 : AssociationSaisieCaracteristiqueClass | undefined;
  asso3saisie3 : AssociationSaisieCaracteristiqueClass | undefined;
  asso1saisie4 : AssociationSaisieCaracteristiqueClass | undefined;
  asso2saisie4 : AssociationSaisieCaracteristiqueClass | undefined;
  asso3saisie4 : AssociationSaisieCaracteristiqueClass | undefined;


  constructor() {
    //specis
    this.caracteristique1.addSpeci(this.specificationCarac1);
    this.caracteristique2.addSpeci(this.specificationCarac2);
    this.caracteristique3.addSpeci(this.specificationCarac3);
    this.caracteristique4.addSpeci(this.specificationCarac4);
    this.caracteristique5.addSpeci(this.specificationCarac5);
    this.caracteristique6.addSpeci(this.specificationCarac6);

    //associations
      //partenaire1
    this.asso1saisie1 = new AssociationSaisieCaracteristiqueClass(34,31,20,this.caracteristique1.specification?.valeurMin,this.caracteristique1.specification?.valeurMax,50,this.caracteristique1.specification?.unite, undefined);
    this.asso2saisie1 = new AssociationSaisieCaracteristiqueClass(34,32,10,this.caracteristique2.specification?.valeurMin,this.caracteristique2.specification?.valeurMax,50,this.caracteristique2.specification?.unite, undefined);
    this.asso3saisie1 = new AssociationSaisieCaracteristiqueClass(34,33,10,this.caracteristique3.specification?.valeurMin,this.caracteristique3.specification?.valeurMax,50,this.caracteristique3.specification?.unite, undefined);

    this.asso1saisie2 = new AssociationSaisieCaracteristiqueClass(35,31,20,this.caracteristique1.specification?.valeurMin,this.caracteristique1.specification?.valeurMax,50,this.caracteristique1.specification?.unite, undefined);
    this.asso2saisie2 = new AssociationSaisieCaracteristiqueClass(35,32,10,this.caracteristique2.specification?.valeurMin,this.caracteristique2.specification?.valeurMax,50,this.caracteristique2.specification?.unite, undefined);
    this.asso3saisie2 = new AssociationSaisieCaracteristiqueClass(35,33,10,this.caracteristique3.specification?.valeurMin,this.caracteristique3.specification?.valeurMax,50,this.caracteristique3.specification?.unite, undefined);
      //partenaire2
    this.asso1saisie3 = new AssociationSaisieCaracteristiqueClass(44,41,20,this.caracteristique1.specification?.valeurMin,this.caracteristique1.specification?.valeurMax,50,this.caracteristique1.specification?.unite, undefined);
    this.asso2saisie3 = new AssociationSaisieCaracteristiqueClass(44,42,10,this.caracteristique2.specification?.valeurMin,this.caracteristique2.specification?.valeurMax,50,this.caracteristique2.specification?.unite, undefined);
    this.asso3saisie3 = new AssociationSaisieCaracteristiqueClass(44,43,10,this.caracteristique3.specification?.valeurMin,this.caracteristique3.specification?.valeurMax,50,this.caracteristique3.specification?.unite, undefined);

    this.asso1saisie3 = new AssociationSaisieCaracteristiqueClass(45,41,20,this.caracteristique1.specification?.valeurMin,this.caracteristique1.specification?.valeurMax,50,this.caracteristique1.specification?.unite, undefined);
    this.asso2saisie3 = new AssociationSaisieCaracteristiqueClass(45,42,10,this.caracteristique2.specification?.valeurMin,this.caracteristique2.specification?.valeurMax,50,this.caracteristique2.specification?.unite, undefined);
    this.asso3saisie3 = new AssociationSaisieCaracteristiqueClass(45,43,10,this.caracteristique3.specification?.valeurMin,this.caracteristique3.specification?.valeurMax,50,this.caracteristique3.specification?.unite, undefined);

    //prods
    this.produit1.addCarac(this.caracteristique1);
    this.produit1.addCarac(this.caracteristique2);
    this.produit1.addCarac(this.caracteristique3);

    this.produit2.addCarac(this.caracteristique4);
    this.produit2.addCarac(this.caracteristique5);
    this.produit2.addCarac(this.caracteristique6);

    this.partenaire1.addProduit(this.produit1);
    this.partenaire1.addProduit(this.produit2);
    this.partenaire2.addProduit(this.produit1);
    this.partenaire2.addProduit(this.produit2);
  }

  visualizePartners() {
    console.log("PARTNENAIRE 1 :");
    for(let p of this.partenaire1.produits) {
      console.log("\t- "+p.nomProduit);
      for(let c of p.caracteristiques){
        console.log("\t\t-"+c.nomCaracteristique); 
        let speci = c.specification;
        console.log("unite : "+speci?.unite+", min : "+speci?.valeurMin+", max : "+speci?.valeurMax);
      }
    }

    console.log("SAISIES :");
    console.log("\tsaisie 1:");
    console.log("\t\t"+this.asso1saisie1?.displayAsso());
    console.log("\t\t"+this.asso2saisie1?.displayAsso());
    console.log("\t\t"+this.asso3saisie1?.displayAsso());

    console.log("\tsaisie 2:");
    console.log("\t\t"+this.asso1saisie2?.displayAsso());
    console.log("\t\t"+this.asso2saisie2?.displayAsso());
    console.log("\t\t"+this.asso3saisie2?.displayAsso());

    console.log("PARTNENAIRE 2 :");   
    for(let p of this.partenaire2.produits) {
      console.log("\t- "+p.nomProduit);
      for(let c of p.caracteristiques) {
        console.log("\t\t-"+c.nomCaracteristique);      
        let speci = c.specification;
        console.log("\t\t->unite : "+speci?.unite+", min : "+speci?.valeurMin+", max : "+speci?.valeurMax);
      }
    }

    console.log("SAISIES :");
    console.log("\tsaisie 3:");
    console.log("\t\t"+this.asso1saisie3?.displayAsso());
    console.log("\t\t"+this.asso2saisie3?.displayAsso());
    console.log("\t\t"+this.asso3saisie3?.displayAsso());

    console.log("\tsaisie 4:");
    console.log("\t\t"+this.asso1saisie4?.displayAsso());
    console.log("\t\t"+this.asso2saisie4?.displayAsso());
    console.log("\t\t"+this.asso3saisie4?.displayAsso());
  }

  getDataCarac31Partneraire1() {
    let data : any[] = [];
    data.push(this.asso1saisie1?.valeur);
    data.push(this.asso1saisie2?.valeur);    

    return data;
  }

  getRandomInt(max:number) : number{
    return Math.floor(Math.random() *max);
  }

  getRandomData(idCarac : number) {
    let randomData : any[] = []
    const startDate = new Date(1619701200*1000);
    let nextHour = startDate;
    for (let index = 0; index < 24; index++) {
      nextHour = new Date((1619701200 + (index*(this.getRandomInt(3600)+3600))) *1000);
      let valeurMin = 30;
      let valeur = this.getRandomInt(100);   
      let valeurMax = 70;
      let randomObjectData = {
        "idCaracteristique":idCarac,
        "idPartenaire":this.getRandomInt(2),
        "valeurMin":valeurMin,
        "valeurMax":valeurMax,
        "valeur":valeur,
        "valeurIncertitude":this.getRandomInt(10),
        "date":nextHour
      }

      randomData.push(randomObjectData);
    }

    return randomData;
  }
}
