import { createContext, useState } from 'react'

// create context
export const GlobalContext = createContext(null)

// create global state that recieve component as a child
function GlobalState ({ children }) {
  const [theme, setTheme] = useState('dark')

  function handleChangeThemeOnButtonClick () {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <GlobalContext.Provider value={{ theme, handleChangeThemeOnButtonClick }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
