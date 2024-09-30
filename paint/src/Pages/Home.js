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
        <h1>Your Most</h1> 
          <h1>Trusted </h1>
          <h2>Team Patner</h2>
          <button className='buttonban'>Estimate patnering cost</button>
        </div>
        <div className='sec2'>
          <h1>Book Your Services</h1>
          <div className='img'>
            <div>
          <img 
          src="https://aapkapainter.com/assets/newdesign/images/ig_landing/ser1-img.webp" 
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
        </div>
        <div>
             <img 
          src="https://aapkapainter.com/assets/newdesign/images/ig_landing/ser2-img.webp" 
        
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
        </div>
        <div>
             <img 
          src="https://aapkapainter.com/assets/newdesign/images/ig_landing/ser3-img.webp"  
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
        </div>
        
          </div>
          <div className='img'>
            <div>
          <img 
          src="https://aapkapainter.com/assets/newdesign/images/ig_landing/ser4-img.webp" 
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
        </div>
        <div>
             <img 
          src="https://aapkapainter.com/assets/newdesign/images/ig_landing/ser5-img.webp" 
        
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
        </div>
        <div>
             <img 
          src="https://aapkapainter.com/assets/newdesign/images/ig_landing/ser5-img.webp"  
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
        </div>
        
          </div>
        </div>
         <div className='sec3'>
           <div className='sec-head'>
            
           </div>
         
          </div> 
          <div className='sec4'>
          
              <h1>How it Works</h1>

              <img 
          src="https://aapkapainter.com/assets/newdesign/images/ig_landing/how-desk1-img.webp" 
          alt="Welcome Banner" 
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        />
              
           </div> 
           <div className='sec5'>
          
          <h1>Why choose us</h1>
          <h3>We use the brands you trust! With a touch of expert</h3>
          <h3> consultation, expert painters and exceptional outcome.</h3>
          <img 
      src="https://aapkapainter.com/assets/newdesign/images/homepage/chat-desk.webp" 
      alt="Welcome Banner" 
      style={{ width: '100%', height: 'auto', marginTop: '20px' }}
    />
          
       </div> 
           
        
      </main>
    </div>
  );
}

export default Home;