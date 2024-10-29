import Header from './components/Header';
import { PlayerNameProvider } from './Context/GameContext';
import MemoryView from './View/MemoryView';

function App() {
  return (
    <PlayerNameProvider>
      <Header />
      <MemoryView />
    </PlayerNameProvider>
  );
}

export default App;
