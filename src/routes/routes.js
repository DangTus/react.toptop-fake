import config from '~/config';
import { Home, Following, Profile } from '~/views/pages';

const publicRoutes = [
    { path: config.routes.home, page: Home },
    { path: config.routes.following, page: Following },
    { path: config.routes.profile, page: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
