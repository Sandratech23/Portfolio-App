
import './Work.css';

 const Work = () => {
    return ( 
        <div>
             <div className='body'> 
        <div className="flex-container">
    <div className="trees">
      <section className="tree-wrapper">
        <h3 className="title">School </h3>
        
        <div className="tree">
          <div className="branch">
            <img />
            <div className="branch-body">
              <h1 className="branch-title">University of Lagos</h1>
              <h3>MSc Environmental Toxicology and Pollution Management</h3>
              <h4>2021-2023</h4>
            </div>
          </div>
          <div className="branch">
            <img />
            <div className="branch-body">
              <h1 className="branch-title"> Novena University</h1>
              <h3>BSc Microbiology </h3>
              <h4>2014-2017</h4>
            </div>
          </div>
        </div>
      </section>
    
    
      <section className="tree-wrapper">
      <h3 className="title">Work  </h3>
        <div className="tree">
          <div className="branch">
            <img />
            <div className="branch-body">
              <h1 className="branch-title">BestFx Limited </h1>
              <h3> Frontend Developer</h3>
              <h4> 2023 - Till date</h4>
            </div>
          </div>
          <div className="branch">
            <img />
            <div className="branch-body">
              <h1 className="branch-title"> Global Saizu Limited </h1>
              <h3>Frontend Developer </h3>
              <h4> 2021-2022</h4>
            </div>
          </div>
        </div>
      </section>
    
      
      <section className="tree-wrapper">
      <h3 className="title">Skill </h3>
   
        <div className="tree">
          <div className="branch">
            <img />
            <div className="branch-body">
              <h1 className="branch-title"> JS, TS </h1>
              <h3> Javascript frameworks and libraries, React, Typescript, Node, HTML, CSS, Git.... </h3>
           
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
      </div>

        </div>
     );
}
 
export default Work;