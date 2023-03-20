export class CupWon {
    private year : number;
    private title : string;

    constructor(year : number, title : string){
        this.year = year;
        this.title = title;
    }

    setYear(year : number) : void {
        this.year = year;
    }

    getYear() : number {
        return this.year;
    }

    setTitle(title : string) : void {
        this.title = title;
    }

    getTitle() : string {
        return this.title;
    }
}