function Project(props) {
    let data = props.data
    return (
        <button className="mo">
            <div className="card">
                <div>
                    <image src="/assets/img/earth2.svg" alt="icon" className="cardImg" />
                    <a href={data.link} target="_blank" rel="noreferrer">
                        <h3 className="cardTitle">{data.name}</h3>
                    </a>
                    <h3 className="arrow">&#x25B3;</h3>
                </div>

                <p className="cardText panel"><span style={{ marginLeft: "40px"}} className="hideom"></span>
                {data.description}
                </p>
            </div>
        </button>
    );
  }
  
  export default Project;