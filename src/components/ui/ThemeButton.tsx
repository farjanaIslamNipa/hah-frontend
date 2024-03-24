import useTheme from "../../context/theme";
import sun from '../../assets/images/sun.svg'
import moon from '../../assets/images/moon.svg'


const ThemeButton = () => {
  const {themeMode, lightTheme, darkTheme} = useTheme()
  const onChangeTheme = () => {
    if(themeMode === 'dark'){
      lightTheme()
    }else {
      darkTheme()
    }
  }
  return (
    <div>
      <input onChange={onChangeTheme} checked={themeMode === 'dark'} type="checkbox" className="checkbox absolute opacity-0 top-0" id="checkbox" />
      <label htmlFor="checkbox" className="cursor-pointer flex justify-between items-center gap-1 bg-gray-400 dark:bg-gray-700 pl-[3px] pr-[5px] py-[2px] relative rounded-full label">
        <img src={sun} alt="Light mode" className="h-6 w-6" />
        <img src={moon} alt="dark mode" className="h-5 w-5" />
        <div className='ball w-[22px] h-[22px] bg-gray-50 shadow-sm absolute top-[3px] left-[4px] rounded-full transition-transform delay-100 duration-200 ease-out'></div>
      </label>
    </div>
  );
};

export default ThemeButton;