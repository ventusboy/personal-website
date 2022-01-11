import React from 'react';

function Project(props) {
    let data = props.data
    return (
        <button className="mobile-tab">
            <div className="card">
                <div>
                    {/* <img src="/assets/img/earth2.svg" alt="icon" className="cardImg" /> -->*/}
                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                        <h3 className="cardTitle">{data.name}</h3>
                    </a>
                </div>
                <div className='toggle-btn'>
                    <h3 className="arrow">&#9660;{/*&#x25B3;*/}</h3>
                </div>
                <p className="cardText panel"><span style={{ marginLeft: "40px"}} className="hide-on-mobile"></span>
                {data.description}
                </p>
            </div>
        </button>
    );
  }
  
  export default Project;