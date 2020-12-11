import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faPlusCircle, faSearch,  faShareAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class List1 extends Component {
    delete = (id) => {      
        
        confirmAlert({
            title: 'Cancel Leave',
            message: 'Do you Want to Cancel leave',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => document.getElementById(id).remove()
                  
                },
                {
                    label: 'No',
                    //   onClick: () => alert('Click No')
                }
            ]
        });
    };

    render() {
        return (
            <div className="list1">
               <div id="1" className="listrow">
                    <div className="inlistrow">
                        <div className="date">03</div>
                        <div className="month">Sep</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1"> Pay Without Leave </div>
                        <div className="datetxt">03 sep - 07 sep</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    <div>
                    <FontAwesomeIcon  onClick={()=>this.delete("1")} className="listicons" icon={faTimesCircle} />
                    </div>
                    <div>

                    </div>
                    
                </div>
                <div className="listrow" id="2">
                    <div className="inlistrow">
                        <div className="date">25</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Could not Sign In</div>
                        <div className="datetxt">25 Aug - 25 Aug</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    <div>
                     <FontAwesomeIcon onClick={()=>this.delete("2")}  className="listicons" style={{marginLeft:"392px"}} icon={faTimesCircle} />
                    </div>
                    <div>

                    </div>
                    
                </div>


                
                <div className="listrow">
                    <div className="inlistrowapprove">
                        <div className="date">25</div>
                        <div className="month">jun</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Paid Leave</div>
                        <div className="datetxt">25 jun - 25 jun</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    
                    <div>

                    </div>
                    
                </div>
                <div className="listrow">
                    <div className="inlistrowreject">
                        <div className="date">01</div>
                        <div className="month">jul</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Pay Without Leave</div>
                        <div className="datetxt">01 jul - 07 jul</div>
                        <div className="txt3" >Rejected</div>    
                    </div>
                   
                    <div>

                    </div>
                    
                </div>
                <div className="listrow" id="3">
                    <div className="inlistrow">
                        <div className="date">21</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Could not Sign In</div>
                        <div className="datetxt">21 Aug - 25 Aug</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    <div>
                     <FontAwesomeIcon onClick={()=>this.delete("3")} className="listicons" style={{marginLeft:"392px"}} icon={faTimesCircle} />
                    </div>
                    <div>

                    </div>
                    
                </div>
                <div className="listrow" id="4">
                    <div className="inlistrow">
                        <div className="date">22</div>
                        <div className="month">Jan</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1"> Pay Without Leave </div>
                        <div className="datetxt">22 jan - 28 jan</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    <div>
                    <FontAwesomeIcon  onClick={()=>this.delete("4")} className="listicons" icon={faTimesCircle} />
                    </div>
                    <div>

                    </div>
                    
                </div>
                <div className="listrow">
                    <div className="inlistrowapprove">
                        <div className="date">18</div>
                        <div className="month">Dec</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Paid Leave</div>
                        <div className="datetxt">18 Dec - 18 Dec</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    
                    <div>

                    </div>
                    
                </div>
                <div className="listrow">
                    <div className="inlistrowreject">
                        <div className="date">05</div>
                        <div className="month">jul</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Pay Without Leave</div>
                        <div className="datetxt">05 jul - 10 jul</div>
                        <div className="txt3" >Rejected</div>    
                    </div>
                   
                    <div>

                    </div>
                    
                </div>
                <div className="listrow" id="5">
                    <div className="inlistrow">
                        <div className="date">25</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Could not Sign In</div>
                        <div className="datetxt">25 Aug - 25 Aug</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    <div>
                     <FontAwesomeIcon onClick={()=>this.delete("5")}  className="listicons" style={{marginLeft:"392px"}} icon={faTimesCircle} />
                    </div>
                    <div>

                    </div>
                    
                </div>
                <div className="listrow" id="6">
                    <div className="inlistrow">
                        <div className="date">25</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Could not Sign In</div>
                        <div className="datetxt">25 Aug - 25 Aug</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    <div>
                     <FontAwesomeIcon onClick={()=>this.delete("6")}  className="listicons" style={{marginLeft:"392px"}} icon={faTimesCircle} />
                    </div>
                    <div>

                    </div>
                    
                </div>
                <div className="listrow" id="7">
                    <div className="inlistrow">
                        <div className="date">21</div>
                        <div className="month">Dec</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Could not Sign In</div>
                        <div className="datetxt">25 Dec - 25 Dec</div>
                        <div className="txt3" >In Process</div>    
                    </div>
                    <div>
                     <FontAwesomeIcon onClick={()=>this.delete("7")}  className="listicons" style={{marginLeft:"392px"}} icon={faTimesCircle} />
                    </div>
                    <div>

                    </div>
                    
                </div>
                
            
                
                <br/>
                <br/>

            </div>
        )
    }
}

export default List1
