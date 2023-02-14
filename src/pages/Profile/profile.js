import React from 'react';
import { Button } from 'react-bootstrap';
import Foto from '../../assets/img/Me.png';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

function Profile() {
    return (
        <>
            <div className="d-flex" style={{
                margin: '20px',
                border: 'none',
                backgroundColor: 'rgb(183, 181, 181)',
                borderRadius: '10px',
            }}>
                <div className="p-2 flex-grow-1" style={{
                    width: '60%',
                    margin: '30px',
                }}>
                    <h3>
                        Profile
                    </h3>
                    <h5 style={{
                        textAlign: 'justify',
                        fontFamily: 'Arial',
                    }}>
                        My name is Dion Novalino. I am 24 years old. A bachelor's degree in information technology from a recent graduate passionate about web development. An enthusiastic and driven learner, enjoys working with a team. I'm looking for a job as a FullStack Developer. After I finished my bachelor's degree, I attended bootcamp at PT Dumbways Indonesia, and I have worked on 2 projects in 1 month. For the Frontend, I used React Js, and for the Backend, I used Golang with the Gorilla framework. To see a preview of the project, you can see it on the Portfolio Page.
                    </h5>
                    <div style={{
                        marginTop: '50px',
                    }}>
                        <Button variant="dark" style={{
                            marginRight: '20px',
                            width: '100px',
                            marginTop: '20px',
                        }} href="https://wa.me/628989434349">Contact</Button>
                        <Button variant="dark" style={{
                            width: '150px',
                            backgroundColor: 'none',
                            marginTop: '20px',
                        }} href="https://drive.google.com/file/d/14DVKPSJslezgCANG1QXfab7xKMtUU6j5/view?usp=sharing">Download CV</Button>
                    </div>
                    <div style={{
                        marginTop: '50px',
                    }}>
                        <Button variant='none' href='https://github.com/Netokids?tab=repositories'>
                            <FaGithub style={{
                                width: '45px',
                                height: '45px',

                            }} />
                        </Button>

                        <Button variant='none' href='https://www.linkedin.com/in/dion-novalino/'>
                            <FaLinkedin style={{
                                width: '45px',
                                height: '45px',
                            }} />
                        </Button>
                        <Button variant='none' href='https://www.instagram.com/dionnovalino/'>
                            <FaInstagram style={{
                                width: '45px',
                                height: '45px',

                            }} />
                        </Button>
                        <Button variant='none' href='https://www.facebook.com/dion.novalino'>
                            <FaFacebook style={{
                                width: '45px',
                                height: '45px',
                            }} />
                        </Button>


                    </div>

                </div>
                <div className="p-2" style={{
                    width: '40%',
                }}>
                    <img src={Foto} alt="" style={{
                        width: '90%',
                        height: '500px',
                        borderRadius: '20px',
                        justifyContent: 'center',
                    }} />
                </div>
            </div>
        </>
    );
}

export default Profile;