import React from 'react'
import { Card } from 'react-bootstrap'
import Logo from '../../assets/img/Logo Sma.jpg'
import LogoKampus from '../../assets/img/logo.png'

function educational() {
    return (
        <>
            <h1 style={{
                textAlign: 'center',
                marginTop: '40px',
                marginBottom: '40px',
            }}>Educational Background</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div>
                    <Card className="text-center" style={{
                        width: '24rem',
                        marginBottom: '20px',
                    }}>
                        <Card.Header>Senior High School</Card.Header>
                        <Card.Body>
                            <Card.Img src={Logo} style={{
                                width: '100px',
                                height: '100px',
                            }}></Card.Img>
                            <Card.Title>SMA Negeri 7 Bogor</Card.Title>
                            <Card.Text>
                                Science
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Educational Background</Card.Footer>
                    </Card>
                    <Card className="text-center" style={{
                        width: '24rem',
                        marginBottom: '20px',
                    }}>
                        <Card.Header>Lecture</Card.Header>
                        <Card.Body>
                            <Card.Img src={LogoKampus} style={{
                                width: '100px',
                                height: '100px',
                            }}></Card.Img>
                            <Card.Title>Universitas Binaniaga Bogor</Card.Title>
                            <Card.Text>
                                Information Technology
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Educational Background</Card.Footer>
                    </Card>
                </div>

            </div>
        </>
    )
}

export default educational  