import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (search) => {
    if (search) {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      );
      const data = await response.json();
      setJobs(data.data);
    } else {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=10`
      );
      const data = await response.json();
      setJobs(data.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJobs(query);
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <h1>Job Engine</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <input placeholder="Search job" value={query} onChange={handleInput} />
      </form>
      {jobs
        .map((job) => (
          <Row>
            <Col>
              <Card className="m-2">
                <Card.Header>{job.category}</Card.Header>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
        .slice(0, 10)}
    </Container>
  );
};

export default HomePage;
