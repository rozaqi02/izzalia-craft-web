import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoChatbot from '../assets/logochatbot.png'; // Pastikan file ini ada di src/assets/

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: 'Halo! Ketik "halo" atau "hai" untuk mulai chat dengan Izzabot 😄', sender: 'bot' }]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatbotName = "Izzabot";

  // Fungsi untuk menangani pesan awal dan trigger form
  const handleSendInitialMessage = (e) => {
    if (e.key === 'Enter' && e.target.value.trim().toLowerCase() === 'halo' || e.target.value.trim().toLowerCase() === 'hai') {
      const userMessage = e.target.value.trim();
      setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);
      setIsFormOpen(true);
      e.target.value = '';
    } else if (e.key === 'Enter' && e.target.value.trim()) {
      setMessages((prev) => [
        ...prev,
        { text: e.target.value.trim(), sender: 'user' },
        { text: 'Maaf, ketik "halo" atau "hai" dulu ya untuk mulai! 😊', sender: 'bot' },
      ]);
      e.target.value = '';
    }
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `Halo ${formData.name}, saya ${chatbotName} dari Izzalia Craft! Senang kamu menghubungi kami 😄`, sender: 'bot' },
        ]);
        const response = generateHumanLikeResponse(formData.message, formData.name);
        setMessages((prev) => [...prev, { text: response, sender: 'bot' }]);
        setIsFormOpen(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsLoading(false);
      }, 1500); // Delay 1.5 detik
    }
  };

  // Fungsi untuk menangani pesan lanjutan
  const handleSendFollowupMessage = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() && !isFormOpen) {
      const userMessage = e.target.value.trim();
      setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);
      setIsLoading(true);
      setTimeout(() => {
        const response = generateHumanLikeResponse(userMessage, formData.name);
        setMessages((prev) => [...prev, { text: response, sender: 'bot' }]);
        setIsLoading(false);
      }, 1500); // Delay 1.5 detik
      e.target.value = '';
    }
  };

  // Fungsi untuk menghasilkan respon manusiawi
  const generateHumanLikeResponse = (userMessage, userName) => {
    const lowerMessage = userMessage.toLowerCase().trim();
    let response = '';

    if (lowerMessage.includes('tas') || lowerMessage.includes('beli')) {
      const variations = [
        `Halo ${userName}, wah seru banget kamu mau beli tas! 😍 Kami punya koleksi tas handmade keren, seperti tote klasik atau kustom yang bisa kamu desain di halaman Kustomisasi. Cek Toko ya, pilih warna favoritmu! Kalau mau PO, chat WA (+62 852-3202-9768). Ada warna spesial yang kamu suka?`,
        `Hai ${userName}! Tas di Izzalia Craft dibuat dengan cinta, lho! 🎉 Ada tote, pouch, bahkan kustom yang bisa kamu atur. Kunjungi Toko atau Kustomisasi buat lihat. Mau pesen? Hubungi WA (+62 852-3202-9768), ya. Butuh saran ukuran?`,
        `Yo ${userName}, pengen tas baru ya? 🔥 Stok ready dan PO ada di Toko. Desain kustom di Kustomisasi. Chat WA (+62 852-3202-9768) buat order, 5-7 hari sampai. Mau tambah charm?`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else if (lowerMessage.includes('tutorial') || lowerMessage.includes('belajar')) {
      const variations = [
        `Halo ${userName}, keren banget mau belajar craft! 🎨 Cek Tutorial buat panduan menjahit tas. Butuh bahan kanvas? Beli di Toko. Bingung langkah? Tanya aku lagi, aku bantu!`,
        `Hai ${userName}! Belajar craft asik banget! 🌟 Tutorial ada di halaman khusus. Butuh alat? Cek Toko. Ada yang mau ditanyain? Aku nemenin prosesnya!`,
        `Yo ${userName}, jago craft ya? 🛠️ Tutorial buat tas ada di situs. Bahan di Toko. Stuck? Kirim pertanyaan, aku bantu sampe bisa!`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else if (lowerMessage.includes('kontak') || lowerMessage.includes('hubungi')) {
      const variations = [
        `Halo ${userName}, mau kontak kami? 😄 WA ke +62 852-3202-9768 atau IG @izzalia.id. Online 09.00-17.00 WIB. Malam balas besok. Ada apa?`,
        `Hai ${userName}! Hubungi WA (+62 852-3202-9768) atau IG @izzalia.id. Jam 09.00-17.00 WIB. Malam sabar ya, besok aku bales. Butuh bantuan?`,
        `Yo ${userName}, chat langsung? 📱 WA +62 852-3202-9768 atau IG @izzalia.id. Online 09.00-17.00 WIB. Malam istirahat dulu. Urgent?`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else if (lowerMessage.includes('harga') || lowerMessage.includes('berapa')) {
      const variations = [
        `Halo ${userName}, harga ya? 💸 Tote Rp150.000, pouch Rp80.000, kustom dari Rp200.000. Cek Toko buat detail. Mau tawar? WA (+62 852-3202-9768)!`,
        `Hai ${userName}! Harga variasi, lho! 🌸 Tote Rp150.000, pouch Rp80.000, kustom Rp200.000+. Lihat di Toko atau tanya WA (+62 852-3202-9768). Budget khusus?`,
        `Yo ${userName}, nanya harga? 💰 Tote Rp150.000, pouch Rp80.000, kustom Rp200.000+. Cek Toko atau WA (+62 852-3202-9768) buat nego. Pilih mana?`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else if (lowerMessage.includes('pengiriman') || lowerMessage.includes('kirim')) {
      const variations = [
        `Halo ${userName}, pengiriman ke seluruh Indo! 🚚 5-7 hari kerja setelah bayar. Ongkir beda-beda, tanya WA (+62 852-3202-9768). Ke mana?`,
        `Hai ${userName}! Kirim cover seluruh Indo, lho! 📦 5-7 hari kerja. Ongkir custom, cek via WA (+62 852-3202-9768). Kota kamu mana?`,
        `Yo ${userName}, pengiriman? ✈️ 5-7 hari ke seluruh Indo setelah bayar. Ongkir hubungi WA (+62 852-3202-9768). Alamatnya di mana?`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else if (lowerMessage.includes('kualitas') || lowerMessage.includes('bagus')) {
      const variations = [
        `Halo ${userName}, kualitas oke banget! 🛡️ Tas handmade dari kanvas dan kulit sintetis, awet dan stylish. Cek Toko ya!`,
        `Hai ${userName}! Tas kita top, lho! 🌟 Handmade dari bahan premium, tahan lama. Lihat di Toko atau tanya WA (+62 852-3202-9768).`,
        `Yo ${userName}, kualitas kece abis! 💪 Handmade dari material pilihan. Cek Toko atau chat WA (+62 852-3202-9768) buat bukti!`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else if (lowerMessage.includes('diskon') || lowerMessage.includes('promo')) {
      const variations = [
        `Halo ${userName}, cari diskon? 🎉 Belum ada promo besar, tapi follow IG @izzalia.id buat update. Ada flash sale kadang! WA (+62 852-3202-9768) ya!`,
        `Hai ${userName}! Promo? 🌸 Belum ada diskon besar, stay tuned di IG @izzalia.id. Tanya WA (+62 852-3202-9768) buat info spesial!`,
        `Yo ${userName}, pengen diskon? 🔥 Belum ada promo, cek IG @izzalia.id. Hubungi WA (+62 852-3202-9768) buat deal. Sabar ya!`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else if (lowerMessage.includes('terima kasih') || lowerMessage.includes('makasih')) {
      const variations = [
        `Halo ${userName}, sama-sama! 😄 Senang bantu. Ada lagi yang mau ditanyain? Chat aku kapan aja!`,
        `Hai ${userName}, makasih balik! 🌟 Seneng banget bantu kamu. Pertanyaan lain? Chat lagi ya!`,
        `Yo ${userName}, no problem! 💕 Terima kasih udah chat. Panggil aku lagi kalau butuh, oke?`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    } else {
      const variations = [
        `Halo ${userName}, hmm pesanmu seru! 😄 Tapi aku bingung, maksudnya apa ya? Ceritain lagi, aku bantu cari solusi!`,
        `Hai ${userName}! Pesanmu unik banget! 🤔 Belum ngerti, jelasin lagi ya? Aku bantu dari tas sampe craft!`,
        `Yo ${userName}, pesanmu bikin penasaran! 😮 Apa kabar? Kasih detail, aku bantu maksimal!`,
      ];
      response = variations[Math.floor(Math.random() * variations.length)];
    }

    return response;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cream p-4 rounded-lg shadow-lg w-96 h-[500px] flex flex-col" // Ukuran diperbesar
        >
          <div className="flex items-center p-2 bg-sage text-cream rounded-t-lg">
            <img src={logoChatbot} alt="Izzabot" className="w-8 h-8 rounded-full mr-2" />
            <h3 className="text-lg font-sans">Izzabot</h3>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2 p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[70%] p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-sage text-cream ml-10' : 'bg-caramel text-white self-end mr-10'}`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="p-2 text-center text-gray-500">Izzabot sedang mengetik... ⏳</div>
            )}
          </div>
          {!isFormOpen ? (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Ketik pesan untuk Izzabot..."
                className="w-full p-2 border rounded"
                onKeyPress={handleSendFollowupMessage}
                disabled={isLoading}
              />
            </div>
          ) : (
            <form onSubmit={handleSubmitForm} className="space-y-2 p-2">
              <input
                type="text"
                placeholder="Nama"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="tel"
                placeholder="No HP"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Pesan"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2 border rounded h-20"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                disabled={isLoading}
              >
                Kirim
              </button>
            </form>
          )}
        </motion.div>
      )}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-caramel text-cream w-14 h-14 rounded-full flex items-center justify-center fixed bottom-4 right-4 shadow-lg hover:bg-pastelPink transition"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        💬
      </motion.button>
    </div>
  );
}

export default Chatbot;