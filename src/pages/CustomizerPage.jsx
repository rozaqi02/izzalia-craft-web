import { useState } from 'react';
   import { motion } from 'framer-motion';

   function CustomizerPage() {
     const [color, setColor] = useState('caramel');
     const [material, setMaterial] = useState('canvas');
     const [accessory, setAccessory] = useState('none');

     const handleOrder = () => {
       const message = `Halo, saya ingin memesan tas kustom dengan: Warna=${color}, Bahan=${material}, Aksesori=${accessory}`;
       window.open(`https://wa.me/+6285232029768?text=${encodeURIComponent(message)}`, '_blank');
     };

     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="container mx-auto px-4 py-12 bg-cream"
       >
         <h2 className="text-4xl font-script text-center mb-8">Desain Tas Impianmu</h2>
         <div className="grid md:grid-cols-2 gap-8">
           {/* Preview */}
           <div className="bg-sage p-8 rounded-lg">
             <div className={`h-64 bg-${color} rounded-md flex items-center justify-center`}>
               <p className="text-cream text-xl">
                 Tas {material} dengan {accessory === 'none' ? 'Tanpa' : accessory} Aksesori
               </p>
             </div>
           </div>
           {/* Kontrol */}
           <div>
             <div className="mb-6">
               <label className="block mb-2">Warna</label>
               <select
                 className="w-full p-2 border rounded"
                 value={color}
                 onChange={(e) => setColor(e.target.value)}
               >
                 <option value="caramel">Karamel</option>
                 <option value="sage">Sage</option>
                 <option value="pastelPink">Pink Pastel</option>
               </select>
             </div>
             <div className="mb-6">
               <label className="block mb-2">Bahan</label>
               <select
                 className="w-full p-2 border rounded"
                 value={material}
                 onChange={(e) => setMaterial(e.target.value)}
               >
                 <option value="canvas">Kanvas</option>
                 <option value="leather">Kulit</option>
                 <option value="denim">Denim</option>
               </select>
             </div>
             <div className="mb-6">
               <label className="block mb-2">Aksesori</label>
               <select
                 className="w-full p-2 border rounded"
                 value={accessory}
                 onChange={(e) => setAccessory(e.target.value)}
               >
                 <option value="none">Tanpa</option>
                 <option value="charm">Hiasan</option>
                 <option value="strap">Strap Kustom</option>
               </select>
             </div>
             <button
               onClick={handleOrder}
               className="bg-caramel text-cream px-6 py-3 rounded-full hover:bg-pastelPink transition"
             >
               Pesan via WhatsApp
             </button>
           </div>
         </div>
       </motion.div>
     );
   }

   export default CustomizerPage;