import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import './qa.css';
import config from '../config';

class QA extends React.Component {
  render() {
    return (
      <Card>
        <CardText>
          <List>
            {
              /* eslint-disable react/no-array-index-key */
              config.qa.map((entry, i) => (
                <ListItem
                  key={i}
                  className="list-item-header"
                  caption={entry.caption}
                  legend={entry.legend}
                  leftIcon={entry.leftIcon}
                />))
              /* eslint-enable */
            }
          </List>
        </CardText>
      </Card>
    );
  }
}

export default QA;
