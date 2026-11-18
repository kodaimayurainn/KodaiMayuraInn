import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { HeaderAndMenu } from './components/HeaderAndMenu';
import { FooterSection } from './components/FooterAndModals';
import { AnimationLoader } from './components/AnimationLoader';
import { Router, useRouter, normalizePath } from './router/Router';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { AboutPage } from './pages/AboutPage';
import { LocationPage } from './pages/LocationPage';
import { GalleryPage } from './pages/GalleryPage';
import { GuidePage } from './pages/GuidePage';
import { ContactPage } from './pages/ContactPage';
import { PAGES_SEO } from './seo/seoData';

interface AppProps {
  initialPath?: string;
}

function PageRenderer({ onOpenInfoModal }: { onOpenInfoModal: (title: string, content: string) => void }) {
  const { currentPath } = useRouter();

  // Dynamic meta tags update on client navigation
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const seo = PAGES_SEO[currentPath] || PAGES_SEO['/'];
    document.title = seo.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', seo.description);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', seo.canonicalUrl);
  }, [currentPath]);

  switch (currentPath) {
    case '/rooms/':
      return <RoomsPage />;
    case '/about/':
      return <AboutPage />;
    case '/location/':
      return <LocationPage />;
    case '/gallery/':
      return <GalleryPage />;
    case '/kodaikanal-travel-guide/':
      return <GuidePage />;
    case '/contact/':
      return <ContactPage />;
    case '/':
    default:
      return <HomePage onOpenInfoModal={onOpenInfoModal} />;
  }
}

function AppContent({ initialPath }: AppProps) {
  const { currentPath } = useRouter();
  const [loading, setLoading] = useState(() => {
    // Disable loader during build prerender or if previously viewed in session
    if (initialPath || typeof window === 'undefined') return false;
    return !sessionStorage.getItem('kmi_loaded');
  });

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [infoModal, setInfoModal] = useState<{ title: string; content: string } | null>(null);
  const [cookieDialogOpen, setCookieDialogOpen] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({
    essential: true,
    analytics: true,
    personalization: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      sessionStorage.setItem('kmi_loaded', 'true');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      setScrolledPastHero(window.scrollY > 260);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSaveCookiePreferences = () => {
    setCookieDialogOpen(false);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: cookiePrefs.analytics ? 'granted' : 'denied',
      });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F9F8F6] text-[#171614]">
      {/* Full-Screen Editorial Animation Loader matching Framer specification */}
      {loading && (
        <AnimationLoader
          brandName="KODAI MAYURA INN"
          duration={2.2}
          background="#F9F8F6"
          textColor="#171614"
          onComplete={() => setLoading(false)}
        />
      )}

      {/* Fixed Top Bar & Navigation Drawer */}
      <HeaderAndMenu showHeaderLogo={scrolledPastHero || currentPath !== '/'} />

      {/* Main Content */}
      <main className="pt-[56px]">
        <PageRenderer onOpenInfoModal={(title, content) => setInfoModal({ title, content })} />
      </main>

      {/* Footer */}
      <FooterSection onOpenInfoModal={(title, content) => setInfoModal({ title, content })} />

      {/* Info Modal for Footer / Brand Links */}
      {infoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-label={infoModal.title}
        >
          <div className="bg-[#F9F8F6] border border-[#D3CFC7] max-w-[480px] w-full p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DFD9]">
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614]">
                {infoModal.title}
              </h3>
              <button
                type="button"
                onClick={() => setInfoModal(null)}
                aria-label="Close information modal"
                className="p-1 text-[#5C5852] hover:text-[#171614] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 font-courier text-sm leading-relaxed text-[#262421]">
              {infoModal.content}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setInfoModal(null)}
                className="px-5 py-2 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-base uppercase tracking-wider cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal with Consent Mode */}
      {cookieDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-label="Privacy Preference Center"
        >
          <div className="bg-[#F9F8F6] border border-[#D3CFC7] max-w-[460px] w-full p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DFD9]">
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614]">
                PRIVACY PREFERENCES
              </h3>
              <button
                type="button"
                onClick={() => setCookieDialogOpen(false)}
                aria-label="Close privacy preferences"
                className="p-1 text-[#5C5852] hover:text-[#171614] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 space-y-3 font-courier text-xs">
              <label className="flex items-center justify-between py-1">
                <span>Strictly Necessary Functionality Cookies</span>
                <input type="checkbox" checked disabled />
              </label>
              <label className="flex items-center justify-between py-1 cursor-pointer">
                <span>Anonymous Performance Analytics</span>
                <input
                  type="checkbox"
                  checked={cookiePrefs.analytics}
                  onChange={(e) =>
                    setCookiePrefs({
                      ...cookiePrefs,
                      analytics: e.target.checked,
                    })
                  }
                />
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleSaveCookiePreferences}
                className="px-5 py-2 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-base uppercase tracking-wider cursor-pointer"
              >
                SAVE PREFERENCES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App({ initialPath }: AppProps) {
  return (
    <Router initialPath={initialPath}>
      <AppContent initialPath={initialPath} />
    </Router>
  );
}
