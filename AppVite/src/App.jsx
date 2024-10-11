import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import discordBackground from './assets/discord-background.png';
import menuIcon from './assets/menu-icon.png';

function App() {
  return (
    <div className="App">
      <header style={{ backgroundImage: `url(${discordBackground})` }}>
        <nav>
          <img src={discordLogo} alt="Discord Logo" />
          <img src={menuIcon} alt="Menu Icon" />
        </nav>
        <section className="hero">
          <h1>Imagine a Place...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community.
          </p>
        </section>
      </header>
    </div>
  );
}

export default App;
