import { motion } from 'framer-motion';
   import { Link } from 'react-router-dom';
   import InstagramFeed from '../components/InstagramFeed';
   import MoodboardGallery from '../components/MoodboardGallery';

   const fadeUpVariants = {
     hidden: { opacity: 0, y: 50 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
   };

   function HomePage() {
     return (
       <div className="bg-cream/90 backdrop-blur-sm min-h-screen">
         {/* Seksi Hero */}
         <motion.section
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUpVariants}
           className="bg-sage/80 blur-bg text-cream py-20 text-center"
         >
           <div className="container mx-auto px-4">
             <motion.h1 variants={fadeUpVariants} className="text-5xl font-script mb-4">Selamat Datang di Izzalia Craft</motion.h1>
             <motion.p variants={fadeUpVariants} className="text-xl font-sans mb-6">Jadilah nyaman dan stylish dengan tas handmade dan bahan craft kami.</motion.p>
             <motion.div variants={fadeUpVariants}>
               <Link
                 to="/customizer"
                 className="bg-caramel text-cream px-6 py-3 rounded-full hover:bg-pastelPink transition"
               >
                 Desain Tas Anda
               </Link>
             </motion.div>
           </div>
         </motion.section>

         {/* Galeri Moodboard */}
         <motion.section
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUpVariants}
           className="py-12"
         >
           <MoodboardGallery />
         </motion.section>

         {/* Feed Instagram */}
         <motion.section
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUpVariants}
           className="py-12 bg-sage/80 blur-bg"
         >
           <InstagramFeed />
         </motion.section>
       </div>
     );
   }

   export default HomePage;