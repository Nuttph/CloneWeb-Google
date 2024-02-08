import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './Contact.css'
function Contact() {
  return (
    <>
    <Nav />
    <div id="bg-img"></div>
    <section id='home'>
        <h1 className='header'>
          Contact
        </h1>
    </section>

    <section id='contactBody'>
      <div className="contactTop">
        <h2 className='con'>On my communicate</h2>
      </div>
      <div className="contactContent">
        <div className="contactLeft">
          <div className='contactLink'>
            <div className="feed"><i class="fa-brands fa-facebook fa-xl"><div className='gap'>Facebook</div></i></div><br />
            <div className="feed"><i class="fa-brands fa-line fa-xl"><div className='gap'>Line</div></i></div><br />
            <div className="feed"><i class="fa-brands fa-instagram fa-xl"><div className='gap'>Instagram</div></i></div><br />
            <div className="feed"><i class="fa-brands fa-x-twitter fa-xl"><div className='gap'>Twitter</div></i></div><br />
          </div>
        </div>
        <div className="contactRight">
          <form className='contactForm'>
            <input type="text" required placeholder='Name - Surname'/>
            <input type="email" required placeholder='@email'/>
            <textarea className='comment' placeholder='Feedback'></textarea>
            <input id='btnSubmit' type="submit" />
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Contact