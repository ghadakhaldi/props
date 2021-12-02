import React from 'react'
import './Profil.css'
function Profile(props) {
    return (
        <div>
         <aside className="profile-card">
  <header>
    {/* here’s the avatar */}
    <a target="_blank" href="#">
      {props.children}
    </a>
    {/* the username */}

    <h1>{props.fullName}</h1>

    
    {/* and role or location */}
    <h2>{props.profession}</h2>
  </header>
  {/* bit of a bio; who are you? */}
  <div className="profile-bio">
    <p>
      It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
    </p>
  </div>
  {/* some social links to show off */}
  <ul className="profile-social-links">
    <li>
      <a target="_blank" href="https://www.facebook.com/creativedonut">
        <i className="fa fa-facebook" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/dropyourbass">
        <i className="fa fa-twitter" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/vipulsaxena">
        <i className="fa fa-github" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.behance.net/vipulsaxena">
        <i className="fa fa-behance" />
      </a>
    </li>
  </ul>
</aside>
<button onClick={()=>props.handleName(props.fullName)}>fullName</button>

        </div>
    )
}

export default Profile

