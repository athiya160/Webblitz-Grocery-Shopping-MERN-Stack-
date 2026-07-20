import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";

const About = () => {
  document.title = "About Us";
  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <>
      <Header />
      <h1 className="Heading regHeading">
         <span>About Us</span>
          </h1>
        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <h1>We Offer Innovative Technology Solutions</h1>
            <p style={{fontSize:'20px', fontFamily:'popiens'}}>
              EceraSystem is a full-service digital marketing agency with a long
              history of delivering great results for our clients. We take an
              individualized approach to every customer project. In some cases
              we may focus more on SEO, while in others we’ll dig more into PPC,
              social media or conversion optimization.
            </p>
            <h2>Fresh And Organic (90%)</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>Free Delivery(85%)</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2>Cash On Delivery (70%)</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>

        

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>WE PROVIDE</h1>
              <h2>Remote Employee</h2>
              <p style={{fontSize:'20px', fontFamily:'popiens'}}>
                A huge pool of talent from every domain available for your
                office. Solve your freelancing problems by letting us help you
                find the most suitable employee or a whole team that won't let
                you down. Everything is managed by Indirect Employee staff!
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>WE HAVE</h1>
              <h2>Global Partnership</h2>
              <p style={{fontSize:'20px', fontFamily:'popiens'}}>
                Our Global parters are spread 12 countries and our client base
                is growing day by day . Many of my clients are repeat customers
                and several have come to us through high recommendation and
                referrals . Our client hail from different domains
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR GOAL</h1>
              <h2>Same Quality at Low Cost</h2>
              <p style={{fontSize:'20px', fontFamily:'popiens'}}>
                We have unique and revolutionary business principle, ‘Same
                quality but significantly lower cost’. we aims to fulfill the
                long-standing outsourcing vacuum felt by Small Medium
                Enterprises across the country who, till now, were dependent
                mostly on offshore freelancers.The hired professionals match
                their western counterparts in skills, qualifications and
                experience alongwith the added advantage of attractive low
                costs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>Intelligent Use of Technology and Human Resource</h2>
              <p style={{fontSize:'20px', fontFamily:'popiens'}}>
                We provide every client with a dedicated, full-time work from
                home from their comfortable place. To successfully achieve this
                objective, we relay on management, infrastructure, hardware and
                the latest technology to bridge physical distance and time zone
                differences.We provide experience of making employees to work
                from home for the company as real as they work in the company.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
          <h1 style={{ textAlign: "center" }}>
            Driving Client Results Utilizing New Innovation Points of view
          </h1>
          <div id="third_cards">
            <div>
              <h2>End to End Solutions and Services Guaranteed</h2>
              <p style={{fontSize:'20px', fontFamily:'popiens'}}>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Ahead of The Curve We Future-proof Your IT</h2>
              <p style={{fontSize:'20px', fontFamily:'popiens'}}>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Experience Certainty Every Project Executed Successful</h2>
              <p style={{fontSize:'20px', fontFamily:'popiens'}}>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>

      <Footer />
    </>
  );
};

export default About;
