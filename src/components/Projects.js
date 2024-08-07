import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
import projImg1 from "../assets/img/projImg1.jpg";
import projImg2 from "../assets/img/projImg2.jpg";
import projImg3 from "../assets/img/projImg3.jpg";
import { ProjectsCard } from "./ProjectsCard";
import colorsharp2 from "../assets/img/color-sharp2.png";

export const Projects = () =>{

    const projects = [
        {
            title: "Medspace App",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Medspace App",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Medspace App",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Medspace App",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ];

    return(
            <section className="project" id = "project">
                <Container>
                    <Row>
                        <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content >
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectsCard
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            </Tab.Content>
                    </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorsharp2}/>
            </section>
    )   
}   