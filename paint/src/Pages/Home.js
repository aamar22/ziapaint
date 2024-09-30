import React from 'react';
import Header from '../Components/Header';  
import '../Style/style.css'

function Home() {
  return (
    
    <div className="App">
      <Header />
      <main>
    
        <img 
          src="https://aapkapainter.com/assets/newdesign/images/homepage/hone-banner.webp" 
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
        <div className="bann">
        <h1>Your Most Trusted Team Patner</h1>
        </div>
        
      </main>
    </div>
  );
}

export default Home;