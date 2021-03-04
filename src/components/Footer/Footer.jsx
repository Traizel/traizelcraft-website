import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <Container>
            <Row>
            <Col sm><h6>Contact us: traizelcraft@outlook.com</h6></Col>
            <Col sm><h5>&#169;2012 by TraizelCraft Network&#8482;</h5></Col>
            <Col sm><div className='footer'>Icons made by <a href="https://www.freepik.com" title="Freepik" target='_blank'>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target='_blank'>www.flaticon.com</a></div></Col>
            </Row>
        </Container>
    );
}

export default Footer;