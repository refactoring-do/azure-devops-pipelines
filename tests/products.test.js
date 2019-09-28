const products = require('../data/products.json');
const productsService = require('../services/product.service');
test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
});

test('it should return a product', ()=>{
  let product = productsService.getProductById(1);
  expect(typeof product).toBe("object")
});

test('it should return products', ()=>{
  let products = productsService.getProducts();
  expect(products).toBeDefined();
});

test('it should add a new product', ()=>{

  let product={
    productName: "Sweet Corncobs",
    image: "🌽",
    from: "Germany",
    nutrients: "Vitamin C, Magnesium",
    quantity: "2 🌽",
    price: "2.00",
    organic: false,
    description: "Also."
  }
  let response = productsService.addProduct(product);
  expect(true).toBe(response);
});