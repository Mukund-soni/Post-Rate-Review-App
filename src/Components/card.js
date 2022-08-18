import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DisplayContent/RightSide/RightSide.css";

function BasicExample(props) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={props.definition.image} />
      <Card.Body>
        <Card.Title>{props.definition.name}</Card.Title>
        {/* <Card.Text>Mukund</Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    // <Card style={{ width: "15rem" }}>
    //   <Card.Img
    //     variant="top"
    //     src="https://reviewapp-images.s3.ap-south-1.amazonaws.com/Movies/1660318327760"
    //   />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>Mukund</Card.Text>
    //     {/* <Button variant="primary">Go somewhere</Button> */}
    //   </Card.Body>
    // </Card>
  );
}

export default BasicExample;
