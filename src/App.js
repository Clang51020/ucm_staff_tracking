import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './UserPage';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/user" element={<UserPage />} />;
      <Route path="/search" element={<SearchPage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
