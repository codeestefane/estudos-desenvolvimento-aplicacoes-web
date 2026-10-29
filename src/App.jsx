import {Routes, Route} from 'react-router';

import Login from './pages/Login';
import Inicio from './pages/Inicio';
import MenuInicial from './pages/MenuInicial';
import Roteiros from './pages/Roteiros';

function App(){
    return (
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menuroteiro" element={<MenuInicial />} />
          <Route path="/roteiros" element={<Roteiros />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
  )
}

export default App;