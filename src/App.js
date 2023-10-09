import './App.css';
import Pricetask from './components/Pricetask';
import { planinfo } from './utils/Constants';

function App() {
  
  return (



    <div className="App">
      
     
      
      
      {

        planinfo.map((element,index)=>{

        return <Pricetask key={index} plan={element.plan} cost={element.cost} user_count={element.user_count} storage={element.storage} public_projects={element.public_projects} Community_access={element.Community_access} private_projects={element.private_projects} Dedicated_phonesupport={element.dedicated_phonesupport} free_subdomain={element.free_subdomain} monthly_statusreport={element.monthly_statusreport} />
      
       })

      }


    </div>
  );
}

export default App;
