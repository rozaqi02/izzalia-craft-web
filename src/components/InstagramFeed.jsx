import { motion } from 'framer-motion';

    function InstagramFeed() {
      // Data dummy (ganti dengan API Instagram jika ada)
      const posts = [
        { id: 1, image: 'https://via.placeholder.com/300', caption: 'Tas tote baru!' },
        { id: 2, image: 'https://via.placeholder.com/300', caption: 'Bahan craft' },
        { id: 3, image: 'https://via.placeholder.com/300', caption: 'Pesanan kustom' },
      ];

      return (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-script text-center mb-8">Ikuti @izzalia.id</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.05 }}
                className="bg-cream rounded-lg overflow-hidden shadow"
              >
                <img src={post.image} alt={post.caption} className="w-full h-48 object-cover" />
                <p className="p-4 text-center">{post.caption}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      );
    }

    export default InstagramFeed;