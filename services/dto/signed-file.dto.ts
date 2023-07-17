export class SignedFileDTO {
  readonly signedUrl: string;
  readonly fileKey: string;

  constructor(signedUrl: string, fileKey: string) {
    this.signedUrl = signedUrl;
    this.fileKey = fileKey;
  }
}
