import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Input from 'react-toolbox/lib/input/Input';
import Child from './Child';
import ListRadio from './ListRadio';
import ListInput from './ListInput';
import Confirm from './Confirm';
import config from '../../config';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = this.emailRef.bind(this);
    this.addressRef = this.addressRef.bind(this);
  }

  emailRef(ref) {
    this.email = ref;
  }

  addressRef(ref) {
    this.address = ref;
  }

  render() {
    const {
      name,
      attend,
      memo,
      onSubmit,
      onChange,
      email,
      address,
    } = this.props;
    return (
      <div>
        <Card>
          <CardTitle title="婚宴出席調查" />
          <CardText>
            <ListInput
              title={config.form.name.title}
              name="name"
              value={name}
              onChange={onChange}
              hint={config.form.name.hint}
              option={{ maxLength: 100, required: true }}
            />
            <ListRadio
              name="attend"
              selectValue={attend}
              title={config.form.attendance.title}
              onChange={onChange}
              items={config.form.attendance.items}
            />
            {attend === 'YES' && <Child {...this.props} onChange={onChange} />}
            <List selectable ripple>
              <ListSubHeader
                className="list-item-header"
                caption="留下你的email或地址，讓我們寄喜帖給你喲"
              />
              <form
                onSubmit={(e) => {
              e.preventDefault();
              this.email && this.email.blur();
              this.address && this.address.blur();
            }}
              >
                <ListItem
                  onClick={() => { this.email && this.email.focus(); }}
                  itemContent={
                    <div style={{ width: '100%' }}>
                      <Input
                        label="email"
                        type="email"
                        maxLength={100}
                        hint="email"
                        value={email}
                        onChange={v => onChange('email', v)}
                        innerRef={this.emailRef}
                      />
                    </div>
              }
                />
                <ListItem
                  onClick={() => { this.address && this.address.focus(); }}
                  itemContent={
                    <div style={{ width: '100%' }}>
                      <Input
                        type="text"
                        label="地址"
                        maxLength={100}
                        hint="address"
                        value={address}
                        onChange={v => onChange('address', v)}
                        innerRef={this.addressRef}
                      />
                    </div>
              }
                />
              </form>
            </List>
            <ListInput
              title="想對我們說的話"
              name="memo"
              value={memo}
              onChange={onChange}
              hint="請輸入悄悄話"
              option={{ multiline: true, maxLength: 1000, rows: 5 }}
            />
          </CardText>
        </Card>
        <Confirm {...this.props} onSubmit={onSubmit} />
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  attend: PropTypes.string.isRequired,
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  memo: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
