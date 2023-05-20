import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props){
    return(

    <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/ ">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/ ">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ ">
                {props.about}
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
           
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              
            </button>
          </form>
        </div>
      </nav>
     
     
     </>

);

}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
} //This is written because our title and about are both strings so if we type number mistakely than that will be a problem so ensuring safety earlier.

// Navbar.defaultProps = {
//     title: 'set title here',
//     about: 'About text here'
// }; 