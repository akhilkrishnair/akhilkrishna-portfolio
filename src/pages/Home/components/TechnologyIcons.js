import React from 'react'
import git from "../../icons/git.png";
import django from '../../icons/django.png';
import python from '../../icons/python.png';
import jscript from '../../icons/jscript.png';
import react from '../../icons/react.png';
import mysql from '../../icons/mysql.png';
import postgres from '../../icons/postgres.png';
import css from '../../icons/css.png';


const TechnologyIcons = () => {
  return (
    <>
        <div className="social-media-icon-profile git">               
            <img src={git} alt="git.png" />
        </div>

        <div className="social-media-icon-profile python">
            <img src={python} alt="python.png" />
        </div>

        <div className="social-media-icon-profile javascript">
            <img src={jscript} alt="javascript.png" />
        </div>

        <div className="social-media-icon-profile django">
            <img src={django} alt="django.png" />
        </div>

        <div className="social-media-icon-profile react">
            <img src={react} alt="react.png" />
        </div>

        <div className="social-media-icon-profile rest-api">
            <img src={css} alt="css.png" />
        </div>

        <div className="social-media-icon-profile mysql">
            <img src={mysql} alt="mysql.png" />
        </div>

        <div className="social-media-icon-profile sql">
            <img src={postgres} alt="postgres.png" />
        </div>
    </>
  )
}

export default TechnologyIcons