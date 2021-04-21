import react from 'react';
import { Row, Col, Container } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="community_disclosure">
            <h6> Disclosure :</h6>
            This project, Transition Discoveries, is supported in part by a grant from the Pennsylvania Developmental Disabilities Council, through grant number 1801PABSDD, from the U.S. Administration for Community Living, Department of Health and Human Services, Washington, D.C. 20201. Grantees undertaking projects with government sponsorship are encouraged to express freely their findings and conclusions. Points of view or opinions do not, therefore, necessarily represent official ACL policy.
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            © 2020 Copyrights - TransitionDiscoveries | Designed by -JanBask Digital Design
        </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
