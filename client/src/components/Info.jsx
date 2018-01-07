import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Button from 'react-toolbox/lib/button/Button';
import PropTypes from 'prop-types';
import moment from 'moment';

import config from '../config';

class Info extends React.Component {
  render() {
    const deadline = moment(config.registerDeadline);
    return (
      <Card>
        <CardTitle title="婚宴資訊" />
        <CardText>
          <List ripple={false}>
            <ListItem
              ripple={false}
              caption="時間"
              legend={config.weddingTime}
              leftIcon="date_range"
            />
            <ListItem
              ripple={false}
              caption="地點"
              legend={config.weddingAddress}
              leftIcon="place"
            />
            <ListItem
              ripple={false}
              itemContent={
                <iframe
                  title={config.weddingAddress}
                  src={config.weddingAddressGoogleMap}
                  width="100%"
                  height="300px"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              }
            />
            <ListItem
              ripple={false}
              itemContent={
                <Button
                  primary
                  raised
                  label={`我要報名婚宴 (報名截止日期:${deadline.format('YYYY-MM-DD')})`}
                  onClick={this.props.register}
                  style={{ margin: 'auto' }}
                  disabled={moment().isAfter(deadline)}
                />
              }
            />
          </List>
        </CardText>
      </Card>
    );
  }
}

Info.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Info;
