import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router> 
          <div className="min-h-screen bg-background text-text">
            <Navbar />
            <AppRoutes />
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
