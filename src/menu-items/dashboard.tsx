// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import QueryStatsIcon from '@mui/icons-material/QueryStats';

// type
import type { NavItemType } from 'types/menu';

// icons
const icons = { QueryStatsIcon };

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const samplePage: NavItemType = {
  id: 'Dashboard',
  title: <FormattedMessage id="Estadísticas" />,
  type: 'group',
  url: '/dashboard',
  icon: icons.QueryStatsIcon
};

export default samplePage;
