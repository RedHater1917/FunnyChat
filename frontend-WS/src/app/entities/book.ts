import { Image } from './image';

export class Book{
    constructor(
      public id?: number,
      public name?: string,
      public photo?: Image,
      public year?:number,
      public izdat?:string,
      public description?: string,
      public handsCount?: string
    ) {}
  }