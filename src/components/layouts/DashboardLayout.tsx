import {Outlet} from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import DashboardNav from "../shared/DashboardNav";
import {ThemeProvider} from "../../context/theme";
import {useEffect, useState} from "react";

const DashboardLayout = () => {
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
      <div className="grid grid-cols-12">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 sm:col-span-9 lg:col-span-10">
          <DashboardNav />
          <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;