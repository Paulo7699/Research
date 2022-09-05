export class UserClass {
    idUser : number | undefined;
    firstName : string | undefined;
    lastName : string | undefined;
    username : string | undefined;
    email : string = '';
    idParent : number | undefined;
    idPartenaire : number | undefined;
    type : number | undefined;
    isAdminEntreprise : boolean = false;

    constructor(id:number, fn:string|undefined, ln:string|undefined, un:string, em:string, idparent:number, idpartenaire:number, type:number, isA:boolean) {
        this.idUser = id;
        if(fn)
            this.firstName = fn;
        if(ln)
            this.lastName = ln;
        this.username = un;
        this.email = em;
        this.idParent = idparent;
        this.idPartenaire = idpartenaire;
        this.type = type;
        this.isAdminEntreprise = isA;
    }
}
