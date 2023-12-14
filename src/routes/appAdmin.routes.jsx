import { Routes, Route } from 'react-router-dom';

import { HomeAdmin } from '../pages/HomeAdmin';
import { MenuAdmin } from '../pages/MenuAdmin';
import { PlateInfosAdmin } from '../pages/PlateInfosAdmin';
import { NewPlate } from '../pages/NewPlate';
import { EditPlate } from '../pages/EditPlate';

export function AppAdminRoutes() {
    return (
        <Routes>
            <Route path='/admin' element={<HomeAdmin />} />
            <Route path='/menuadmin' element={<MenuAdmin />} />
            <Route path='/platesadmin/:id' element={<PlateInfosAdmin />} />
            <Route path='/new/:id' element={<NewPlate />} />
            <Route path='/edit/:id' element={<EditPlate />} />
        </Routes>
    )
}