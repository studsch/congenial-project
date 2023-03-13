import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeadPic from "./Pictures/headpic.png";

export default function HomeHeadPic() {
    const jumbo = {
        backgroundImage: "url(" + HeadPic + ")",
        backgroundSize: "cover",
        height: "600px",
        zIndex: -2,
        padding: 0

    }
    const h1Style = {
        fontSize: 80,
        color: "White",
        textAlign: "center",
        webkitTextStroke: "2px black",
        marginTop: 100
    }
    const menu = {
        backgroundColor: "#062B62",
        opacity: 0.66,
        height: "132px",
    }
    const navtext = {
        fontSize: 38,
        color: "White",
        textAlign: "center",
        webkitTextStroke: "1px black",
        textDecoration: 'none'
    }
    const button = {
        border: "none",
        background: "none"
    }
    return(
        <>
        <div className="jumbotron" style={jumbo}>
            <Container fluid style={menu}>
                <Nav className="container" style={{height: "100%"}}>
                    <Row style={{margin: "auto"}}>
                        <Col className="text-center"><Link to="/" style={navtext}>Фасад cтрой</Link></Col>
                        <Col className="text-center"><a style={navtext}>Фасад cтрой</a></Col>
                    </Row>
                </Nav>
            </Container>
            <Container style={{height: "468px"}}>
                <h1 style={h1Style}>БЫСТРО КАЧЕСТВЕННО <br/>ДЕШЕВО</h1>
            </Container>
        </div>
        </>
    )
}