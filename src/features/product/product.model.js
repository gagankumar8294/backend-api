export default class ProductModel {
    constructor (
        id,
        name,
        description,
        price,
        quantity,
        category,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
    static GetAll() {
        return products;
    }
}

var products = [

    new ProductModel(
        1,
        'Product 1',
        'Description for Product 1',
        10,
        100,
        'Category 1'
    ),
    new ProductModel(
        2,
        'Product 2',
        'Description for Product 2',
        20,
        80,
        'Category 2'
    ),
]