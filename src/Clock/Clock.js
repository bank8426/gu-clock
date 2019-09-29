import React, { Component } from 'react'

export default class Clock extends Component {
    
    render() {
        //degree from hour plus raction degree from minute in our
        const hourDegree = ((360/12) * (this.props.hour % 12)) + ((360/12) * (this.props.minute/60))  
        const minuteDegree = (360/60) * (this.props.minute)  
        const secondDegree = (360/60) * (this.props.second)  
        const hourStyle = {'backgroundColor' : 'yellow' , 
            height : '40px',
            width : '2px', 
            top : '50px',
            left: '89px',
            right: 0,
            bottom:0,
            position: 'absolute',
            transform : `rotateZ(${hourDegree}deg)`,
            transformOrigin: 'bottom',
            zIndex : 3
        }

        const minuteStyle = {'backgroundColor' : 'blue' , 
            height : '60px',
            width : '2px', 
            top : '30px',
            left: '89px',
            right: 0,
            bottom:0,
            position: 'absolute',
            transform : `rotateZ(${minuteDegree}deg)`,
            transformOrigin: 'bottom',
            zIndex : 2
        }

        const secondStyle = {'backgroundColor' : 'red' , 
            height : '80px',
            width : '2px', 
            top : '10px',
            left: '89px',
            right: 0,
            bottom:0,
            position: 'absolute',
            transform : `rotateZ(${secondDegree}deg)`,
            transformOrigin: 'bottom',
            zIndex : 1
        }
        return (
            <div style={{'backgroundColor' : 'brown' , 
                height : '200px', 
                width : '200px' , 
                borderRadius : '50%',
                position : 'relative'
            }}>
                <div style={{'backgroundColor' : 'wheat' , 
                    height : '180px',
                    width : '180px', 
                    borderRadius : '50%' , 
                    'marginTop': '10px',
                    'marginLeft': '10px',
                    position: 'absolute'
                }}>
                    <div style={hourStyle}></div>
                    <div style={minuteStyle}></div>
                    <div style={secondStyle}></div>

                    <div style={{position: 'absolute',
                    top : 0,
                    left:0,
                    right: 0,
                    textAlign:'center'
                    }}>12</div>

                    <div style={{position: 'absolute',
                    top: '75px',
                    bottom: '0px',
                    right: '5px',
                    lineHeight: '30px'
                    }}>3</div>

                    <div style={{position: 'absolute',
                    top: '75px',
                    bottom: '0px',
                    left: '5px',
                    lineHeight: '30px'
                    }}>9</div>

                    <div style={{position: 'absolute',
                    right : 0,
                    bottom : 0,
                    left:0,
                    
                    textAlign:'center'
                    }}>6</div>
                </div>
            </div>
        )
    }
}
