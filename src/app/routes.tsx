import { createBrowserRouter } from 'react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';
import CategoryPage from './pages/CategoryPage';
import RegionalPage from './pages/RegionalPage';
import RegionalNewsDetailPage from './pages/RegionalNewsDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'news/:id', Component: NewsDetailPage },
      { path: 'category/:category', Component: CategoryPage },
      { path: 'category/regional/:region', Component: RegionalPage },
      { path: 'regional/:region/:id', Component: RegionalNewsDetailPage },
      { path: 'search', Component: SearchResultsPage },
    ],
  },
]);
