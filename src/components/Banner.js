import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, SetIsDeleting] = useState(false);
    const toRotate = [" Web Developer", "Data Analyst", "IT Support"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();

        },delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updateText === fullText){
            SetIsDeleting(true);
            setDelta(period);
        } else if( isDeleting && updateText === ''){
            SetIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{`Hi i'm webcoded `}<span className="wrap">{text}</span></h1>
                <p>Result oriented IT specialist with a solid background in Information Systems and Computer Science,
                seeking a challenging position where I can leverage my extensive understanding of business activities,
                auditing expertise, and leadership skills to contribute to organizational success. Going forward, my
                goal is to leverage my knowledge of computer systems and technology trends, my strengths in
                programming, creativity, and problem-solving skills to contribute to the growth of luxury brands.
                </p>
                <button onClick={() => console.log(`Connect`)}>Let's connect<ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt ="Header Img"/>
                </Col>

            </Row>
            </Container>
        </section>
    )
} 