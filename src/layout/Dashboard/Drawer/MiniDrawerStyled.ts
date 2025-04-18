// material-ui
import { styled, type Theme, type CSSObject } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

// project import
import { DRAWER_WIDTH, ThemeMode } from 'config';

const openedMixin = (theme: Theme) =>
  ({
    width: DRAWER_WIDTH,
    borderRight: '1px solid',
    borderRightColor: theme.palette.divider,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
    boxShadow: theme.palette.mode === ThemeMode.DARK ? theme.customShadows.z1 : 'none',
    backgroundColor: '#153A4B' // ✅ ← aquí el color
  }) as CSSObject;

const closedMixin = (theme: Theme) =>
  ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7.5),
    borderRight: 'none',
    boxShadow: theme.customShadows.z1,
    backgroundColor: '#153A4B' // ✅ ← también aquí si quieres color en versión contraída
  }) as CSSObject;

// ==============================|| DRAWER - MINI STYLED ||============================== //

const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default MiniDrawerStyled;
