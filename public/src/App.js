import './App.css';
import { useState, useReducer, useEffect } from 'react';
import requestReducer from './reducers/requestReducer';
import DisplayCard from './components/DisplayCard/DisplayCard';

function App(props) {

  //Reducer
  const [request, dispatch] = useReducer(requestReducer, 0)

  //States
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [requestType, setRequestType] = useState("posts");
  const [shouldRefresh, setShouldRefresh] = useState(false);

  //API fetches
  useEffect((props)=>{
    console.log(request)
    if(request === 1){
      const getAllPosts = async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`);
        const data = await response.json();
         console.log(data);

        if(data.length > 1){
          setPosts(data[0]);
          
        
        }
        if(typeof data === "object" && data.length > 0){
          setPosts([...data]);
        }else{
          setPosts([data])
        }


        


        setShouldRefresh(false);
        
      }
      getAllPosts();
      console.log(posts)
    }

    if(request === 2){
      const getAllTodos = async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputValue}`);
        const data = await response.json();
        console.log(data);

        if(typeof data === "object" && data.length > 0){
          setTodos([...data]);
        }else{
          setTodos([data])
        }
        setShouldRefresh(false);

      }
      getAllTodos();

    }

    if(request === 3) {
      const getAllUsers = async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inputValue}`);
        const data = await response.json();
        console.log(data);
        if(typeof data === "object" && data.length > 0){
          setUsers([...data]);
        }else{
          setUsers([data])
        }
        setShouldRefresh(false);

      } 
      getAllUsers();
    }


  
  },[request, shouldRefresh])

  //console.log(posts)

  const handleSelection = (e) =>{
    setRequestType(e.target.value)
    console.log(requestType)

  }
  const handleChange = (e) =>{
    setInputValue(e.target.value)
    console.log(inputValue)

  }

  const handleDispatch = () =>{
    setShouldRefresh(true)
    dispatch({requestType: requestType})

  }



  return (
    <div id="container">
      <div id="div1">
        <select style={{ backgroundColor: 'black',color: '#FFDB58' , fontWeight: 'bold'   }}
        id="requests"
        onChange={handleSelection}
        >
          <option value="posts" style={{ fontWeight: 'bold' }}>Posts</option>
      <option value="todos" style={{ fontWeight: 'bold' }}>Todos</option>
      <option value="users" style={{ fontWeight: 'bold' }}>Users</option>
        </select>
        <input type="number" style={{
        width: '100px',
        padding: '10px',
        border: '2px solid black',
        borderRadius: '5px'
      }}onChange={handleChange}
/> <button
      style={{ backgroundColor: 'black', color: '#FFDB58', fontWeight: 'bold' }}
      onClick={handleDispatch}
    >
      Make Request
    </button>
        
      </div>
      <div id="div2">
        
        {request === 1 && posts.map(post=>(<DisplayCard post = {post} request = {request}/>))}
        {request === 2 && todos.map(todo=>(<DisplayCard todo = {todo} request = {request}/>))}
        {request === 3 && users.map(user=>(<DisplayCard user = {user} request = {request}/>))}
      </div>      
    </div>

  );
}

export default App;
