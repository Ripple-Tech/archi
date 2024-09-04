'use client'
import {useTheme} from 'next-themes'
import { MdDarkMode} from 'react-icons/md'
import { BsSun} from 'react-icons/bs'

export default function  ThemeToggle(){
    const {theme, setTheme } = useTheme()
   return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <div className='dark:hidden'>
         <MdDarkMode size={28}/>
        </div>
        <div className='dark:block hidden'>
          <BsSun size={28}/>
        </div>
         
       </button>

   )
}  