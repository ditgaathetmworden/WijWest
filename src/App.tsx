import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { DataProvider } from './context/DataContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { HelpOverviewPage } from './pages/HelpOverviewPage';
import { HelpDetailPage } from './pages/HelpDetailPage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import { OrganizationDetailPage } from './pages/OrganizationDetailPage';
import { SchedulePage } from './pages/SchedulePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path (strip trailing slash if not root)
  const path = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  // Route matching
  const renderPage = () => {
    if (path === '/') {
      return <HomePage />;
    }

    if (path === '/hulp') {
      return <HelpOverviewPage />;
    }

    if (path.startsWith('/hulp/')) {
      const slug = path.replace('/hulp/', '');
      return <HelpDetailPage categorySlug={slug} />;
    }

    if (path === '/organisaties') {
      return <OrganizationsPage />;
    }

    if (path.startsWith('/organisaties/')) {
      const slug = path.replace('/organisaties/', '');
      return <OrganizationDetailPage organizationSlug={slug} />;
    }

    if (path === '/rooster') {
      return <SchedulePage />;
    }

    if (path === '/contact') {
      return <ContactPage />;
    }

    if (path === '/over-ons') {
      return <AboutPage />;
    }

    if (path === '/veelgestelde-vragen') {
      return <FaqPage />;
    }

    if (path === '/privacy') {
      return <PrivacyPage />;
    }

    if (path === '/toegankelijkheid') {
      return <AccessibilityPage />;
    }

    if (path === '/beheer') {
      return <AdminPage />;
    }

    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#201B20]">
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <DataProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </DataProvider>
  );
}
