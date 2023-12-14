import { BrowserRouter } from 'react-router-dom';

import { AppUserRoutes } from './appUser.routes';
import { AuthUserRoutes } from './authUser.routes';
import { AppAdminRoutes } from './appAdmin.routes';

export function Routes() {
    return (
        <BrowserRouter>
            <AppAdminRoutes />
        </BrowserRouter>
    )
}