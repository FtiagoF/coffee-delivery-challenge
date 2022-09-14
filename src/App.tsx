import { DefaultLayout } from './layouts/DefaultLayout/Index'
import { Globalstyle } from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
          
          <Globalstyle />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
    
  )
}

