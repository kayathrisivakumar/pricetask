import React from "react";

const Slide=(props)=>{
return(
    <React.Fragment>
    <div>
    <div className="cardouter">
    <div className="card">
    <div className="header">
    <small>{props.plan}</small>
    <h1>{props.cost}</h1>
    <div className="plan_details">
    <div>{props.user_count}</div>
    <div>{props.storage}</div>
    <div>{props.public_projects}</div>
    <div>{props.Community_access}</div>
    <div>{props.private_projects}</div>
    <div>{props.Dedicated_phonesupport}</div>
    <div>{props.free_subdomain}</div>
    <div>{props.monthly_statusreport}</div>  
    <div className="button"><button>button</button></div> 
    </div>  
    </div> 
    </div>
    </div>
    </div>
    


    </React.Fragment>
)


}
export default Slide;