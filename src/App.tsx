import { DefaultLayout } from './layouts/DefaultLayout/Index'
import { Globalstyle } from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <Globalstyle />
    </ThemeProvider>
    
  )
}

