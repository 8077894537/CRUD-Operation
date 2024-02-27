import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
function Menu() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(user);

  return (
    <>
      <nav className="navbar position-fixed w-100 navbar-expand-lg bg-primary" >
        <div className="container-fluid">
          <Link className="navbar-brand active" to="/"><img src='image/deerlogo.png' alt='...' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><h5>Home</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/read"><h5>Read</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/create"><h5>Create</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/update/1"><h5>Update</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/search"><h5>Search</h5></Link>
              </li>
            </ul>

          </div>
          <div>
            {isAuthenticated && <h6 className='text-ternory'>{user.name}</h6>}
            {isAuthenticated ?
              (<button style={{border:"none", borderRadius:"5px",padding:"5px"}}  className='bg-danger text-white fw-bold' onClick={(e) => logout()}>LogOut</button>):
                (<button style={{border:"none", borderRadius:"5px",padding:"5px"}} className='bg-success text-white fw-bold' onClick={(e) => loginWithRedirect()}>Login/SingUp</button>)  
            }
          </div>
        </div>
      </nav>

    </>
  )
}

export default Menu
