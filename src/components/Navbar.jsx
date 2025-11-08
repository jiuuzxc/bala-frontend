import { useState, useEffect, useRef } from 'react'
import { appLogo, icons, files } from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from 'motion/react'

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [splitbuttonOpen, setsplitbuttonOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setsplitbuttonOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      <img src={theme === 'dark' ? appLogo.logo_dark : appLogo.logo} className="w-32 sm:w-40" alt="logo"/>

      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        <img src={icons.close_icon} alt="close" className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer" onClick={() => setSidebarOpen(false)}/>

        <a onClick={()=>setSidebarOpen(false)} href="#" className="sm:hover:border-b">Home</a>
        <a onClick={()=>setSidebarOpen(false)} href="#algorithm" className="sm:hover:border-b">Algorithms Used</a>
        <a onClick={()=>setSidebarOpen(false)} href="#user-manual" className="sm:hover:border-b">User Manual</a>
        <a onClick={()=>setSidebarOpen(false)} href="#video-demo" className="sm:hover:border-b">Video Demonstration</a>
        <a onClick={()=>setSidebarOpen(false)} href="#developers" className="sm:hover:border-b">Meet the Developers</a>

        <div className="sm:hidden mt-3 relative" ref={dropdownRef}>
          <div className="flex items-center">
            <a href={files.balaExe} className="text-sm flex items-center gap-2 bg-white text-primary font-semibold px-6 py-2 rounded-l-full cursor-pointer hover:scale-105 transition-all" download>Download</a>
            <button onClick={() => setsplitbuttonOpen(!splitbuttonOpen)} className="bg-white text-primary font-bold px-3 py-1.5 rounded-r-full hover:scale-105 transition-all cursor-pointer ml-0.5">▼
            </button>
          </div>
        </div>
      </div>


      <div className='flex items-center gap-2 sm:gap-4' ref={dropdownRef}>
        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
        <img src={theme === 'dark' ? icons.menu_icon_dark : icons.menu_icon} alt="menu" onClick={() => setSidebarOpen(true)} className="w-8 sm:hidden cursor-pointer"/>

        <div className="hidden sm:flex items-center relative">
          <a href={files.balaExe} className="text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-l-full cursor-pointer hover:scale-105 transition-all" download>Download</a>
          <button onClick={() => setsplitbuttonOpen(!splitbuttonOpen)} className="bg-primary text-white px-3 py-1.5 rounded-r-full hover:scale-105 transition-all cursor-pointer ml-0.5">▼</button>
        </div>

        {splitbuttonOpen && (
          <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-lg w-52 overflow-hidden z-50">
            <a href={files.balaExe} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" download>bala_1.0.exe (Windows)</a>
            <a href={files.balaRpm} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" download>bala_1.0.rpm (Linux)</a>
            <a href={files.balaDeb} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" download>bala_1.0.deb (Linux)</a>
            <a href={files.balaLinux} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" download>bala-1.0-linux.tar.gz (Linux)</a>
            <a href={files.balaMac} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" download>bala-1.0-mac.tar.gz (macOS)</a>
            <a href={files.balaWindows} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" download>bala-1.0-windows.zip (Windows)</a>
          </div>
        )}


      </div>
    </motion.div>
  );
};

export default Navbar;
