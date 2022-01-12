import React, { useState } from 'react';


function Project(props) {
    let data = props.data
    
    const [toggle, setToggle] = useState(false)

    return (
        <button className="mobile-tab">
            <div className="card">
                <div>
                    {/* <img src="/assets/img/earth2.svg" alt="icon" className="cardImg" /> -->*/}
                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                        <h3 className="cardTitle">{data.name}</h3>
                    </a>
                </div>
                <div className='toggle-btn' onClick={() => { setToggle(!toggle) }}>
                    <h3 className="arrow">&#9660;{/*&#x25B3;*/}</h3>
                </div>
                <div  className={"cardText panel " + (toggle ? 'toggled': '')}>
                    <p><span style={{ marginLeft: "40px"}} className={"hide-on-mobile"}></span>
                        {data.description}
                    </p>
                </div>
            </div>
        </button>
    );
  }
  
  export default Project;