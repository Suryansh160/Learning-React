import './App.css'
import ClassBasedComponents from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import Users from './components/products/components/users/index.jsx'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3']

function App () {
  return (
    <div>
      <h1>React JS concepts </h1>
      {/* <ClassBasedComponents /> */}
      {/*<FunctionalComponent /> */}
      {/* <ProductList dummyProductData={dummyProductData} name='Suryansh' city="Lucknow"/> */}
      <Users />
    </div>
  )
}

export default App
