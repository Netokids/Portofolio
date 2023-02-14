import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import HelloCorona from "../../assets/img/HelloCorona.jpg";
import DeweTour from "../../assets/img/dewetour.png";

function Portofolio() {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px',
            }}>
                <h1>Portofolio</h1>

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Card style={{ width: '24rem', marginRight: '20px' }}>
                    <Card.Img variant="top" src={HelloCorona} />
                    <Card.Body>
                        <Card.Title>Hello Corona</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button href="https://endearing-torte-4b0f3e.netlify.app/" style={{
                            margin: '7px',

                        }}
                            size="sm" variant="secondary">Preview</Button>
                        <Button href="https://github.com/Netokids/deploy-fe-final" style={{
                            margin: '7px',
                        }} size="sm" variant="secondary">Frontend</Button>
                        <Button href="https://github.com/Netokids/deploy-be-final"
                            style={{
                                margin: '7px',
                            }}
                            size="sm" variant="secondary">Backend</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={DeweTour} />
                    <Card.Body>
                        <Card.Title>DeweTour</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button href="https://silly-elf-6d997b.netlify.app/" style={{
                            margin: '7px',
                        }}
                            size="sm" variant="secondary">Preview</Button>
                        <Button href="https://github.com/Netokids/b42-dewetour-fe-mysql" style={{
                            margin: '7px',
                        }} size="sm" variant="secondary">Frontend</Button>
                        <Button href="https://github.com/Netokids/b42-dewetour-be-mysql"
                            style={{
                                margin: '7px',

                            }}
                            size="sm" variant="secondary">Backend</Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    );
}

export default Portofolio;