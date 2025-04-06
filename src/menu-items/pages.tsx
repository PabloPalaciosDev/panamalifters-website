// third-party
import { FormattedMessage } from 'react-intl';
import { TrophyOutlined, TeamOutlined, BarChartOutlined, FlagOutlined } from '@ant-design/icons';

// type
import type { NavItemType } from 'types/menu';

// icons
const icons = {
  TrophyOutlined, // para representar entrenamiento o atletas
  TeamOutlined, // para grupos o equipos
  BarChartOutlined, // para rankings o top
  FlagOutlined // para récords o logros (comentado)
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'group-pages',
  title: <FormattedMessage id="Secciones" />,
  type: 'group',
  children: [
    {
      id: 'base-datos-atletas',
      title: <FormattedMessage id="Atletas" />,
      type: 'item',
      url: '/atletas',
      icon: icons.TrophyOutlined,
      breadcrumbs: true
    },
    {
      id: 'equipos-powerlifting',
      title: <FormattedMessage id="Equipos" />,
      type: 'item',
      url: '/equipos',
      icon: icons.TeamOutlined,
      breadcrumbs: true
    },
    {
      id: 'top-nacional',
      title: <FormattedMessage id="Tops Nacionales" />,
      type: 'item',
      url: '/top-nacional',
      icon: icons.BarChartOutlined,
      breadcrumbs: true
    }
    /*
    {
      id: 'records-actuales',
      title: <FormattedMessage id="Records" />,
      type: 'item',
      url: '/records-actuales',
      icon: icons.FlagOutlined,
      breadcrumbs: true
    }
    */
  ]
};

export default pages;
