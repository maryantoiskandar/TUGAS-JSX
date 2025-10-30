import clint1 from './assets/images/clint1.jpg';
import brody from './assets/images/brody.jpg';
import banana from './assets/images/banana.jpg';
import dyrot from './assets/images/dyrot.jpg';
import balmond from './assets/images/balmond.jpg';
import ganjar from './assets/images/ganjar.jpg';

function App() {
  const heroes = [clint1, brody, banana, dyrot, balmond, ganjar];


  const heroImages = [];
  for (let i = 0; i < heroes.length; i++) {
    heroImages.push(
      <div
        key={i}
        style={{
          border: '5px solid white',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 0 25px rgba(255,255,255,0.3)',
          width: '250px',
          height: '350px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow =
            '0 0 40px rgba(255,255,255,0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow =
            '0 0 25px rgba(255,255,255,0.3)';
        }}
      >
        <img
          src={heroes[i]}
          alt={`hero-${i}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // vertikal tengah
        alignItems: 'center', // horizontal tengah
        textAlign: 'center',
        padding: '40px',
      }}
    >

      <h1
        style={{
          marginBottom: '40px',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          letterSpacing: '2px',
        }}
      >
        KARAKTER FIKSI
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        {heroImages}
      </div>

      {/* Tulisan bawah */}
      <h1
        style={{
          marginTop: '60px',
          fontSize: '3rem',
          fontWeight: 'bold',
          letterSpacing: '3px',
        }}
      >
        TUGAS
      </h1>
    </div>
  );
}

export default App;
