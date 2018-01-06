import React, { Component } from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import './App.css';
import CountDown from './components/Countdown';
import Info from './components/Info';
import Form from './components/Form';
import QA from './components/QA';
import config from './config';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.showLoading = this.showLoading.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  state = {
    name: '',
    attend: 'YES',
    invitation: 'YES',
    invitor: config.form.invitor.items[0].value,
    relation: config.form.relation.items[0].value,
    relationElse: '',
    email: '',
    address: '',
    people: 1,
    vegetable: 0, // 素食人敗
    childrenSeats: 0,
    memo: '',
    result: null,
    showDialog: false,
    showLoading: false,
    selectTab: 1,
  };

  onSubmit() {
    const {
      name,
      attend,
      invitation,
      invitor,
      relation,
      relationElse,
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
      invitation: 'YES',
      invitor: config.form.invitor.items[0].value,
      relation: config.form.relation.items[0].value,
      relationElse: '',
      email: '',
      address: '',
      people: 1,
      vegetable: 0, // 素食人數
      childrenSeats: 0, // 兒童座椅
      memo: '',
      showLoading: false,
      selectTab: 0,
    });
  }
  onChange(name, value) {
    if (typeof value === 'string') {
      this.setState({ [name]: value.trim().length === 0 ? '' : value });
    } else {
      this.setState({ [name]: value });
    }
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
      <Layout className="App" >
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
            flex: 1, overflowY: 'auto', paddingTop: '1.8rem', marginTop: '200px',
          }}
          >
            <h1 style={{ color: 'white', textShadow: '5px 5px 19px black' }}>{config.title}</h1>
            <small style={{ color: 'white', textShadow: '5px 5px 19px black' }}>{config.subtitle}</small>
            <CountDown />
            <Tabs inverse index={this.state.selectTab} onChange={this.onTabChange} fixed>
              <Tab label="婚宴資訊">
                <Info register={() => this.onTabChange(1)} />
              </Tab>
              <Tab label="婚宴報名">
                <Form {...this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
              </Tab>
              <Tab label="Q&amp;A">
                <QA />
              </Tab>
            </Tabs>
          </div>
        </Panel>
      </Layout>
    );
  }
}

export default App;
