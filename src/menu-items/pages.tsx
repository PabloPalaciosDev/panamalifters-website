// third-party
import { FormattedMessage } from 'react-intl';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Groups2Icon from '@mui/icons-material/Groups2';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

// type
import type { NavItemType } from 'types/menu';

// icons
const icons = { FitnessCenterIcon, Groups2Icon, LeaderboardIcon, SportsScoreIcon };

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
      icon: icons.FitnessCenterIcon,
      breadcrumbs: true
    },
    {
      id: 'equipos-powerlifting',
      title: <FormattedMessage id="Equipos" />,
      type: 'item',
      url: '/equipos',
      icon: icons.Groups2Icon,
      breadcrumbs: true
    },
    {
      id: 'top-nacional',
      title: <FormattedMessage id="Tops Nacionales" />,
      type: 'item',
      url: '/top-nacional',
      icon: icons.LeaderboardIcon,
      breadcrumbs: true
    }
    /*
    {
      id: 'records-actuales',
      title: <FormattedMessage id="Records" />,
      type: 'item',
      url: '/records-actuales',
      icon: icons.SportsScoreIcon,
      breadcrumbs: true
    }
      */
  ]
};

export default pages;
