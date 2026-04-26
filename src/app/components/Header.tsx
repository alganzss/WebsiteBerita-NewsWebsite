import { Search, ChevronDown } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';

export default function Header() {
  const [showRegionalDropdown, setShowRegionalDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const indonesiaProvinces = [
    'Aceh',
    'Sumatra Utara',
    'Sumatra Barat',
    'Riau',
    'Kepulauan Riau',
    'Jambi',
    'Sumatra Selatan',
    'Kepulauan Bangka Belitung',
    'Bengkulu',
    'Lampung',
    'DKI Jakarta',
    'Banten',
    'Jawa Barat',
    'Jawa Tengah',
    'DI Yogyakarta',
    'Jawa Timur',
    'Bali',
    'Nusa Tenggara Barat',
    'Nusa Tenggara Timur',
    'Kalimantan Barat',
    'Kalimantan Tengah',
    'Kalimantan Selatan',
    'Kalimantan Timur',
    'Kalimantan Utara',
    'Sulawesi Utara',
    'Gorontalo',
    'Sulawesi Tengah',
    'Sulawesi Barat',
    'Sulawesi Selatan',
    'Sulawesi Tenggara',
    'Maluku',
    'Maluku Utara',
    'Papua Barat',
    'Papua Barat Daya',
    'Papua',
    'Papua Tengah',
    'Papua Pegunungan',
    'Papua Selatan',
  ];

  const categories = [
    { name: 'Berita', path: '/category/berita' },
    { name: 'Finansial', path: '/category/finansial' },
    { name: 'Hot', path: '/category/hot' },
    { name: 'Internet', path: '/category/internet' },
    { name: 'Regional', hasDropdown: true, regions: indonesiaProvinces },
    { name: 'Olahraga', path: '/category/olahraga' },
    { name: 'Otomotif', path: '/category/otomotif' },
    { name: 'Travel', path: '/category/travel' },
    { name: 'Kuliner', path: '/category/kuliner' },
    { name: 'Kesehatan', path: '/category/kesehatan' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between py-4 border-b border-gray-200">
          <div className="flex items-center gap-8">
            <div
              onClick={() => navigate('/')}
              className="text-[#e02020] uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
              style={{ fontSize: '32px', fontWeight: 'bold' }}
            >
              PORTAL<span className="text-gray-800">NEWS</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                }
              }}
              className="flex items-center bg-gray-100 rounded px-3 py-2 w-64"
            >
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none ml-2 text-sm flex-1"
              />
            </form>
          </div>
        </div>
      </div>

      <nav className="bg-[#e02020]">
        <div className="max-w-[1400px] mx-auto px-4">
          <ul className="flex items-center gap-6 py-3">
            {categories.map((category, index) => {
              const hasDropdown = category.hasDropdown;

              return (
                <li key={index} className="relative">
                  <button
                    className="text-white text-sm hover:text-gray-200 transition-colors flex items-center gap-1"
                    onClick={() => !hasDropdown && category.path && navigate(category.path)}
                    onMouseEnter={() => hasDropdown && setShowRegionalDropdown(true)}
                    onMouseLeave={() => hasDropdown && setShowRegionalDropdown(false)}
                  >
                    {category.name}
                    {hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </button>

                  {hasDropdown && showRegionalDropdown && category.regions && (
                    <div
                      className="absolute top-full left-0 bg-white shadow-lg rounded mt-1 py-2 min-w-[200px] max-h-[400px] overflow-y-auto z-50"
                      onMouseEnter={() => setShowRegionalDropdown(true)}
                      onMouseLeave={() => setShowRegionalDropdown(false)}
                    >
                      {category.regions.map((region) => (
                        <button
                          key={region}
                          onClick={() => {
                            setShowRegionalDropdown(false);
                            navigate(`/category/regional/${region.toLowerCase().replace(/\s+/g, '-')}`);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {region}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
