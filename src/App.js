import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IPOListPage from './components/IPOList';
import IPODetailsPage from './components/IPODetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IPOListPage />} />
        <Route path="/details/:id" element={<IPODetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
