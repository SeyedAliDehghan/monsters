import { useEffect, useState,useCallback } from "react";
import { Link,useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
const getMonster= async(id)=>{
  const response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data= await response.json()
  return data
}

const MonsterPage = () => {
    const params=useParams()
    const [loading,setLoading]=useState(true)
  const [monster, setMonster] = useState({
    id: 1,
    name: "",
    username: "",
    email: "",
    phone:"",
    website:""
  });
  useEffect(() => {
    setLoading(true)
      getMonster(params.monsterID).then(data=>{
        setMonster(data)
        setLoading(false)
      })
  }, [params.monsterID])
  return (

    <Container>
      <Card>
        {
          loading?<h1>please wait!</h1>:
          <Card.Body>
          <img
            style={{
              marginLeft: "30%",
              borderRadius: "50%",
              border: "1px solid grey",
            }}
            src={"https://robohash.org/" + monster.username}
            alt="monster"
          />
          <Card.Title className="mt-2">{monster.name}</Card.Title>
          <Card.Title className="mt-2">{monster.username}</Card.Title>
          <Card.Title className="mt-2">{monster.email}</Card.Title>
          <Card.Title className="mt-2">{monster.phone}</Card.Title>
          <Card.Title className="mt-2">{monster.website}</Card.Title>
          <Link to="/monster">Back to list</Link>
        </Card.Body>
        }
      </Card>
    </Container>
  );
};

export default MonsterPage;
