import faker from 'faker';

const mount = (el) => {
  let products = '';
  
  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  
  el.innerHTML = products;
};

// Context 1
// We are running this file in development in isolation.
// We are using our local index.html file
// which definitely has an element #dev-products.
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element with id dev-products
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context 2
// We are running this file in production in container app.
// There is no guarantee that an element #dev-products exists.
// We do not want to try to immediately render the app.

export { mount };