import './DisplayCard.css';


const DisplayCard = (props) =>{
    const {
        post,
        todo,
        user,
        request
    } = props;


    const showPosts = () =>{
        // console.log(post)
        return(
            <div className='card' style={{ fontFamily: 'Roboto, sans-serif' }}>
      <p ><strong>{`Post ${post.id} by User ${post.userId}`}</strong></p>
      <p style={{ fontWeight: '500', color: 'black' }}>{post.title}</p>
      <p>{post.body}</p>
    </div>

        )
    }
    const showTodos = () =>{
        // console.log(todo)
        return(
            <div className='card' style={{ fontFamily: 'Roboto, sans-serif' }}>
                <p><strong>{`Todo ${todo.id} by User ${todo.userId}`}</strong></p>
                <p>{ todo.title}</p>
                <p>{ `Completion Status: ${todo.completed}`}</p>
            </div>
        )    
    }
    const showUsers = () =>{
        // console.log(user)
        return(
            <div className='card'style={{ fontFamily: 'Roboto, sans-serif' }}>
              <p><strong>id:</strong> {user.id}</p>
      <p><strong>name:</strong> {user.name}</p>
      <p><strong>username:</strong> {user.userName !== undefined ? user.userName : 'undefined'}</p>
      <p><strong>email:</strong> {user.email}</p>
                 
            </div>
        )       
    }

    return(
        <div>
            {request === 1 && showPosts()}
            {request === 2 && showTodos()}
            {request === 3 && showUsers()}

        </div>
    )

}

export default DisplayCard;