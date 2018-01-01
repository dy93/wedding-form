import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import './qa.css';

class QA extends React.Component {
  render() {
    return (
      <Card>
        <CardText>
          <List>
            <ListItem
              className="list-item-header"
              caption="1. 為什麼要做這個"
              legend="因為要有10倍的誠意啊"
              leftIcon="help"
            />
            <ListItem
              className="list-item-header"
              caption="2. 這個好酷啊，有沒有open source?"
              legend="有的!請看GitHub"
              leftIcon="favorite"
            />
          </List>
        </CardText>
      </Card>
    );
  }
}

export default QA;
