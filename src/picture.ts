import { Item } from "./item";
import { PhotoOrientation } from "./photoOrientation";

export class Picture extends Item {
  constructor(
    id: number,
    title: string,
    private date: string,
    private _orientation: PhotoOrientation
  ) {
    super(id, title);
  }

  private toString(): string {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
  }
}
