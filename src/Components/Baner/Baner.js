import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Baner.css'
function Baner(props) {
  return (
    <div>
      <section className='banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>{props.title}</h2>
                    <ul>
                        <li>
                            <Link to='/'>
                            <FontAwesomeIcon icon={faHome}/> home
                            </Link>
                        /{props.smalltitle}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Baner
