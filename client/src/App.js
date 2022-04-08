import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AllPets from './components/AllPets';
import AddPets from './components/AddPets';
import EditPets from './components/EditPets';
import ManagePets from './components/ManagePets';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<AllPets />} path = "/" default />
        <Route element={<AddPets />} path = "/pets/new"/>
        <Route element={<EditPets />} path = "//pets/:id/edit"/>
        <Route element={<ManagePets />} path = "/pets/:id"/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
