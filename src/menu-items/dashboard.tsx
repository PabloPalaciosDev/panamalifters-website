// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { LineChartOutlined } from '@ant-design/icons';

// type
import type { NavItemType } from 'types/menu';

// icons
const icons = { LineChartOutlined };

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const samplePage: NavItemType = {
  id: 'Dashboard',
  title: <FormattedMessage id="Estadísticas" />,
  type: 'group',
  url: '/dashboard',
  icon: icons.LineChartOutlined
};

export default samplePage;
