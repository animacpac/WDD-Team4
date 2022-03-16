export default class ProductList{ 
    constructor(category, dataSource, listElement) 
    {
    
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    }
}
const list = await this.dataSource.getData(this.category);