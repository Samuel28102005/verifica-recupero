export class Annunci{
nome:string;
telefono:string;
messaggio:string;
rispondi:string []=[];
like:number;
constructor(nome:string, telefono:string, messaggio:string){
this.nome=nome;
this.telefono=telefono;
this.messaggio=messaggio;
this.like=0;

}
}