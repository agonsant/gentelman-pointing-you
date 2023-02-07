import { useState } from 'react';
import './App.css';
import GentlemanCard from './components/Gentleman/Gentleman';
import { gentlemen } from './data/gentlemen';

function App() {
  const [currentGentlemen, updateGentlemen] = useState(gentlemen);
  const selectedGentlemen = currentGentlemen.reduce((acc, gentleman) => {
    return gentleman.selected ? ++acc : acc;
  }, 0);

  const selectAll = () => {
    const allGentlemenSelected = currentGentlemen.map((gentlemen) => ({
      ...gentlemen,
      selected: true,
    }));
    updateGentlemen(allGentlemenSelected);
  };

  const selectGentleman = (id: number) => {
    const gentlemanIndex = currentGentlemen.findIndex(
      (gentleman) => gentleman.id === id
    );
    currentGentlemen[gentlemanIndex].selected = true;
    updateGentlemen([...currentGentlemen]);
  };

  const removeGentleman = (id: number) => {
    const gentlemanIndex = currentGentlemen.findIndex(
      (gentleman) => gentleman.id === id
    );
    currentGentlemen.splice(gentlemanIndex, 1);
    updateGentlemen([...currentGentlemen]);
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">{selectedGentlemen} gentlemen pointing at you</p>
        <button onClick={selectAll} className="button button--select">
          Select all
        </button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          {currentGentlemen.map((gentleman) => (
            <GentlemanCard
              key={gentleman.id}
              gentleman={gentleman}
              onSelect={selectGentleman}
              onRemove={removeGentleman}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
