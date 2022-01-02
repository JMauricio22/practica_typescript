import { User } from "./user";
import { Album } from "./album";
import { Picture } from "./picture";
import { PhotoOrientation } from "./photoOrientation";

const user = new User(1, "Mau77", "Mauricio", true);
const album = new Album(1, "Rock");
const picture = new Picture(
  1,
  "Typescript Course",
  "12/10/2022",
  PhotoOrientation.Landscape
);

album.addPicture(picture);

user.addAlbum(album);

console.log("user", user);
