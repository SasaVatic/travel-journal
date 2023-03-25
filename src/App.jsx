import Header from './components/Header';
import data from './data';
import Place from './components/Place';

function App() {
  const places = data.map((place) => <Place key={place.id} {...place} />);

  return (
    <div className="app">
      <Header />
      <section className="places-section">{places}</section>
    </div>
  );
}

export default App;
