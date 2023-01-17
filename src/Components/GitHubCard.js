import { Card } from "react-bootstrap"


function GitHubCard(){
        return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Diana-Cano</Card.Title>
                <Card.Text>
                  My name is Diana cano and I am currently a software development student.
                  I am nineteen years old. My aspirations for the future include a front end job
                  in development and I hope to travel the world. In my free time I enjoy reading
                  and discovering new music. 
                </Card.Text>
              </Card.Body>
            </Card>
          );
       
    
}

export default GitHubCard