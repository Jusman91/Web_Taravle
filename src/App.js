import { Route, Routes } from 'react-router-dom';
import './App.css';
import Insurance from './routes/Insurance';
import Visa from './routes/Visa';
import Xperiences from './routes/Xperiences';
import TourPackages from './routes/TourPackages';
import Flights from './routes/Flights';
import Hotels from './routes/Hotels';
import Home from './routes/Home';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='flights' element={<Flights />} />
        <Route path='hotels' element={<Hotels />} />
        <Route path='tourpackages' element={<TourPackages />} />
        <Route path='xperiences' element={<Xperiences />} />
        <Route path='visa' element={<Visa />} />
        <Route path='insurance' element={<Insurance />} />
      </Routes>
    </div>
  );
}

export default App;
