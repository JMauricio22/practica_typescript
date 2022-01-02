import { Picture } from "./picture";
import { Item } from "./item";

export class Album extends Item {
  picture: Picture[];

  constructor(id: number, title: string) {
    super(id, title);
    this.picture = [];
  }

  addPicture(picture: Picture) {
    this.picture.push(picture);
  }
}
