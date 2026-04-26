import { Outlet } from 'react-router';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Outlet />

      <footer className="bg-gray-900 text-white mt-12 py-8">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[#e02020] uppercase tracking-wider mb-4" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                PORTALNEWS
              </h3>
              <p className="text-gray-400 text-sm">
                Portal berita terpercaya Indonesia, menghadirkan informasi terkini dan akurat.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Kategori</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Berita</a></li>
                <li><a href="#" className="hover:text-white">Finansial</a></li>
                <li><a href="#" className="hover:text-white">Olahraga</a></li>
                <li><a href="#" className="hover:text-white">Teknologi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white">Kontak</a></li>
                <li><a href="#" className="hover:text-white">Iklan</a></li>
                <li><a href="#" className="hover:text-white">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Ikuti Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 PortalNews. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
