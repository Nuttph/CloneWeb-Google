import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Coffee from './img/Coffee.png';
import './Blog.css';

function Blog() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);

    const handleScroll = () => {
      const scrollDirection = window.scrollY > 0 ? 1 : -1;
      plusSlides(scrollDirection);
    };

   
  }, [slideIndex]);

  function plusSlides(n) {
    let newIndex = slideIndex + n;

    if (newIndex > 7) {
      setSlideIndex(1); // Wrap around to the first slide
    } else if (newIndex < 1) {
      setSlideIndex(7); // Wrap around to the last slide
    } else {
      setSlideIndex(newIndex);
    }
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
      setSlideIndex(1);
    }    
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div>
      <Nav />
      <div id="bg-img"></div>
      <section id='home'>
        <h1 className='header'>
          Details
        </h1>
      </section>
      <section id="homeBody">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 7</div>
            <img src={Coffee} style={{ width: '100%' }} alt="Coffee" />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 7</div>
            <img src={Coffee} style={{ width: '100%' }} alt="Coffee" />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 7</div>
            <img src={Coffee} style={{ width: '100%' }} alt="Coffee" />
            <div className="text">Caption Three</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">4 / 7</div>
            <img src={Coffee} style={{ width: '100%' }} alt="Coffee" />
            <div className="text">Caption Four</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">5 / 7</div>
            <img src={Coffee} style={{ width: '100%' }} alt="Coffee" />
            <div className="text">Caption Five</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">6 / 7</div>
            <img src={Coffee} style={{ width: '100%' }} alt="Coffee" />
            <div className="text">Caption Six</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">7 / 7</div>
            <img src={Coffee} style={{ width: '100%' }} alt="Coffee" />
            <div className="text">Caption Seven</div>
          </div>
        </div>
        <br />

        <div style={{ textAlign: 'center' }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
          <span className="dot" onClick={() => currentSlide(5)}></span>
          <span className="dot" onClick={() => currentSlide(6)}></span>
          <span className="dot" onClick={() => currentSlide(7)}></span>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Blog;
