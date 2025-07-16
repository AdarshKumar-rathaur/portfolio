import React from 'react';
import linkedinLogo from './images/linkedin.png';
import githubLogo from './images/github.png';

export default function Connect() {
    return (
        <div id="logo">
            <a href="https://www.linkedin.com/in/adarsh-singh-11a795315/" ><img className="logoElem" src={linkedinLogo} alt="linkedin" target="_blank" /></a>
            <a href="https://github.com/AdarshKumar-rathaur" ><img className="logoElem" src={githubLogo} alt="github" target="_blank" /></a>
        </div>
    )
}
