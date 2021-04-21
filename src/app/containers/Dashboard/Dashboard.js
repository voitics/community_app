import react, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Calendar from '../../components/DashboardView/Calender';
import CreateYourGoal from '../../components/DashboardView/CreateYourGoal';
import PostsAndEvents from '../../components/DashboardView/PostsAndEvents';
import ProfileSlick from '../../components/DashboardView/ProfileSlick';
import UpdateAndProjects from '../../components/DashboardView/UpdateAndProjects';
import UserInfoWithSignOut from '../../components/DashboardView/UserInfoWithSignOut';
import ViewOtherProfiles from '../../components/DashboardView/ViewOtherProfiles';


const Dashboard = () => {
  return (
    <>
      <section className="dashboardWrap">
        <Container>
          <Row>
            <Col sm="2" className="pr-0">
              <UserInfoWithSignOut />
              <Calendar />
            </Col>
            <Col sm="8">
              <PostsAndEvents />
              <Row className="pt-3 pb-3">
                <Col sm="2">
                  <CreateYourGoal />
                </Col>
                <Col sm="10">
                  <ProfileSlick />
                </Col>
              </Row>
              <ViewOtherProfiles />
            </Col>
            <Col sm="2" className="pl-0">
              <UpdateAndProjects />
            </Col>
          </Row>
        </Container >
      </section>
    </>
  );
}

export default Dashboard;
