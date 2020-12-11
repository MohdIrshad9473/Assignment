import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faSearch,  faShareAlt} from '@fortawesome/free-solid-svg-icons'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Head extends Component {
    /* Set the width of the side navigation to 250px */
    openNav = () => {
        console.log("openNav");
        document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    notifia=()=> {
        NotificationManager.info("Notification" ,"You Clicked Notification");
    }
    share=()=> {
        NotificationManager.warning("Share" ,"You Clicked Share");
    }
    search=()=> {
        NotificationManager.success("Search" ,"You Clicked Search");
    }

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#">Home</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                    
                </div>
                <div className="container-flude Top">
                    <div className="row">
                        <div className="col-12 cont1">
                            <span className="spans" onClick={this.openNav}>&#9776;</span>
                            <h2 className="home">Home</h2>
                            <div className="headicon">
                            <FontAwesomeIcon onClick={this.notifia} className="icons" icon={faBell} />
                            <FontAwesomeIcon onClick={this.share} className="icons" icon={faShareAlt} />
                            <FontAwesomeIcon onClick={this.search} className="icons" icon={faSearch} />
                            
                            </div>
                          
                            

                        </div>
                        
                    </div>
                </div>

               
                            <NotificationContainer  />
                          
                
            </div>
        )
    }
}

export default Head
