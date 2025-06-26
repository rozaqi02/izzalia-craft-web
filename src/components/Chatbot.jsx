import { useState, useEffect, useRef } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import logoChatbot from '../assets/logochatbot.png';

  const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef(null);

    // Fungsi untuk scroll ke pesan terbaru
    useEffect(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, [messages]);

    // Deteksi "halo" atau "hai" untuk trigger form
    const handleSend = async () => {
      if (!input.trim()) return;

      const newMessages = [...messages, { text: input, sender: 'user', timestamp: new Date() }];
      setMessages(newMessages);
      setInput('');

      if (!userInfo && (input.toLowerCase() === 'halo' || input.toLowerCase() === 'hai')) {
        setShowForm(true);
        setMessages([...newMessages, { text: 'Halo! Silakan isi form berikut agar aku bisa mengenali kamu 😊', sender: 'bot', timestamp: new Date() }]);
        return;
      }

      if (showForm) {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulasi loading
        setMessages([...newMessages, { text: 'Terima kasih! Data kamu sudah diterima. Sekarang aku bisa bantu lebih baik 😄', sender: 'bot', timestamp: new Date() }]);
        setShowForm(false);
        setIsLoading(false);
        return;
      }

      if (userInfo) {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Loading lebih natural
        const response = generateResponse(input, userInfo.name);
        setMessages([...newMessages, { text: response, sender: 'bot', timestamp: new Date() }]);
        setIsLoading(false);
      }
    };

    // Logika respon kompleks berdasarkan input
    const generateResponse = (inputText, userName) => {
      const lowerInput = inputText.toLowerCase().trim();
      if (lowerInput.includes('tas') || lowerInput.includes('bahan')) {
        if (lowerInput.includes('harga')) {
          return `${userName}! 😊 Tas atau bahan craft kami mulai dari Rp 80.000, tergantung desain dan material. Mau cek koleksi di toko atau custom? Aku bantu pilih yang kece buat kamu! 🎨`;
        } else if (lowerInput.includes('kustom')) {
          return `${userName}! 🔥 Kustom tas seru banget! Kamu bisa pilih warna, bahan, sama aksesori di halaman Kustomisasi. Mau aku bantu desain yang unik buat kamu? 😎`;
        } else {
          return `${userName}! 👜 Kami punya banyak tas handmade dan bahan craft kece. Cek di halaman Toko atau Instagram @izzalia.id ya! Ada yang kamu suka?`;
        }
      } else if (lowerInput.includes('tutorial') || lowerInput.includes('belajar')) {
        return `${userName}! 🎉 Tutorial craft ada di halaman Tutorial. Mulai dari jahit tas sederhana sampe proyek kreatif. Mau aku kasih tips spesial? 😄`;
      } else if (lowerInput.includes('pesan') || lowerInput.includes('beli')) {
        return `${userName}! 🛒 Yuk, pesen via WhatsApp (+62 852-3202-9768). Kasih tahu aku detailnya (warna, ukuran), aku bantu prosesin cepet! 🚀`;
      } else if (lowerInput.includes('kontak') || lowerInput.includes('hubungi')) {
        return `${userName}! 📞 Hubungi aku via WhatsApp (+62 852-3202-9768) atau cek Instagram @izzalia.id. Aku siap bantu 24/7! 😄`;
      } else if (lowerInput.includes('terima kasih') || lowerInput.includes('makasih')) {
        return `${userName}! Sama-sama! 😊 Seneng banget bisa bantu. Ada lagi yang mau ditanyain?`;
      } else {
        return `${userName}! Hmm, aku agak bingung nih 😅 Maksud kamu apa ya? Coba ceritain lebih detail, aku bantu sebisanya! 🌟`;
      }
    };

    // Handle submit form
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      };
      setUserInfo(formData);
      setShowForm(false);
      setIsLoading(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: `Halo ${formData.name}! Data kamu sudah masuk. Aku siap bantu, apa yang bisa aku lakuin buat kamu? 😄`, sender: 'bot', timestamp: new Date() }]);
        setIsLoading(false);
      }, 1000);
    };

    return (
      <>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-caramel text-cream w-14 h-14 rounded-full shadow-lg flex items-center justify-center relative"
          >
            💬
            <span className="absolute -top-6 right-0 bg-caramel text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Ketik "halo" atau "hai" untuk mulai! 😊
            </span>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="fixed bottom-6 right-6 w-80 h-[500px] bg-cream rounded-lg shadow-xl flex flex-col z-50"
            >
              <div className="bg-caramel text-cream p-4 rounded-t-lg flex items-center gap-2">
                <img src={logoChatbot} alt="Izzalia Bot" className="w-8 h-8 rounded-full" />
                <h3 className="font-script text-lg">Izzalia Bot</h3>
                <button onClick={() => setIsOpen(false)} className="ml-auto text-cream">✖</button>
              </div>
              <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto bg-cream/90 backdrop-blur-sm">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <p className="inline-block p-2 rounded-lg bg-sage text-cream">
                      {msg.text}
                    </p>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-center text-gray-500">Memproses... ⏳</div>
                )}
              </div>
              <div className="p-4 border-t">
                {showForm ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Lengkap*"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="No HP*"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Pesan Tambahan"
                      className="w-full p-2 border rounded"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                    >
                      Kirim
                    </button>
                  </form>
                ) : (
                  <>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ketik pesan..."
                      className="w-full p-2 border rounded"
                    />
                    <button
                      onClick={handleSend}
                      className="mt-2 w-full bg-caramel text-cream p-2 rounded hover:bg-pastelPink"
                    >
                      Kirim
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  export default Chatbot;