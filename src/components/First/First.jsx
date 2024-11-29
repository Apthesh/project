import React from 'react';
import './First.css';

function First() {
  return (
    <div className="first">
      <div className="first-badge">
        <span className="badge">New feature</span>
        <a href="/dashboard" className="badge-link">
          Check out the team dashboard --
        </a>
      </div>
      
      <h1 className="first-title">
        Beautiful analytics to grow Smarter
      </h1>
      
      <p className="first-description">
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>
      
      <div className="first-buttons">
        <button className="btn-demo">
          <span className="btn-icon"></span>
          Demo
        </button>
        <button className="btn-signup">Sign up</button>
      </div>
  <br /><br />
  <div className='first-image1' style={{"marginBottom":"50px"}}>
    <img src="../../../public/images/Content (2).jpg" alt="image" className="first-image"/>
  </div>

<br /><br />
  <h4>
    Join 4,000+ companies already growing
  </h4>
  <br />
<div className='first-logos'>
  
 <div className='img'>
 <div className='colo'>
  <img src="../../../public/images/Logomark (1).jpg" alt="image" className="first-logo"/>
  <h1>Boltshift</h1>
  </div>

 </div >
 <div  className='img'>
  <div className='colo'>
  <img src="../../../public/images/Logomark.jpg" alt="image" className="first-logo"/>
  <h1>LightBox</h1>
 </div>
 </div>

 <div  className='img'>
 <div className='colo'>
  <img src="../../../public/images/Logomark (2).jpg" alt="image" className="first-logo"/>
  <h1>FeatherDev</h1>
 </div>
 </div>

 <div className='img'>
  <div className='colo'>
  <img src="../../../public/images/Logomark (3).jpg" alt="image" className="first-logo"/>
  <h1>Nietzsche</h1>
  </div>
 </div>

 <div className='img'>
  <div className='colo'>
  <img src="../../../public/images/Logomark (1).jpg" alt="image" className="first-logo"/>
  <h1>GlobalBank</h1>
  </div>
 </div>
</div>
<a href="/dashboard" className="badge-link" style={{"fontSize":"25px","color":"blue"}}>
          Features
        </a>
<br />
  <h1 className="first-analytic">
         Analytics that feels like its from the feature
      </h1>
      <p className="first-description">
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>
    </div>
  );
}

export default First;