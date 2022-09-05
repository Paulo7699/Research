export class LaboratoireClass {
    idLaboratoire : number|undefined;
    idEntreprise : number|undefined;
    nomLaboratoire : string|undefined;

    constructor(idl:number, ide:number, nl:string) {
        this.idLaboratoire = idl;
        this.idEntreprise = ide;
        this.nomLaboratoire = nl;
    }
}
