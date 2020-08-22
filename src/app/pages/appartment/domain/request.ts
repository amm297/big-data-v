export class Request {
  neighborhood: string;
  pax: number;

  constructor(request) {
    this.neighborhood = request['neighborhood'];
    this.pax = request['pax'];
  }
}
