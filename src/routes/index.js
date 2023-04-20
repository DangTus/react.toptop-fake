// Layouts
import { DefaultLayout } from '~/components/Layouts';

// Pages
import { Home, Following } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
