import React, { Component } from 'react';
import moment from 'moment';
import teamImages from '../teamsImageConstant';

class ScheduleGamesListEntry extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const date = this.props.date;
    const awayTeam = this.props.awayTeam;
    const homeTeam = this.props.homeTeam;
    const momentDate = moment(date);
    const monthNum = momentDate.month();
    const convertedDate = momentDate._d;
    const convertedDay = convertedDate.toLocaleString();
    console.dir(convertedDate);
    // const convertedHours = convertedDate.getLocaleHours();


    const monthDayNum = momentDate.date();
    const yearNum = momentDate.year();

    const team1 = `team1 team1-${awayTeam}`;
    const team2 = `team2 team2-${homeTeam}`;

    return (

      <div className="schedule-game">
        <span className={team1}>
          <img className="schedule-image" alt={awayTeam} src={teamImages[awayTeam]} />
        </span>
        <span className={team2}>
          <img className="schedule-image" alt={homeTeam} src={teamImages[homeTeam]} />
        </span>
        <div className="schedule-time">
          <span className="team1-name">{awayTeam}</span>
          <span className="at-sign">@</span>
          {convertedDate.toString()}
          <span className="team2-name"> {homeTeam}</span>
        </div>
      </div>
    );
  }
}

export default ScheduleGamesListEntry;
