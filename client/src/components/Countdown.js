import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './countdown.css';
import config from '../config';

const END_TIME = moment(config.countdownTime, 'YYYY-MM-DD HH:mm:ss');

function lpad(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

function lpadTo3Digit(number) {
  if (number < 10) {
    return `00${number}`;
  }
  if (number < 100) {
    return `0${number}`;
  }
  return `${number}`;
}

function Box(props) {
  const { title, value } = props;
  return (
    <div className="cd-box">
      <p className="numbers">{value}</p><br />
      <p className="strings">{title}</p>
    </div>
  );
}

Box.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: END_TIME.diff(moment()),
    };
  }
  componentDidMount() {
    this.handler = setInterval(() => {
      this.setState({ diff: END_TIME.diff(moment()) });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.handler);
  }
  render() {
    const { diff } = this.state;
    const day = lpadTo3Digit(Math.floor(moment.duration(diff).asDays()));
    const hour = lpad(moment.duration(diff).hours());
    const minute = lpad(moment.duration(diff).minutes());
    const second = lpad(moment.duration(diff).seconds());
    return (
      <div id="countdown">
        <Box title="DAYS" value={day} />
        <Box title="HOURS" value={hour} />
        <Box title="MINUTES" value={minute} />
        <Box title="SECONDS" value={second} />
      </div>
    );
  }
}

export default CountDown;
