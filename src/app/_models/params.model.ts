export class Params {
    page: number;
    size: number;
    sort: string;
    order: string;
    search: string;

    constructor() {
        this.page = 0;
        this.size = 10;
        this.sort = '';
        this.order = '';
        this.search = '';
    }

    public append(key: string, operator: string, value: string = '') {
        if (this.search !== '') {
            this.search = this.search + '|';
        }
        this.search = this.search + key + ':' + operator + ':' + value;
    }

    public toString() {
        return '?page=' + this.page + '&size=' + this.size + '&sort=' + this.sort + '&order=' + this.order;
    }
}
