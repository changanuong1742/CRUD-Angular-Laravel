import {Skill} from "./Skill";
export class Hero{
    id: Number;
    name: string;
    img: string;
    skills: Array<Skill>;

    constructor(id: Number, name: string, img: string, skills: Array<Skill> = []){
        this.id = id;
        this.name = name;
        this.img = img;
        this.skills = skills;
    }
}