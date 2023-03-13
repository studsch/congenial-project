import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeadPic from "./Pictures/headpic.png";
import CompanyLogo from "./Icons/Companylogo.svg"

export default function HomeHeadPic() {
    const jumbo = {
        backgroundImage: "url(" + HeadPic + ")",
        backgroundSize: "cover",
        height: "600px",
        padding: 0,
        position: "relative"

    }
    const h1Style = {
        fontSize: 80,
        color: "White",
        textAlign: "center",
        webkitTextStroke: "2px black",
        marginTop: 100
    }
    const backgroundMenu = {
        backgroundColor: "#062B62",
        opacity: 0.66,
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 0
    }
    const navtext = {
        fontSize: 32,
        color: "White",
        webkitTextStroke: "1px black",
        textDecoration: 'none',

    }
    const imgLogo = {
        height: "60px"
    }
    const button = {
        border: "none",
        background: "none"
    }
    const menu = {
        height: "100%",
        position: "relative",
        zIndex: 2

    }
    return(
        <>
        <div className="jumbotron" style={jumbo}>
            <Container fluid style={{height: "132px", position: "relative", padding: 0}}>
                <Nav class="container" style={menu}>
                    <Row style={{height: "100%", margin: "auto"}}>
                        <Col className="text-right" style={{margin: "auto"}}><Link href="/" style={navtext}><img style={imgLogo} src={CompanyLogo} alt="companylogo"/></Link></Col>
                        <Col className="text-left" style={{margin: "auto"}}><Link to="/" style={navtext}>Фасад cтрой</Link></Col>
                        <Col className="text-right" style={{margin: "auto"}}><Link to="/services" style={navtext}>Услуги</Link></Col>
                        <Col className="text-center" style={{margin: "auto"}}><Link to="/catalog" style={navtext}>Каталог</Link></Col>
                        <Col className="text-center" style={{margin: "auto"}}><Link to="/information" style={navtext}>Информация</Link></Col>
                    </Row>
                </Nav>
                <Container fluid style={backgroundMenu}/>
            </Container>
            <Container style={{height: "468px"}}>
                <h1 style={h1Style}>БЫСТРО КАЧЕСТВЕННО <br/>ДЕШЕВО</h1>
            </Container>
        </div>
        </>
    )
}