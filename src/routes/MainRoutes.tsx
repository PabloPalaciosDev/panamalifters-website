import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
//import PagesLayout from 'layout/Pages';
//import SimpleLayout from 'layout/Simple';
//import { SimpleLayoutType } from 'config';
//
//const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
//const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
//const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
//const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));
//
//const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

const Atletas = Loadable(lazy(() => import('pages/atletas')));

const TopsNacionales = Loadable(lazy(() => import('pages/topsnacionales')));

const ClubsPowerlifting = Loadable(lazy(() => import('pages/clubs-powerlifting')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/',
          element: <SamplePage />
        },
        {
          path: 'Dashboard',
          element: <SamplePage />
        },
        {
          path: 'atletas',
          element: <Atletas />
        },
        {
          path: 'top-nacional',
          element: <TopsNacionales />
        },
        {
          path: 'equipos',
          element: <ClubsPowerlifting />
        }
      ]
    }
    /*
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <AppContactUS />
        }
      ]
    },
    
    {
      path: '/maintenance',
      element: <PagesLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
      */
  ]
};

export default MainRoutes;
