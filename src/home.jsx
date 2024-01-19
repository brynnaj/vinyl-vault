import React from 'react';
import MusicCarousel from './carousel';



export default function Home() {
  return (
    <main>
      <section className="hero-image">
        <section className="hero-text">
          <h2>The Vinyl Vault</h2>
        </section>
      </section>

      <section className="welcome">
        <h2>Welcome To The Vinyl Vault</h2>
        <p>Step into the soulful world of rhythm and blues with The Vinyl Vault. We're your premier destination for the smooth, sultry, and timeless sound of R&B music on vinyl. Our collection is a harmonious blend of classic hits, contemporary gems, and hidden treasures, all pressed on high-quality vinyl for the ultimate listening experience. Start flipping through our collection now and let the smooth vibes surround you.</p>
      </section>

      <section className='top-sellers'>
        <h2>Top Sellers</h2>
        <MusicCarousel />
      </section>
      <section>
        <h2>New Releases</h2>
      </section>
    </main>
  );
}