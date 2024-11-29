import React from 'react'
import '../Fourth/Fourth.css'

function Fourth() {
  return (
    <>
    <div className='fourth'>
      <div className='fourth-badge'>
        <div className='fourth-badge_logo'>
          <img src='../../../public/images/Featured icon.jpg' alt='Logo' style={{"marginLeft":"140px"}}></img>
          <div style={{"marginLeft":"90px"}}>
            <h3>Share Item Inboxes</h3><br />
          </div>
          <div >
            <p style={{"fontWeight":400,"fontSize":"16px","color":"#475467","textAlign":"center"}}>Wheather you have a team of 2 or 200, our shared item inboxes keep everyone on the same page and in loop</p>
          </div>
          <h4 style={{"textAlign":"center","color":"purple","marginTop":"10px"}}>Learn More --></h4>
        </div>
        
      </div>
      <div className='fourth-badge'>
        <div className='fourth-badge_logo'>
          <img src='../../../public/images/Featured icon (1).jpg' alt='Logo' style={{"marginLeft":"140px"}}></img>
          <div style={{"marginLeft":"70px"}}>
            <h3>Deliver instant answer</h3><br />
          </div>
          <div >
            <p style={{"fontWeight":400,"fontSize":"16px","color":"#475467","textAlign":"center"}}>An all-in-one customer service platform that helps you balance everything your customers need to be happy</p>
          </div>
          <h4 style={{"textAlign":"center","color":"purple","marginTop":"10px"}}>Learn More --></h4>
          
        </div>
        
      </div>
      <div className='fourth-badge'>
        <div className='fourth-badge_logo'>
          <img src='../../../public/images/Featured icon (2).jpg' alt='Logo' style={{"marginLeft":"160px"}}></img>
          <div style={{"marginLeft":"50px"}}>
            <h3>Manage your team with reporst</h3><br />
          </div>
          <div >
            <p style={{"fontWeight":400,"fontSize":"16px","color":"#475467","textAlign":"center"}}>Measure what matters with Untitleds easy-to-use reports . You can filter ,export, and drilldown on the data clicks.</p>
          </div>
          <div>
          <h4 style={{"textAlign":"center","color":"purple","marginTop":"10px"}}>Learn More --></h4>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fourth