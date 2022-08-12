
import './App.css';
import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';
import './app.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <WeatherPage/>
    </div>
  );
}

export default App;
