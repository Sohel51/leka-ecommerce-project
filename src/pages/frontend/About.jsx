import React from 'react'
import Footer from './shared/Footer'
import Header from './shared/Header'

const About = () => {
  return (
    <div>
      <section className="banner banner-about position-relative">
        <div className="overlay" />
        <div className="container">
          <div className="banner-content text-center">
            <h2 className="page-title">ABOUT US</h2>
            <div className="breadcrumbs">
              <a href="#">Home</a>
              <span>ABOUT US</span>
            </div>
          </div>
        </div>
      </section>
      <div className="maincontainer">
        <section className="section-about-text">
          <div className="container">
            <h2 className="crimson-text font-italic">Leka - The Amazing Online Store</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </section>
        <div className="section-about-image">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img src="/images/about-img.jpg" alt="" />
              </div>
              <div className="col-sm-6">
                <h3>Happy Fashion Designer</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                <p>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
                <div className="skillbars">
                  <div className="skillbar">
                    <div className="skill-bar-title">Photoshop</div>
                    <div className="skill-bar-bg">
                      <div style={{ width: '85%' }} className="skillbar-bar" />
                      <div className="skill-bar-percent">85%</div>
                    </div>
                  </div>
                  <div className="skillbar">
                    <div className="skill-bar-title">DRAWING</div>
                    <div className="skill-bar-bg">
                      <div style={{ width: '95%' }} className="skillbar-bar" />
                      <div className="skill-bar-percent">95%</div>
                    </div>
                  </div>
                  <div className="skillbar">
                    <div className="skill-bar-title">HANDICRAFT</div>
                    <div className="skill-bar-bg">
                      <div style={{ width: '75%' }} className="skillbar-bar" />
                      <div className="skill-bar-percent">75%</div>
                    </div>
                  </div>
                  <div className="skillbar">
                    <div className="skill-bar-title">WORDPRESS</div>
                    <div className="skill-bar-bg">
                      <div style={{ width: '95%' }} className="skillbar-bar" />
                      <div className="skill-bar-percent">95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-about-text">
          <div className="container">
            <h2 className="crimson-text font-italic">We Make Your Success</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
          </div>
        </section>
        <div className="section-ourteam-about">
          <div className="container">
            <div className="title-section text-center">
              <h2 className="title">OUR TALENT TEAM</h2>
            </div>
            <div className="col-sm-4">
              <div className="team-item">
                <div className="team-avatar">
                  <img src="/images/teams/team1.jpg" alt="" />
                  <div className="social-network">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name"><a href="#">JOHN SNOW</a></h3>
                  <span className="team-postion">FOUNDER/ CEO LEKA</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-item">
                <div className="team-avatar">
                  <img src="/images/teams/team2.jpg" alt="" />
                  <div className="social-network">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name"><a href="#">ZACK</a></h3>
                  <span className="team-postion">ART DIRECTOR</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-item">
                <div className="team-avatar">
                  <img src="/images/teams/team3.jpg" alt="" />
                  <div className="social-network">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name"><a href="#">LADY</a></h3>
                  <span className="team-postion">PHOTOGRAPHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About