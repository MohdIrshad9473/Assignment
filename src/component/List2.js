import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class List2 extends Component {
    addelement = () => {
        confirmAlert({
            title: 'Regularize Attendance',
            message: 'You Clicked  on Regularize',
            buttons: [
                {
                    label: 'Yes',
                    //   onClick: () => alert('Click Yes')
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


                <div className="listrow">
                    <div className="inlistrow">
                        <div className="date">03</div>
                        <div className="month">sep</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Monday</div>
                        <div className="datetxt">Late Muster</div>
                        <div className="txt3" >Absent</div>
                    </div>
                    <div>
                        <FontAwesomeIcon onClick={this.addelement} className="listiconsp" icon={faPlusCircle} />
                    </div>
                    <div>

                    </div>

                </div>
                <div className="listrow">
                    <div className="inlistrow">
                        <div className="date">25</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Friday</div>
                        <div className="datetxt">Late Muster</div>
                        <div className="txt3" >Go</div>
                    </div>

                    <div>

                    </div>

                </div>
                <div className="listrow">
                    <div className="inlistrow">
                        <div className="date">30</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Thursday</div>
                        <div className="datetxt">Late Muster</div>
                        <div className="txt3" >Absent</div>
                    </div>
                    <div>
                        <FontAwesomeIcon onClick={this.addelement} className="listiconsp" icon={faPlusCircle} />
                    </div>
                    <div>

                    </div>

                </div>
                <div className="listrow">
                    <div className="inlistrow">
                        <div className="date">05</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Thursday</div>
                        <div className="datetxt">Late Muster</div>
                        <div className="txt3" >Go</div>
                    </div>

                    <div>

                    </div>

                </div>
                <div className="listrow">
                    <div className="inlistrow">
                        <div className="date">12</div>
                        <div className="month">Aug</div>
                    </div>
                    <div className="inlistrow1">
                        <div className="txt1">Thursday</div>
                        <div className="datetxt">Late Muster</div>
                        <div className="txt3" >Go</div>
                    </div>

                    <div>

                    </div>

                </div>

                <br />
                <br />
            </div>
        )
    }
}

export default List2
