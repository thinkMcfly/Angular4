export class Recipe{
    public name: string;
    public descpription: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.descpription = desc;
        this.imagePath = imagePath;
    }
}