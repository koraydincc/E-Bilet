import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SeyahatSorgulama from './Pages/SeyahatSorgulama';
import LoginPage from './Pages/LoginPage';
import Bus from './Components/Modal/Bus';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<HomePage />}>
        <Route path='seferler/:id' element={<Bus koltukNo={1} dolu={false} secili={false} onSelect={(koltukNo: number) => {}} />} />
      </Route>
      <Route path='/SeyahatSorgulama' element={<SeyahatSorgulama />} />
      <Route path='/Giris' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
