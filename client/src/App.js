import React, { Component } from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import axios from 'axios';
import './App.css';
import CountDown from './components/Countdown';
import Info from './components/Info';
import Form from './components/Form';
import QA from './components/QA';
import config from './config';

const INIT_STATE = {
  name: '',
  attend: 'YES',
  needInvitation: 'YES',
  invitor: config.form.invitor.items[0].value,
  relation: config.form.relation.items[0].value,
  email: '',
  address: '',
  people: 1,
  vegetable: 0, // 素食人敗
  babySeats: 0,
  memo: '',
  result: null,
  showDialog: false,
  showErrorDialog: false,
  showLoading: false,
  selectTab: 0,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.toggleErrorDialog = this.toggleErrorDialog.bind(this);
    this.showLoading = this.showLoading.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  state = { ...INIT_STATE }

  onSubmit() {
    const {
      name,
      attend,
      needInvitation,
      invitor,
      relation,
      email,
      address,
      people,
      vegetable,
      babySeats,
      memo,
    } = this.state;

    window.gtag('event', 'submit', { attend });
    window.gtag('event', `submit_${attend}`, { attend });

    this.showLoading(true);

    return axios.post('/form/', {
      name,
      attend,
      needInvitation,
      invitor,
      relation,
      email,
      address,
      people,
      vegetable,
      babySeats,
      memo,
    }).then(() => {
      this.setState({ ...INIT_STATE, selectTab: this.state.selectTab }, () => {
        this.toggleDialog(true);
      // this.showLoading(false); // asdad
      });
    }).catch((err) => {
      this.showLoading(false);
      this.toggleErrorDialog(true);
    });
  }

  onChange(name, value) {
    if (typeof value === 'string') {
      this.setState({ [name]: value.trim().length === 0 ? '' : value });
    } else {
      this.setState({ [name]: value });
    }
    if (name === 'people') {
      this.setState(preState => ({ vegetable: Math.min(preState.vegetable, preState.people) }));
    }
  }

  onTabChange(index) {
    window.gtag('event', `view_tab_${index}`, { tab: index });
    window.gtag('event', 'view_tab', { tab: index });
    this.setState({ selectTab: index });
  }

  toggleDialog(showDialog) {
    this.setState({ showDialog });
  }

  toggleErrorDialog(showErrorDialog) {
    this.setState({ showErrorDialog });
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
          actions={[{ label: '豪!我知道了', onClick: () => this.toggleDialog(false) }]}
          active={this.state.showDialog}
          onEscKeyDown={() => this.toggleDialog(false)}
          onOverlayClick={() => this.toggleDialog(false)}
          title="成功"
        >
          <p>表單已送出，謝謝~</p>
        </Dialog>
        <Dialog
          actions={[{ label: '太哀傷惹', onClick: () => this.toggleErrorDialog(false) }]}
          active={this.state.showErrorDialog}
          onEscKeyDown={() => this.toggleErrorDialog(false)}
          onOverlayClick={() => this.toggleErrorDialog(false)}
          title="Oops!送出失敗"
        >
          <p><a href="https://github.com/dy93/wedding-form/issues" rel="noopener noreferrer" target="_blank">請按這裡回報issue</a></p>
        </Dialog>
        <Panel style={{
          maxWidth: '800px',
          margin: 'auto',
          marginTop: '-30px',
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          backgroundColor: 'white',
        }}
        >
          <div style={{ position: 'absolute', top: '40px', left: '10px' }}>
            <iframe title="dy93/wedding-form" src="https://ghbtns.com/github-btn.html?user=dy93&repo=wedding-form&type=star&count=true" frameBorder="0" scrolling="0" width="170px" height="20px" />
          </div>
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
