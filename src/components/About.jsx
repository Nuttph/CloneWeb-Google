import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './About.css'
import Coffee from'./img/Coffee.png'
function About() {
  return (
    <div>
    <Nav />
    <div id="bg-img"></div>
    <section id='home'>
        <h1 className='header'>
          About
        </h1>
    </section>
    
    <section id='aboutBody'>
      <div className="aboutLeft">
        <div className="aboutLeftTop">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis atque neque quasi. Odio sapiente et hic amet animi. Veritatis libero quo commodi molestias eaque, illo illum dolores quod iste nesciunt, voluptatem ipsum tempore repellat. Nam, nihil modi corrupti aliquid magnam sunt? Vero ipsum doloremque temporibus voluptates quibusdam reiciendis veniam optio quo voluptatum. Minus voluptatem ab deleniti quibusdam molestiae tempora quaerat maxime at excepturi, enim incidunt, exercitationem laudantium, obcaecati facilis cumque adipisci iste omnis modi aliquam! Deserunt iure facilis, modi vel iusto ex obcaecati fugiat molestiae possimus at aspernatur debitis, consequatur fuga magnam ad incidunt nemo rerum porro voluptatibus tempora.
        </div>
      </div>
      <div className="aboutRight">
        <img style={{borderRadius: '1rem'}} className='imgC' src={Coffee} alt="" />
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default About