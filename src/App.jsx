import './App.css'
import ClassBasedComponents from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3']


function App () {
  return (
    <div>
      <h1>React JS concepts </h1>
      {/* <ClassBasedComponents />
      <FunctionalComponent /> */}
      <ProductList dummyProductData={dummyProductData} name='Suryansh' city="Lucknow"/>
    </div>
  )
}

export default App
