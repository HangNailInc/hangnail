export default class Tile {
	constructor(
		public x: number,
		public y: number,
		public color: string,
		public modified: Date
	) {}
}

/*
class Tile {
  private static colorRegex = new RegExp("#([0-9a-fA-F]{3}){1,2}")
  constructor(private color: string, private  x: number, private  y: number) {
  }

  public set X(x: number) {
    if (!Number.isInteger(x)) {
      throw new Error("X must be an integer");
    }
    this.x = x;
  }

  public get X(): number {
    return this.x;
  }
  
  public set Y(y: number) {
    if (!Number.isInteger(y)) {
      throw new Error("Y must be an integer");
    }
    this.y = y;
  }

  public get Y(): number {
    return this.y;
  }

  public set Color(s: string) {
    if (!Tile.colorRegex.test(s)) {
      throw new Error("Color must be in form #059ACF");
    }
    this.color = s;
  }

  public get Color(): string {
    return this.color;
  }
}
*/
