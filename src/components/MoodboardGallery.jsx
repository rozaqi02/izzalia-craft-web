import { useState } from 'react';
    import { motion } from 'framer-motion';

    function MoodboardGallery() {
      const [category, setCategory] = useState('all');

      const images = [
        { id: 1, src: 'https://via.placeholder.com/300', alt: 'Tas Tote', category: 'tas' },
        { id: 2, src: 'https://via.placeholder.com/300', alt: 'Bahan Craft', category: 'bahan' },
        { id: 3, src: 'https://via.placeholder.com/300', alt: 'Kerajinan Tangan', category: 'kerajinan' },
        { id: 4, src: 'https://via.placeholder.com/300', alt: 'Tas Kustom', category: 'tas' },
      ];

      const filteredImages = category === 'all' 
        ? images
        : images.filter((img) => img.category === category);

      return (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-script text-center mb-8">Galeri Inspirasi</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-full ${category === 'all' ? 'bg-caramel text-cream' : 'bg-gray-200 text-gray-800'}`}
            >
              Semua
            </button>
            <button
              onClick={() => setCategory('tas')}
              className={`px-4 py-2 rounded-full ${category === 'tas' ? 'bg-caramel text-cream' : 'bg-gray-200 text-gray-800'}`}
            >
              Tas
            </button>
            <button
              onClick={() => setCategory('bahan')}
              className={`px-4 py-2 rounded-full ${category === 'bahan' ? 'bg-caramel text-cream' : 'bg-gray-200 text-gray-800'}`}
            >
              Bahan
            </button>
            <button
              onClick={() => setCategory('kerajinan')}
              className={`px-4 py-2 rounded-full ${category === 'kerajinan' ? 'bg-caramel text-cream' : 'bg-gray-200 text-gray-800'}`}
            >
              Kerajinan
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-cream rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <p className="p-4 text-center text-gray-800 capitalize">{image.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      );
    }

    export default MoodboardGallery;