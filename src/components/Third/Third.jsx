import React from 'react'
import './Third.css'
import logo from '../../assets/logo.svg';


function Third() {
  return (
    <>
    <div className='third'>
      <div className='third-one' style={{"marginBottom":"30px"}}>
        <img src="../../../public/images/Fictional company logo.jpg" alt="" />
        </div>  

        <div className='third-two'>
            <h1>
                We've been using Untitled to Kick start everynew Project and can't imagine working without it.
            </h1>
        </div>

        <div className='third-img'>
        <img src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
         alt="Profile" className="profile-image" />
         <h5 style={{"font":"inter","fontSize":"18px","lineHeight":"28px","color":"#101828"}}>Candice Wu</h5>
         <h3 style={{"color":"#475467","fontSize":"16px"}}>Product Manager,London</h3>
        </div>
    </div>
    <div className='third-last'>
    <div className="third-badge">
        <span className="badge"> Features</span>
      </div>
      <div>
        <h1 style={{"fontWeight":"600px","lineHeight":"38px","textAlign":'center',"marginBottom":"20px"}}>
            Cutting Edge features for advanced analytics
        </h1>
        <p style={{"fontWeight":"400px", "fontSize":"20px","lineHeight":"28px","textAlign":"center","color":"#475467"}}>
            Powerful , self-serve product and growth analytics to help convert, engage, and retain more users.
        </p>
      </div>
    </div>
    <div className='third-last-image'style={{"marginTop":"20px"}}>
            <img src="../../../public/images/Content (3).jpg" alt="image" />
        </div>
    </>
  )
}

export default Third