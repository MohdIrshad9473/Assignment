import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Listbutton extends Component {
    render() {
        return (
            <div className="container-flude  contbuton ">
            <div className="row ">
                <div className="col-12 ">
               
            <div class="listbtngroup">
                 <Link className=" listbutton" to="/list1" >
                     <div class="listbutton">
                         LEAVES
                     </div>
                 </Link> 
                 <Link className=" listbutton" to="/list2" >
                 <div class="listbutton1">
                         ATTENDANCE
                     </div>
                 </Link> 
            
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Listbutton
