import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MonsterCard } from "..";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Outlet } from "react-router";

const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [filter,setFilter]=useState("")
  const getMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsterList(data));
  };
  useEffect(() => {
    document.title = "Monster List";
    getMonsters();
  }, []);
  return (
    <Container className="mt-2">
      <Outlet/>
      <h1>Hey, this is monsters list</h1>
      <Row className="mt-5">
        <Col xs={12}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Monster  Name"
              aria-label="Monster Name"
              aria-describedby="basic-addon2"
              onChange={e=>setFilter(e.target.value)}
            />
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-2">
          {monsterList.filter(monster=>monster.name.toLowerCase().includes(filter.toLowerCase())).map((monster) => (
          <Col className="mt-2" xs={12} sm={6} md={4} lg={3}>
            <Link to={`/monster/${monster.id}`}>
            <MonsterCard
              key={monster.id}
              name={monster.name}
              description={monster.username}
              img={"https://robohash.org/" + monster.username}
            />
            </Link>
          </Col>
        ))}
        
      </Row>
    </Container>
  );
};
export default MonsterList;
