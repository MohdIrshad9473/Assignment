
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Head';
import Body1 from './component/Body1';
import List1 from './component/List1';
import List2 from './component/List2';
import { Redirect, Route,Switch} from 'react-router-dom';
import Listbutton from './component/Listbutton';
import Footer from './component/Footer';
import Fixedpossition from './component/Fixedpossition';

function App() {
  return (
    <div>
   <Header/>
   <Body1/>
   <Footer/>
   <Fixedpossition/>
   <div className="body1">  
   <Listbutton/>
   <Switch>
                <Route exact path='/list1' component={List1}></Route>
                <Route exact path='/list2' component={List2}></Route>
                <Redirect to="/" />
   </Switch>
   </div>
   
 
 
 
  </div>
  );
}

export default App;
