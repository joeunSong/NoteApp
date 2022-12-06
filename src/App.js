import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ListPage from './pages/ListPage/ListPage';
import WritePage from './pages/WritePage/WritePage';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<ListPage/>} />
          <Route path="/write" element={<WritePage/>} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
