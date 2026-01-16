import './Hero.css'
import heroImg from '../assets/images/hero-img.png'

function Hero() {
  return (
    <section id="hero" className="hero section light-background">
      <div className="container position-relative">
        <div className="row gy-5">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>eStartup</h2>
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <img src={heroImg} className="img-fluid" alt="Hero" />
          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-easel"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Lorem Ipsum</a></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Sed ut perspiciatis</a></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-geo-alt"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Magni Dolores</a></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-command"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Nemo Enim</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
