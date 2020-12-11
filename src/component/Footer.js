import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faExclamation, faExclamationCircle, faHeart, faPeopleArrows, faSearch,  faShareAlt, faUser, faUsers} from '@fortawesome/free-solid-svg-icons'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Footer extends Component {
                  Heart = () => NotificationManager.warning("Favorites" ,"You Clicked Favorites");
                  Team = () => NotificationManager.warning("Team" ,"You Clicked Team");
                  Approved = () => NotificationManager.warning("Approved" ,"You Clicked Approved");
                  Notification = () => NotificationManager.warning("Notification" ,"You Clicked Notification");

    render() {
               
        return (
            <div>
                 <div className="container-flude Top1">
                    <div className="row">
                        <div className="col-12 cont1">
                            
                            <div className="batomicon">
                            <div  onClick={this.Heart} style={{textAlign:"center", color:"orange"}}  >
                            <FontAwesomeIcon   style={{marginLeft:"0rem"}} icon={faHeart} />
                            <div style={{fontSize:"10px"}} >Favorite</div>
                            </div>
                            <div onClick={this.Team} style={{textAlign:"center" , color:"orange"}}>
                            <FontAwesomeIcon  className="icons1" style={{marginLeft:"18rem"}} icon={faUsers}/>
                            <div style={{fontSize:"10px", marginLeft:"18rem"}} >Team</div>
                            </div>
                            <div onClick={this.Approved} style={{textAlign:"center" , color:"orange"}}>
                            <FontAwesomeIcon  className="icons1" style={{marginLeft:"18rem"}} icon={faExclamationCircle} />
                            <div style={{fontSize:"10px", marginLeft:"18rem"}} >Approvals</div> 
                            </div>
                            <div onClick={this.Notification} style={{textAlign:"center" , color:"orange"}}>
                            <FontAwesomeIcon  className="icons1" style={{marginLeft:"18rem"}} icon={faBell} />
                            <div style={{fontSize:"10px", marginLeft:"18rem"}} >Notification</div>
                            </div>
                            
                            
                            </div>
                          
                            

                        </div>
                        
                    </div>
                </div>
                <NotificationContainer  />
            </div>
        )
    }
}

export default Footer
