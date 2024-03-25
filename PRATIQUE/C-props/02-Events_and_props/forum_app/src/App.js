import React from 'react';
import {comments} from './CommentData';
import Card from './Card'

function App(){
  return(
    <div className='header'>
      {
        comments.map( cmt => {
          return <Card commentObject={cmt}/>
        })
      }
    </div>
  )
}


export default App;
