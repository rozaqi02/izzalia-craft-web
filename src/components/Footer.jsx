import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

   function Footer() {
     return (
       <footer className="bg-caramel text-cream py-8">
         <div className="container mx-auto px-4 text-center">
           <h3 className="text-2xl font-script mb-4">Izzalia Craft</h3>
           <p className="mb-4">Jadilah nyaman dan stylish</p>
           <div className="flex justify-center space-x-6 mb-4">
             <a href="https://instagram.com/izzalia.id" target="_blank" rel="noopener noreferrer">
               <FaInstagram className="w-6 h-6 hover:text-pastelPink" />
             </a>
             <a href="https://wa.me/+6285232029768" target="_blank" rel="noopener noreferrer">
               <FaWhatsapp className="w-6 h-6 hover:text-pastelPink" />
             </a>
           </div>
           <p>© 2025 Izzalia Craft. Hak cipta dilindungi.</p>
         </div>
       </footer>
     );
   }

   export default Footer;