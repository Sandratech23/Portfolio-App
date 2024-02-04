import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Nutshell from './components/nutshell/Nutshell';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import img1 from './images/sandra.jpeg';


const navLinks=[
  {link: '/', label: 'NUTSHELL', id:1,},
  {link: '/work', label: 'WORK', id:2},
  {link: '/contact', label: 'CONTACT', id:3}
]


 function App() {
 return(
   <div className='form'>
    <nav className='link-tag'>
    <div className='name'> 
      <a href='' className='textme'>callmesandra</a>
    </div>
    <nav className='icons'>
{navLinks.map((navLink)=>(
        <Link to={navLink.link} className='iconz'key={navLink.id}> {navLink.label} </Link>

))}
        </nav>
</nav>
<div className='container'>
<div className='content'>
<div>
 <img src={img1} alt='hello' className='image' /> 
    </div>
    <div className='write-ups'>
      <h4>Hello, I'm Sandra</h4>
    <h1 className='name'>  Frontend Developer </h1>
      <p className='words'>
 Highly skilled at design enhancements and committed to <br>
 </br>delivering high quality products with hands-on experience<br>
 </br> in development of enterprise applications giving the users <br>
 </br>a beautiful experience.
</p>
<div className='handles'>
  <a href='https://www.instagram.com/thereelvanessa?igsh=NTc4MTIwNjQ2YQ==https://www.threads.net/@thereelvanessa' >
    <img src='https://www.beachcorps.com/wp-content/uploads/2018/09/instagram-Logo-PNG-Transparent-Background-download.png' alt='Instagram' className='social-media'></img></a>
  <a href='https://github.com/sandratech23/'><img src='https://www.picng.com/upload/github/png_github_64051.png' alt='Github' className='social-media'></img></a>
  <a href='https://www.linkedin.com/in/sandra-vanessa-ajaero-99a7972b2/'><img src='https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='Linkedin' className='social-media'></img></a>
  </div>

    </div>
    </div>
    <div className='techbox'>
      <h3 className='techpack'> Tech Stack</h3> 
      <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-64.png' alt='HTML' className='social-media'></img>
      <img src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png' alt='CSS' className='social-media'></img>
      <img src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-64.png' alt='Javascript' className='social-media'></img>
      <img src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-64.png' alt='React' className='social-media'></img>
      <img src='https://cdn0.iconfinder.com/data/icons/files-140/54/filetype-tsx-file-format-extension--typescript-scripting-64.png' alt='Typescript' className='social-media'></img>
    </div>
    </div>

    <Routes>
      <Route path="/"element={<Nutshell />}/>
      <Route path="/work"element={< Work />}/>
      <Route path="/contact"element={< Contact />}/>
    </Routes>
 
    <div className='body'> 
       
      </div>

</div>
  

 ); }

export default App;
