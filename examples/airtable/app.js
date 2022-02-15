const result = document.querySelector('.result')

const fetchProducts = async () => {
  try {
    
    const { data } = await axios.get('/api/catdog')
    const products = data
      .map((product) => {
        const { id, image, name, price, company } = product
        return `<a href="product.html?id=${id}" class="product">
     <img src="${image}" alt="${name}"/>
     <div class="info">
     <h5>${name}</h5>
     <h5 class="price">$${price}</h5>
 
     <p>${company}</p>

     </div>
     </a>`
      })
      .join('')
    result.innerHTML = products
  } catch (error) {
    result.innerHTML = '<h4>There was an error</h4>'
  }
}

fetchProducts()
