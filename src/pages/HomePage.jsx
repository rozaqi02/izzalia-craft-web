import { motion } from 'framer-motion';
     import { Link } from 'react-router-dom';
     import InstagramFeed from '../components/InstagramFeed';
     import MoodboardGallery from '../components/MoodboardGallery';

     function HomePage() {
       return (
         <div>
           {/* Seksi Hero */}
           <motion.section
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="bg-sage text-cream py-20 text-center"
           >
             <div className="container mx-auto px-4">
               <h1 className="text-5xl font-script mb-4">Selamat Datang di Izzalia Craft</h1>
               <p className="text-xl font-sans mb-6">Jadilah nyaman dan stylish dengan tas handmade dan bahan craft kami.</p>
               <Link
                 to="/customizer"
                 className="bg-caramel text-cream px-6 py-3 rounded-full hover:bg-pastelPink transition"
               >
                 Desain Tas Anda
               </Link>
             </div>
           </motion.section>

           {/* Galeri Moodboard */}
           <section className="py-12 bg-cream">
             <MoodboardGallery />
           </section>

           {/* Feed Instagram */}
           <section className="py-12 bg-sage">
             <InstagramFeed />
           </section>
         </div>
       );
     }

     export default HomePage;