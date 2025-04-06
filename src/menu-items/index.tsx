// project import
import samplePage from './dashboard';
//import other from './other';
import pages from './pages';

// types
import type { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [samplePage, pages]
};

export default menuItems;
