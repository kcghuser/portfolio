import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"



export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          {/* <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row> */}
          <h3>My Developer Setup</h3>
           <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          }}
          infinite={true}
          className="owl-carousel owl-theme skill-slider"
        >
          <div className="item">
            <h5>VSCode Setup</h5>
            <p>
              I use **VSCode** as my primary code editor, equipped with essential extensions like Prettier, ESLint, and Live Server. I prefer a clean, dark theme with minimal distractions, helping me focus on writing efficient code.
            </p>            
          </div>
          <div className="item">
            <h5>Terminal Setup</h5>
            <p>
              I rely on the integrated terminal in VSCode for a seamless workflow. It is customized for clarity and ease of use, ensuring I can quickly run commands and navigate my projects.
            </p>
          </div>
          <div className="item">
            <h5>Font Preference</h5>
            <p>
              For readability, I use **Fira Code**—a programming font that supports ligatures. This helps improve the clarity of my code, making it easier to understand complex expressions.
            </p>
          </div>
        </Carousel>
        </div>
      </Col>
  )
}