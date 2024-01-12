import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

function Footer() {
  return (
    <footer className="bg-light text-center py-5">
      <Container>
        <Row >
          <Col  md={6} lg={4}>
            <h5>İletişim</h5>
            <p>Adres: 1234 Sokak, Şehir, Ülke</p>
            <p>Email: info@example.com</p>
            <p>Telefon: +90 123 456 7890</p>
          </Col>
          <Col md={6} lg={4}>
            <h5>Hizmetlerimiz</h5>
            <ul className="list-unstyled text-right mb-0">
              <li><a href="/SeyahatSorgulama">Seyahat Rezervasyonu</a></li>
              <li><a href="/Giris">Üye Girişi</a></li>
              <li><a href="#">Bilet İptali</a></li>
            </ul>

           
          </Col>
          <Col md={6} lg={4} className="text-left">
            <h5>Sosyal Medya</h5>
            <ul className="list-unstyled text-right mb-0">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
         </Col>
        </Row>
      </Container>
      <div className="bg-light text-center py-2">
        <Container>
          <p>&copy; 2024 eBilet. Tüm hakları saklıdır.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
