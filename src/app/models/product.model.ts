export class ProductModel{
    id : number = 0;
    brand ?: string = '';
    name ?: string = '';
    weight ?: number = 0;
    caret ?: '18 عیار' | '24 عیار'='18 عیار';
    comment : string = '';
    image : string = 'https://nabtala.ir/wp-content/uploads/2019/08/%D8%AE%D8%B1%DB%8C%D8%AF-%D8%B3%DA%A9%D9%87-%DA%AF%D8%B1%D9%85%DB%8C.png';
    stock : number = 0;
    hire : number = 0;
}
