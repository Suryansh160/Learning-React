import ProductItem from './components/product-item'

function ProductList ({ name, city, dummyProductData }) {
  return (
    <div>
      <h3>E Commerce Project</h3>
      {/* <ProductItem /> */}
      <h4>
        Name is {name}. I live in {city}
      </h4>

      <ul>
        {dummyProductData.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
