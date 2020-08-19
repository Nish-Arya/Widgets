import React from 'react';

class Clock extends React.Component {
    constructor(){
        super();
        this.state = {
            time: new Date(),
        }
    }

    tick = () => {
       this.setState({
           time: new Date()
       })
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    render() {
      
      const hours = this.state.time.getHours();
      const minutes = this.state.time.getMinutes();
      const seconds = this.state.time.getSeconds();
      const date = this.state.time.toDateString();
      
        return (
          <div className="clock-div">
            <h1> Clock </h1>
            <div>
              <span>Time: </span>
              <span>
                {hours}:{minutes}:{seconds}
              </span>
            </div>
            <div>
              <span>Date: </span>
              <span>
                {date}
              </span>
            </div>
          </div>
        );
    }
}

export default Clock;