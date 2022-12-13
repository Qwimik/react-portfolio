import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6} className="footer-logo-container">
            <img src={logo} alt="footer" className="w-30" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/" target="_black">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://www.facebook.com/" target="_black">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/" target="_black">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
