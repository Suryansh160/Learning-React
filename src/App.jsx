import './App.css'
import ClassBasedComponents from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import ContextButtonComponent from './components/products/components/context-concept/button.jsx'
import ContextTextComponent from './components/products/components/context-concept/text.jsx'
import Users from './components/products/components/users/index.jsx'
import UseReducerExample from './components/use-reducer-example.jsx'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3']

function App () {
  return (
    <div>
      <h1>React JS concepts </h1>
      {/* <ClassBasedComponents /> */}
      {/*<FunctionalComponent /> */}
      {/* <ProductList dummyProductData={dummyProductData} name='Suryansh' city="Lucknow"/> */}
      {/* <Users /> */}

      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}

      <UseReducerExample />
    </div>
  )
}

export default App
