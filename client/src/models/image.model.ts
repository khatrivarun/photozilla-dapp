export class Image {
  public owner: string;
  public imgHash: string;

  constructor(owner: string, imgHash: string) {
    this.owner = owner;
    this.imgHash = imgHash;
  }
}
