import { useState } from 'react';
   import { motion } from 'framer-motion';

   function OrderTrackingWidget() {
     const [orderId, setOrderId] = useState('');

     const handleTrack = () => {
       if (orderId) {
         window.open(`https://wa.me/+6285232029768?text=Halo, saya ingin melacak pesanan ${orderId}`, '_blank');
       }
     };

     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="container mx-auto px-4 py-6 bg-sage rounded-lg shadow-md"
       >
         <h3 className="text-2xl font-script text-center mb-4">Lacak Pesananmu</h3>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
           <input
             type="text"
             placeholder="Masukkan ID Pesanan"
             value={orderId}
             onChange={(e) => setOrderId(e.target.value)}
             className="w-full sm:w-1/2 p-2 border rounded"
           />
           <div
             onClick={handleTrack}
             className="bg-caramel text-cream px-4 py-2 rounded-full hover:bg-pastelPink cursor-pointer text-center"
           >
             Lacak Sekarang
           </div>
         </div>
       </motion.div>
     );
   }

   export default OrderTrackingWidget;