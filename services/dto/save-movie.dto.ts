export class SavMovieDTO {
  readonly title: string;
  readonly fileKey: string;
  readonly username: string;

  constructor(title: string, fileKey: string, username: string) {
    this.title = title;
    this.fileKey = fileKey;
    this.username = username;
  }
}
