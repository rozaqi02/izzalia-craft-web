import { useState } from 'react';
   import { Link } from 'react-router-dom';
   import { motion } from 'framer-motion';
   import logo from '../assets/logo.png';

   function Header() {
     const [isOpen, setIsOpen] = useState(false);

     return (
       <motion.header
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         className="bg-caramel text-cream sticky top-0 z-50 shadow-md"
       >
         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
           <Link to="/">
             <img src={logo} alt="Izzalia Craft" className="h-12" />
           </Link>
           <nav className="hidden md:flex space-x-6">
             <Link to="/" className="hover:text-pastelPink">Beranda</Link>
             <Link to="/about" className="hover:text-pastelPink">Tentang</Link>
             <Link to="/shop" className="hover:text-pastelPink">Toko</Link>
             <Link to="/customizer" className="hover:text-pastelPink">Kustomisasi</Link>
             <Link to="/tutorials" className="hover:text-pastelPink">Tutorial</Link>
           </nav>
           <button
             className="md:hidden"
             onClick={() => setIsOpen(!isOpen)}
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
           </button>
         </div>
         {isOpen && (
           <motion.nav
             initial={{ height: 0 }}
             animate={{ height: 'auto' }}
             className="md:hidden bg-caramel"
           >
             <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
               <Link to="/" className="hover:text-pastelPink" onClick={() => setIsOpen(false)}>Beranda</Link>
               <Link to="/about" className="hover:text-pastelPink" onClick={() => setIsOpen(false)}>Tentang</Link>
               <Link to="/shop" className="hover:text-pastelPink" onClick={() => setIsOpen(false)}>Toko</Link>
               <Link to="/customizer" className="hover:text-pastelPink" onClick={() => setIsOpen(false)}>Kustomisasi</Link>
               <Link to="/tutorials" className="hover:text-pastelPink" onClick={() => setIsOpen(false)}>Tutorial</Link>
             </div>
           </motion.nav>
         )}
       </motion.header>
     );
   }

   export default Header;