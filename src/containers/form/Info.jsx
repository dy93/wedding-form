import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';

class Info extends React.Component {
  render() {
    return (
      <List>
        <ListItem caption="時間" legend="2018/05/26 (六) 晚宴" leftIcon="date_range" />
        <ListItem caption="地點" legend="北投南豐天玥泉會館 (台北市北投區中山路3號)" leftIcon="place" />
        <ListItem itemContent={
          <iframe
            title="北投南豐天玥泉會館 (台北市北投區中山路3號)"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.9564552461034!2d121.50325431519944!3d25.137162983924092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae451fa431a3%3A0xf6cac12c982fe923!2sBeitou+Hot+Springs+Resort!5e0!3m2!1szh-TW!2stw!4v1512908211812"
            width="100%"
            height="80%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        }
        />
      </List>
    );
  }
}

export default Info;
