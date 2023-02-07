import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="img/fary.jpg"
                alt="The Fary pointing at you"
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">The Fary</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  Influencer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span> RIP
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  Pending
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="img/Julio.jpg"
                alt="Julius Churchs pointing at you"
              />
              <span className="gentleman__initial">J</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">Julius Churchs</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  Youtuber
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span> Alive
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>
                  @julius_churchs
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="img/bertin.jpg"
                alt="Bertin Osbourne pointing at you"
              />
              <span className="gentleman__initial">B</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">Bertin Osbourne</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  Java developer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span> Alive
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  @osbourne
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
