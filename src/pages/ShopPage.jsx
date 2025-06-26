import { motion } from 'framer-motion';
   import OrderTrackingWidget from '../components/OrderTrackingWidget';

   function ShopPage() {
     const products = [
       { id: 1, name: 'Tas Tote Klasik', price: 'Rp 150.000', image: 'https://via.placeholder.com/300' },
       { id: 2, name: 'Pouch Kanvas', price: 'Rp 80.000', image: 'https://via.placeholder.com/300' },
       { id: 3, name: 'Tas Kustom', price: 'Rp 200.000', image: 'https://via.placeholder.com/300' },
     ];

     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="container mx-auto px-4 py-12 bg-cream"
       >
         <h2 className="text-4xl font-script text-center mb-8">Toko Kami</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
           {products.map((product) => (
             <motion.div
               key={product.id}
               whileHover={{ scale: 1.05 }}
               transition={{ type: 'spring', stiffness: 300 }}
               className="bg-cream rounded-lg overflow-hidden shadow-md"
             >
               <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
               <div className="p-4">
                 <h3 className="text-xl font-semibold">{product.name}</h3>
                 <p className="text-gray-600">{product.price}</p>
                 <a
                   href={`https://wa.me/+6285232029768?text=Halo, saya tertarik dengan ${product.name}`}
                   className="mt-2 inline-block bg-caramel text-cream px-4 py-2 rounded-full hover:bg-pastelPink transition"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   Pesan Sekarang
                 </a>
               </div>
             </motion.div>
           ))}
         </div>
         <OrderTrackingWidget />
       </motion.div>
     );
   }

   export default ShopPage;