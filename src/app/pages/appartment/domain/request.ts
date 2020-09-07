export class Request {
  neighborhood: string;
  pax: number;
  tags: Array<string>

  constructor(request) {
    this.neighborhood = request['neighborhood'];
    this.pax = request['pax'];
    this.tags = request['tags']
  }
}
