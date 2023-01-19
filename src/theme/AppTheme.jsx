import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"


import { purpleTheme } from "./purpleTheme"



//HIGH ORDER COMPONENT

// No es mas que un componente que tendra otros componentes hijos
export const AppTheme = ({children}) => { // el componente que integra
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
