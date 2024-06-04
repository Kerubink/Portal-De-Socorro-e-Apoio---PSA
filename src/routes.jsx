import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Donation from './pages/Donation';

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Doacoes' element={<Donation />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;