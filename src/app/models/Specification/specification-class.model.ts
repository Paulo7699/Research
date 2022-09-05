export class SpecificationClass {
    unite : string | undefined;
    valeurMin : number | undefined;
    valeurMax : number | undefined;

    constructor(u:string|undefined, vmin:number|undefined, vmax:number|undefined) {
        if(u)
            this.unite = u;
        if(vmin)
            this.valeurMin = vmin;
        if(vmax)
            this.valeurMax = vmax;
    }
}
