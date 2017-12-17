import React from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import Form from './Form';
import CountDown from './Countdown';
import QA from './QA';

class LayoutTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      attend: 'YES',
      invitor: 'dy93',
      relation: 'work',
      relation_else: '',
      email: '',
      address: '',
      people: 1,
      vegetable: 0, // 素食人敗
      memo: '',
      result: null,
      showDialog: false,
      showLoading: false,
      selectTab: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.showLoading = this.showLoading.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  onSubmit() {
    const {
      name,
      attend,
      invitor,
      relation,
      relation_else,
      email,
      address,
      people,
      vegetable,
      memo,
    } = this.state;
    this.showLoading(true);

    // this.toggleDialog(true);
    this.setState({
      name: '',
      attend: 'YES',
      invitor: 'dy93',
      relation: 'work',
      relation_else: '',
      email: '',
      address: '',
      people: 1,
      vegetable: 0, // 素食人敗
      memo: '',
      showLoading: false,
      selectTab: 0,
    });
  }

  onChange(name, value) {
    this.setState({ [name]: value });
  }

  onTabChange(index) {
    this.setState({ selectTab: index });
  }

  toggleDialog(showDialog) {
    this.setState({ showDialog });
  }

  showLoading(loading) {
    this.setState({ showLoading: loading });
  }

  render() {
    return (
      <Layout>
        <Dialog active={this.state.showLoading}>
          <div style={{ width: 'fit-content', margin: 'auto' }}>
            <ProgressBar type="circular" mode="indeterminate" multicolor />
          </div>
        </Dialog>
        <Dialog
          actions={[{ label: 'OK', onClick: () => this.toggleDialog(false) }]}
          active={this.state.showDialog}
          onEscKeyDown={() => this.toggleDialog(false)}
          onOverlayClick={() => this.toggleDialog(false)}
          title="成功"
        >
          <p>表單已送出，謝謝~</p>
        </Dialog>
        <Panel style={{
          maxWidth: '800px',
          margin: 'auto',
          marginTop: '-30px',
          backgroundImage: 'url(./bg2.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
        }}
        >
          <div style={{
            flex: 1, overflowY: 'auto', padding: '1.8rem', marginTop: '200px',
          }}
          >
            <h1 style={{ color: 'white' }}>地表最強婚宴調查表</h1>
            <small style={{ color: 'white' }}>從慶 x 雪汾</small>
            <CountDown />
            <Tabs index={this.state.selectTab} onChange={this.onTabChange} fixed>
              <Tab label="婚宴報名">
                <Card>
                  <CardTitle title="婚宴資訊" />
                  <CardText>
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
                  </CardText>
                </Card>
                <Form {...this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
              </Tab>
              <Tab label="Q&A">
                <QA />
              </Tab>
            </Tabs>
          </div>
        </Panel>
      </Layout>
    );
  }
}

export default LayoutTest;
