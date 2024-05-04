fetch('products.json')
    .then(response => response.json())
    .then(data => {
        displayProducts(data);
    })
    .catch(error => console.error(error));

    function displayProducts(products) {
        const FeaturedMugs = document.getElementById('FeaturedMugs');
        const MoreProducts = document.getElementById('MoreProducts');
      
        products.forEach((product, index) => {
          const productElement = document.createElement('div');
          productElement.classList.add('product');
      
          let priceHTML = `
            <p class="product__price text-base2">$ ${product.price.toFixed(2)} USD</p>
          `;
      
          if (product.hasOwnProperty('price_old')) {
            priceHTML = `
                <div class="flex justify-center">
                    <p class="product__price-new text-base_2 font-bold">$ ${product.price.toFixed(2)}</p>
                    <p class="product__price-old text-base2">$ ${product.price_old.toFixed(2)} USD</p>
                </div>
              `;
          }
      
          productElement.innerHTML = `
            <img class="product__image" src="${product.image}" alt="${product.name}">
            <div class="flex flex-col justify-center text-center">
              <h3 class="product__name text-lg2">${product.name}</h3>
              ${priceHTML}
            </div>
          `;
      
          if (index < 2) {
            FeaturedMugs.appendChild(productElement);
          } else {
            MoreProducts.appendChild(productElement);
          }
        });
      }