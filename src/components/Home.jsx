import React from 'react'
import Nav from './Nav'
import './Home.css'
import Coffee from './img/Coffee.png'
import Footer from './Footer'

function Home() {
  return (
    <div id='homePage'>
    <Nav />
    <div id="bg-img"></div>
    <section id='home'>
        <h1 className='header'>
          Home
        </h1>
    </section>
    
      <section id='homeBody'>
        <div className="homeTop">
          <h2>Cafe</h2>
        </div>
        <div className="homeCenter">
          <div className="HcLeft">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A illo quisquam quidem qui, explicabo accusantium dolorem rerum, corporis vel optio, tenetur quaerat ex ad. Accusantium officia reiciendis ipsam inventore ad a, hic quas, harum omnis aperiam excepturi modi, incidunt dicta aliquam veritatis consequatur ab totam quasi. Et perferendis suscipit nesciunt!
          </div>
          <div className="HcRight">
            <img src={Coffee} alt="Coffee" className='Coffee'/>
          </div>
        </div>
        <div className="homeFoot">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus ipsam, ad sint reprehenderit nostrum magni vel exercitationem ducimus, iure at, asperiores nihil accusantium beatae velit. Doloribus ullam assumenda praesentium tenetur dignissimos, dicta non veniam nihil consectetur repellat, cupiditate ipsa veritatis. Provident dolor amet quaerat neque facilis aut, vel temporibus illo, molestiae animi incidunt pariatur, aliquam eius possimus? At recusandae quas doloribus blanditiis eum beatae labore ratione explicabo aut deleniti.
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home