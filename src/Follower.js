import React from 'react'

const Follower = ({ avatar_url, html_url, login }) => {
  // console.log('avatar_url',avatar_url);
  // console.log('html_url',html_url);
  // console.log('login',login);
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>${login}</h4>
      <a href={html_url} className='btn'>
        view profile
      </a>
    </article>
  )
}

export default Follower
