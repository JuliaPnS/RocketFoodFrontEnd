import { Routes, Route } from 'react-router-dom';

import { HomeUser } from '../pages/HomeUser';
import { MenuUser } from '../pages/MenuUser';
import { PlateInfosUser } from '../pages/PlateInfosUser';

export function AppUserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeUser />} />
            <Route path='/menu' element={<MenuUser />} />
            <Route path='/platesdetails/:id' element={<PlateInfosUser />} />
        </Routes>
    )
}