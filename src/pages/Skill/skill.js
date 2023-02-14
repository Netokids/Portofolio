import React from "react";
import Card from "react-bootstrap/Card";

function Skill() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
      }}>
        <h1>Skills</h1>

      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        {[
          'Dark',
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '25rem', margin: '20px' }}
            className="mb-2"
          >
            <Card.Header>Frontend</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>HTML</li>
                  <li>CSS
                    <ul>
                      <li>Bootstrap</li>
                    </ul>
                  </li>
                  <li>JavaScript
                    <ul>
                      <li>Fundamental</li>
                    </ul>
                  </li>
                  <li>React JS
                    <ul>
                      <li>React Bootstrap</li>
                      <li>React Router</li>
                      <li>State</li>
                      <li>Props</li>
                      <li>Lifecycle</li>
                      <li>Fetch API uses Axios and React Query</li>
                      <li>Payment Integration uses Midtrans</li>
                    </ul>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        {[
          'Dark',
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '25rem', margin: '20px' }}
            className="mb-2"
          >
            <Card.Header>Backend</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Go
                    <ul>
                      <li>Fundamental</li>
                      <li>Routing uses gorilla/mux</li>
                      <li>Database Connection uses PostgreSQL & MySQL</li>
                      <li>Database uses GORM</li>
                      <li>Encryption uses bycrypt</li>
                      <li>Authentication uses JWT</li>
                      <li>Payment Integration uses Midtrans</li>
                      <li>Assets Managament uses Cloudinary</li>
                    </ul>
                  </li>
                  <li>PHP
                    <ul>
                      <li>Fundamental</li>
                      <li>CodeIgniter 3</li>
                    </ul>
                  </li>
                  <li>Database
                    <ul>
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                      <li>DDL</li>
                      <li>DML</li>
                      <li>Table Relation</li>
                    </ul>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Skill;