import ProductItem from './components/product-item'
import './style.css'
import { useEffect, useState } from 'react'

const initialState = false

function ProductList ({ name, city, dummyProductData }) {
  const [flag, setFlag] = useState(initialState)
  const [count, setCount] = useState(0)
  const [changeStyle, setChangeStyle] = useState(false)

  //   function renderTextBlock (getFlag) {
  //     return getFlag ? (
  //   <h4>
  //     Name is {name}. I live in {city}
  //   </h4>
  // ) : (
  //   <h4>Hello World</h4>
  // )
  //   }

  // const renderTextBlock = flag ? (
  //   <h4>
  //     Name is {name}. I live in {city}
  //   </h4>
  // ) : (
  //   <h4>Hello World</h4>
  // )

  function handleToggleText () {
    setFlag(!flag)
  }

  function handleIncreaseCount () {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('run only once page load')
    setFlag(!flag)

    return () => console.log('component unmounted')
  }, [])

  useEffect(() => {
    console.log('count changes')
    if (count === 10) {
      setChangeStyle(true)
    }
  }, [count])

  return (
    <div>
      <h3 className='title'>E Commerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {/* <ProductItem /> */}
      {flag ? (
        <h4>
          {name} and {city}
        </h4>
      ) : (
        <h4>Hello</h4>
      )}

      {/* {renderTextBlock} */}

      <div>
        <p>Count is {count}</p>
        <button
          style={{ backgroundColor: changeStyle ? 'black' : 'magenta' }}
          onClick={handleIncreaseCount}
        >
          Increase Count
        </button>
      </div>

      <ul>
        {dummyProductData.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
