import { SpecificationClass } from "../Specification/specification-class.model";

export class CaracteristiqueClass {
    idCaracteristique : number|undefined;
    nomCaracteristique : string|undefined;
    specification : SpecificationClass|undefined;

    constructor(idc:number, nc:string) {
        this.idCaracteristique = idc;
        this.nomCaracteristique = nc;
    }

    addSpeci(specification:SpecificationClass) {
        this.specification = specification;
    }
}
