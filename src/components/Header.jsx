import { useState, useEffect } from 'react';
   import { Link, useLocation } from 'react-router-dom';
   import { motion } from 'framer-motion';
   import logo from '../assets/logo.png';

   function Header() {
     const [isOpen, setIsOpen] = useState(false);
     const location = useLocation();
     const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

     useEffect(() => {
       document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
       localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
     }, [isDarkMode]);

     return (
       <motion.header
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         className="bg-cream/80 blur-bg sticky top-0 z-50 shadow-md"
       >
         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
           <Link to="/">
             <img src={logo} alt="Izzalia Craft" className="h-12" />
           </Link>
           <nav className="hidden md:flex space-x-6">
             <Link to="/" className={`hover:text-pastelPink ${location.pathname === '/' ? 'border-b-2 border-caramel' : ''}`}>Beranda</Link>
             <Link to="/about" className={`hover:text-pastelPink ${location.pathname === '/about' ? 'border-b-2 border-caramel' : ''}`}>Tentang</Link>
             <Link to="/shop" className={`hover:text-pastelPink ${location.pathname === '/shop' ? 'border-b-2 border-caramel' : ''}`}>Toko</Link>
             <Link to="/customizer" className={`hover:text-pastelPink ${location.pathname === '/customizer' ? 'border-b-2 border-caramel' : ''}`}>Kustomisasi</Link>
             <Link to="/tutorials" className={`hover:text-pastelPink ${location.pathname === '/tutorials' ? 'border-b-2 border-caramel' : ''}`}>Tutorial</Link>
           </nav>
           <div className="flex items-center space-x-4">
             <button
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="bg-caramel text-cream px-3 py-1 rounded-full"
             >
               {isDarkMode ? '☀️' : '🌙'}
             </button>
             <button
               className="md:hidden"
               onClick={() => setIsOpen(!isOpen)}
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
             </button>
           </div>
         </div>
         {isOpen && (
           <motion.nav
             initial={{ height: 0 }}
             animate={{ height: 'auto' }}
             className="md:hidden bg-cream/80 blur-bg"
           >
             <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
               <Link to="/" className={`hover:text-pastelPink ${location.pathname === '/' ? 'border-b-2 border-caramel' : ''}`} onClick={() => setIsOpen(false)}>Beranda</Link>
               <Link to="/about" className={`hover:text-pastelPink ${location.pathname === '/about' ? 'border-b-2 border-caramel' : ''}`} onClick={() => setIsOpen(false)}>Tentang</Link>
               <Link to="/shop" className={`hover:text-pastelPink ${location.pathname === '/shop' ? 'border-b-2 border-caramel' : ''}`} onClick={() => setIsOpen(false)}>Toko</Link>
               <Link to="/customizer" className={`hover:text-pastelPink ${location.pathname === '/customizer' ? 'border-b-2 border-caramel' : ''}`} onClick={() => setIsOpen(false)}>Kustomisasi</Link>
               <Link to="/tutorials" className={`hover:text-pastelPink ${location.pathname === '/tutorials' ? 'border-b-2 border-caramel' : ''}`} onClick={() => setIsOpen(false)}>Tutorial</Link>
             </div>
           </motion.nav>
         )}
       </motion.header>
     );
   }

   export default Header;