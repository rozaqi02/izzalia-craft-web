import { motion } from 'framer-motion';
   import { useState } from 'react';

   function TutorialPopup() {
     const [isOpen, setIsOpen] = useState(false);

     return (
       <div>
         <button
           onClick={() => setIsOpen(true)}
           className="bg-caramel text-cream px-4 py-2 rounded-full hover:bg-pastelPink"
         >
           Pelajari Craft
         </button>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
           >
             <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="bg-cream p-8 rounded-lg max-w-md"
             >
               <h3 className="text-2xl font-script mb-4">Tutorial Menjahit Tas Sederhana</h3>
               <p className="mb-4">Pelajari cara menjahit tas tote dasar dengan panduan langkah demi langkah kami.</p>
               <button
                 onClick={() => setIsOpen(false)}
                 className="bg-caramel text-cream px-4 py-2 rounded-full"
               >
                 Tutup
               </button>
             </motion.div>
           </motion.div>
         )}
       </div>
     );
   }

   export default TutorialPopup;