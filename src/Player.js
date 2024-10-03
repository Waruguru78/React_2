import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    background: 'linear-gradient(135deg, blue, green, red)', 
    color: 'white', 
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  };

  const imgStyle = {
    height: '250px',
    width: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imgStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default Props
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown Nationality",
    jerseyNumber: 0,
    age: "N/A",
    imageUrl: "https://via.placeholder.com/150",
  };

export default Player;
