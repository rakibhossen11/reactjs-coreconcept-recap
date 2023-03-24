import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name='Noakhali' specilty='vibag'></District>
      <District name='Bramonbaria' specilty='joda akbor'></District>
    </div>
  );
}

const LoadPost = () =>{
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post> )
      }
    </div>
  )
}

function Post(props){
  return (
    <div style={{backgroundColor:'lightcyan',margin:'20px',padding:'20px'}}>
      <h1>Title: {props.title}</h1>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle={
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px'
}

function District(props){
  const [power,setPower] = useState(1)
  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <p>specilty: {props.specilty}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}

export default App;
