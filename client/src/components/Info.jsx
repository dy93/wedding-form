import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import config from '../config';

class Info extends React.Component {
  render() {
    return (
      <Card>
        <CardTitle title="婚宴出席調查" />
        <CardText>
          <List>
            <ListItem caption="時間" legend={config.weddingTime} leftIcon="date_range" />
            <ListItem caption="地點" legend={config.weddingAddress} leftIcon="place" />
            <ListItem itemContent={
              <iframe
                title={config.weddingAddress}
                src={config.weddingAddressGoogleMap}
                width="100%"
                height="80%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              />
            }
            />
          </List>
        </CardText>
      </Card>
    );
  }
}

export default Info;
