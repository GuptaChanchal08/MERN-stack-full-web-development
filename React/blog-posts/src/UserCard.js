import React from 'react';

const UserCard = (props) => {
  return(
    <div className='ui card'>
      <div className='content'>
        <div className='header'>Harry</div>
        <div className='description'>
          { props.children }
        </div>
      </div>
      <div className='ui button button'>
        <i className='add icon'></i>
        Add Friend
      </div>
    </div>
  )
}

export default UserCard;