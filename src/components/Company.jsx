import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const Company = () => {
  const { company } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${company}`
    );
    const data = await response.json();
    setJobs(data.data);
  };

  return (
    <Container>
      <h1>{company}</h1>
      {jobs.map((job) => (
        <Row>
          <Col>
            <Card className="m-2">
              <Card.Header>{job.category}</Card.Header>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Company;
