import './App.css'
import ClassBasedComponents from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import ContextButtonComponent from './components/products/components/context-concept/button.jsx'
import ContextTextComponent from './components/products/components/context-concept/text.jsx'
import Users from './components/products/components/users/index.jsx'
import UseReducerExample from './components/use-reducer-example.jsx'
import FormComponent from './components/form/index.jsx'
import LoginComponent from './components/login/index.jsx'
import RegisterComponent from './components/register/index.jsx'

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

      {/* <UseReducerExample /> */}

      {/* <FormComponent /> */}
      <div style={{ display: 'flex', gap: '500px' }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  )
}

export default App
