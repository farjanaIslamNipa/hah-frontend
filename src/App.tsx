
import {useEffect, useState} from "react"
import ScrollToTop from "./components/ScrollToTop"
import WebLayout from "./components/layouts/WebLayout"
import {ThemeProvider} from "./context/theme"


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    console.log('dark')
    setThemeMode('dark')
  }
  const lightTheme = () => {
    console.log('light')
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove('dark', 'light')
    document.querySelector('html')?.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <ScrollToTop />
        <WebLayout />
      </div>
    </ThemeProvider>
  )
}

export default App
