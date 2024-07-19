export interface User {
    id: number,
    name:string,
    lastname:string,
    username:string,
    isAdmin?:number,
    password:string,
    isActive?:string,
}