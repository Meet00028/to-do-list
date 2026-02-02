export class APIFeatures {
  constructor(public query: any, private queryString: any) {}

  filter() {
    const qObj = { ...this.queryString };
    ['page', 'sort', 'limit', 'fields'].forEach(el => delete qObj[el]);
    let qStr = JSON.stringify(qObj);
    qStr = qStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    this.query = this.query.find(JSON.parse(qStr));
    return this;
  }

  sort() {
    this.query = this.query.sort(this.queryString.sort?.split(',').join(' ') || '-createdAt');
    return this;
  }

  limitFields() {
    this.query = this.query.select(this.queryString.fields?.split(',').join(' ') || '-__v');
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    this.query = this.query.skip((page - 1) * limit).limit(limit);
    return this;
  }
}
