import Rreact from 'react';
import { generateId, getNewExpirationTime } from './utils/Utilities';

export function AddThoughtForm(props){

  return (
    <form className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  )
}