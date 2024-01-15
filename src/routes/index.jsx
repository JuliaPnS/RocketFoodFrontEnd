import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AppUserRoutes } from './appUser.routes';
import { AuthUserRoutes } from './authUser.routes';
import { AppAdminRoutes } from './appAdmin.routes';

export function Routes() {
    const { user } = useAuth();
    return (
        <BrowserRouter>
         { user ? (user.isAdmin == 0 ? <AppAdminRoutes /> : <AppUserRoutes />) : <AuthUserRoutes /> }
        </BrowserRouter>
    )
}

// {user ? <AppUserRoutes /> : <AuthUserRoutes />  }