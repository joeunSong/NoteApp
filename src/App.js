import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ListPage from './pages/ListPage/ListPage';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<ListPage/>} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
