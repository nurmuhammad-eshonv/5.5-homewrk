import data from './data.js'
const ol = document.querySelector('ol')
const container = document.querySelector('.container')
   
container.setAttribute('style', 'border:solid red 1px',)
container.setAttribute('style', 'margin-left:400px');

data.forEach((product) => {
  const {
    id,
    brand,
    category,
    description,
    discountPercentage,
    images,
    thumbnail,
    title,
    price,
  } = product;
  
  
  const li = document.createElement('li')
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  let brands = document.createElement('brand')   
  const mainDiv = document.createElement('div')
  const prices = document.createElement('price')
  const  discountPercentages  = document.createElement('p')
  const categorys = document.createElement('p')
  const btn = document.createElement('button')
  
  prices.textContent = price
  h2.textContent = title
  img.src = thumbnail
  discountPercentages.textContent = discountPercentage
  categorys.textContent = category
  btn.textContent = 'Buy now'
 
  prices.textContent = `OUR PRICES: $ ${price}`
  discountPercentages.textContent = `DISCOUNT PERSENTAGES: $ ${discountPercentage} `
  categorys.textContent = `CATEGORY: ${category}`
  h2.setAttribute('style', 'margin-left:150px')
  h2.style.color = 'green'
  h2.style.fontFamily = 'sans-serif'
  h2.style.fontSize = '50px'
  h2.style.marginTop = '-5px'
  img.style.borderRadius = '40px'
  brands.textContent = brand
  mainDiv.style.width = '500px'
  mainDiv.style.height = '600px'
  mainDiv.style.marginBottom = '200px'
  mainDiv.style.borderRadius = '40px'
  mainDiv.style.backgroundColor = '#800080'
  mainDiv.style.paddingTop = '1px'
  prices.style.fontFamily = 'sans-serif'
  prices.style.fontSize = '20px'
  prices.style.color = '#ffffff'
  prices.style.marginLeft = '10px'
  discountPercentages.style.color = '#ffffff'
  discountPercentages.style.marginLeft = '10px'
  discountPercentages.style.fontSize = '20px'
  discountPercentages.style.fontFamily = 'sans-serif'

  categorys.style.color = '#ffffff'
  categorys.style.marginLeft = '10px'
  categorys.style.fontSize = '20px'
  categorys.style.fontFamily = 'sans-serif'


  btn.style.width = '200px'
  btn.style.height = '50px'
  btn.style.color = 'green'
  btn.style.backgroundColor = '#ccff00'
  btn.style.border = 'none'
  btn.style.borderRadius = '10px'
  btn.style.fontSize = '20px'
  btn.style.marginLeft = '150px'
 
  li.appendChild(img)
  li.appendChild(h2)
  li.appendChild(prices)
  li.appendChild(discountPercentages)
  li.appendChild(categorys)
  li.appendChild(btn)
  
  mainDiv.appendChild(li)

  ol.appendChild(mainDiv)

  container.appendChild(ol)
})