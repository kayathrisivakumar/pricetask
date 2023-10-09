import React from "react";

const Pricetask=(props)=>{
return(
    <React.Fragment>
    <div className="cardouter">
    <div className="card">
    <div className="header">
    <small className="planname">{props.plan}</small>
    <h1>{props.cost}</h1>
    </div>
    <div className="plan_details">
    <div>{props.user_count}</div>
    <div>{props.storage}</div>
    <div>{props.public_projects}</div>
    <div>{props.Community_access}</div>
    <div>{props.private_projects}</div>    
    <div>{props.free_subdomain}</div>
    <div>{props.monthly_statusreport}</div>    
    </div> 
    <div className="buttonclass"><button className="button">BUTTON</button></div>  
    </div> 
    </div>
    
    


    </React.Fragment>
)


}
export default Pricetask;