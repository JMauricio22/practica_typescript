import { Album } from "./album";

export class User {
  private album: Album[] = [];

  constructor(
    private id: number,
    private username: string,
    private firstName: string,
    private isPro: boolean
  ) {}

  addAlbum(album: Album) {
    this.album.push(album);
  }
}
