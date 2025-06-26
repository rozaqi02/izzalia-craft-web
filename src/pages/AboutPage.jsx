import { motion } from 'framer-motion';

   function AboutPage() {
     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="container mx-auto px-4 py-12 bg-cream text-center"
       >
         <h2 className="text-4xl font-script mb-8">Tentang Izzalia Craft</h2>
         <p className="text-lg mb-6">
           Sejak 2014, Izzalia Craft telah menciptakan tas handmade dan bahan craft dengan cinta dan kreativitas. Misi kami adalah membuat kamu nyaman dan stylish dengan setiap produk.
         </p>
         <p className="text-lg">
           Ikuti kami di <a href="https://instagram.com/izzalia.id" className="text-caramel hover:text-pastelPink" target="_blank" rel="noopener noreferrer">Instagram</a> atau hubungi kami via <a href="https://wa.me/+6285232029768" className="text-caramel hover:text-pastelPink" target="_blank" rel="noopener noreferrer">WhatsApp</a> untuk pesanan kustom!
         </p>
       </motion.div>
     );
   }

   export default AboutPage;