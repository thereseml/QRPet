export class NewUser {
  constructor(
    public firstname: string,
    public lastname: string,
    public useremail: string,
    public password: string,
    public phone: number,
    public address: string,
    public city: string,
    public zip: number
  ) {}
}
