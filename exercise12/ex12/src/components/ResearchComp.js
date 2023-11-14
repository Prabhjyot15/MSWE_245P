

const ResearchComp = (props) =>{
 const {name, description, url} = props.child;
console.log(props);
    return(
        <>
    <div style={{marginBottom:"20px"}}>
        <h4>
        {name}
        </h4>
        <p>
        {description}
        </p>
        <p>
        Research URL: <a href={url}> Read Online References</a>
        </p>
    </div>

        </>
    )

}

export default ResearchComp