export const Roles: any = ["ADMIN", "USER"];

export class User{
 constructor(
    public id?:string,
    public firstName?:string,
    public lastName?:string,
    public role?:string,
    public email?:string,
    public password?:string,
 ) {}
}