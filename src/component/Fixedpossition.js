import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCalendar, faExclamation, faExclamationCircle, faHeart, faPeopleArrows, faPlusCircle, faSearch, faShareAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Fixedpossition extends Component {
    Calendar = () => NotificationManager.success("Holiday Calendar" ,"You Clicked Holiday Calendar");
    ApplyLeave = () => NotificationManager.warning("Apply Leave" ,"You Clicked Apply Leave");
    render() {
        return (
            <div>
                <div style={{
                    borderRadius: "40%",
                     background:" rgb(255, 230, 1)",
                     width: "42px",
                      height: "42px",
                    position: "fixed",
                    bottom:"195px",
                   right: "32px",
                    zIndex: "100"
                }}>
                    <FontAwesomeIcon onClick={this.Calendar} className="iconsFix" icon={faCalendar} />
                </div>
                
                <div style={{
                    borderRadius: "40%",
                     background: " rgb(255, 230, 1)", 
                     width: "50px",
                      height: "50px",
                    position: "fixed",
                    bottom: "89px",
                    right: "31px",
                    zIndex: "100"
                }}>
                    <FontAwesomeIcon onClick={this.ApplyLeave} className="iconsFix1" icon={faPlusCircle} />
                </div>
                
            </div>
        )
    }
}

export default Fixedpossition
