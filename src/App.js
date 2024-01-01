import { ConfigProvider } from 'antd';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ea830f',
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
}

export default App;
