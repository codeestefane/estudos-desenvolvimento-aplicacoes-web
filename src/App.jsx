import {Routes, Route} from 'react-router';

import Login from './pages/Login';
import Inicio from './pages/Inicio';
import MenuRoteiro from './pages/MenuRoteiro';
import Roteiros from './pages/Roteiros';
import MenuProfessor from './pages/MenuProfessor';
import Credencial from './pages/SolicitarRoteiro/Credencial';
import EspecificacaoRoteiro from './pages/SolicitarRoteiro/EspecificacaoRoteiro';
import PrazoEntrega from './pages/SolicitarRoteiro/PrazoEntrega';
import Roteiro from './pages/Roteiro';

function App(){
    return (
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu-roteiro" element={<MenuRoteiro />} />
          <Route path="/roteiros" element={<Roteiros />} />
          <Route path="/menu-professor" element={<MenuProfessor />} />
          <Route path="/solicitar-roteiro-credencial" element={<Credencial />} />
          <Route path="/solicitar-roteiro-info" element={<EspecificacaoRoteiro />} />
          <Route path="/solicitar-roteiro-prazo" element={<PrazoEntrega />} />
          <Route path="/roteiros" element={<Roteiros />} />
          <Route path="/roteiros/:id" element={<Roteiro />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
  )
}

export default App;