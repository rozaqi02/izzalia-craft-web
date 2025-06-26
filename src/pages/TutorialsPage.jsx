import { motion } from 'framer-motion';
   import TutorialPopup from '../components/TutorialPopup';

   function TutorialsPage() {
     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="container mx-auto px-4 py-12 bg-cream text-center"
       >
         <h2 className="text-4xl font-script mb-8">Tutorial Craft</h2>
         <p className="text-lg mb-6">Pelajari seni craft bersama Izzalia Craft!</p>
         <TutorialPopup />
       </motion.div>
     );
   }

   export default TutorialsPage;