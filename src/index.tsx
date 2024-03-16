import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import 'assets/styles/tailwind.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <div>
    <Navbar />
  </div>
);

/**
 * ----- HOMEWORK -----
 * ✅ useQueryParams
 * ✅ React.useMemo
 * ✅ React.useCallback
 * ✅ React.memo
 * ------------
 * Jonatma.Online
 * ✅ Shop.Info()
 * ✅ Seller.Add && Seller.Delete
 *
 */
