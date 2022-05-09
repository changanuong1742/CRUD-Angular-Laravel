export class Author {
  id: number;
  name: string;
  comics?: Array<any>;

  constructor(id: number, name: string, comics: Array<any> = []){
    this.id = id;
    this.name = name;
    this.comics = comics;
  }
}
