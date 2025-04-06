// material-ui
import { useTheme } from '@mui/material/styles';

// project-import
import { ThemeMode } from 'config';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain({ reverse }: { reverse?: boolean }) {
  const theme = useTheme();
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Mantis" width="100" />
     *
     */
    <>
      <img
        src="src\assets\images\logo-panamalifters-notbg.png"
        alt="Mantis"
        width="200"
        style={{
          filter: reverse ? 'invert(1)' : 'none',
          transition: 'filter 0.3s ease-in-out'
        }}
      />
    </>
  );
}
