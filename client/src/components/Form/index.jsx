import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Input from 'react-toolbox/lib/input/Input';
import moment from 'moment';
import AttendQuestions from './AttendQuestions';
import ListRadioGroup from './ListRadioGroup';
import ListInput from './ListInput';
import Confirm from './Confirm';
import config from '../../config';
import Validator from '../../lib/validator';

const onEmailOrAddressSubmit = Symbol('onEmailOrAddressSubmit');
const getEmailInputRef = Symbol('getEmailInputRef');
const emailInputRef = Symbol('emailInputRef');
const getAddressInputRef = Symbol('getAddressInputRef');
const addressInputRef = Symbol('addressInputRef');
const getNameInputRef = Symbol('getNameInputRef');
const nameInputRef = Symbol('nameInputRef');
const getAttendQuestionRef = Symbol('getAttendQuestionRef');
const attendQuestionRef = Symbol('attendQuestionRef');
const getRef = Symbol('getRef');
const onEmailChange = Symbol('onEmailChange');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this[onEmailOrAddressSubmit] = this[onEmailOrAddressSubmit].bind(this);
    this[getEmailInputRef] = this[getRef].bind(this, emailInputRef);
    this[getAddressInputRef] = this[getRef].bind(this, addressInputRef);
    this[getNameInputRef] = this[getRef].bind(this, nameInputRef);
    this[getAttendQuestionRef] = this[getRef].bind(this, attendQuestionRef);
    this[onEmailChange] = this[onEmailChange].bind(this);
    this.state = { emailError: false };
  }

  [onEmailChange](value) {
    this.props.onChange('email', value);
    this.setState({
      emailError: !Validator.validateEmail(value),
    });
  }

  [onEmailOrAddressSubmit](e) {
    e.preventDefault();
    this[emailInputRef].blur();
    this[addressInputRef].blur();
  }

  [getRef](sym, ref) {
    this[sym] = ref;
  }

  render() {
    const {
      name,
      attend,
      needInvitation,
      memo,
      onSubmit,
      onChange,
      email,
      address,
    } = this.props;
    const isExpire = moment().isAfter(moment(config.registerDeadline));
    return (
      <div>
        <Card>
          <CardTitle title={isExpire ? '婚宴出席調查(已經截止囉)' : '婚宴出席調查'} />
          <CardText>
            <ListInput
              title={config.form.name.title}
              name="name"
              value={name}
              onChange={onChange}
              hint={config.form.name.hint}
              option={{ maxLength: 100, required: true }}
              ref={this[getNameInputRef]}
            />
            <ListRadioGroup
              name="attend"
              selectValue={attend}
              title={config.form.attendance.title}
              onChange={onChange}
              items={config.form.attendance.items}
            />
            {
              attend === 'YES' &&
              <AttendQuestions
                {...this.props}
                onChange={onChange}
                ref={this[getAttendQuestionRef]}
              />
            }
            <ListRadioGroup
              name="needInvitation"
              selectValue={needInvitation}
              title={config.form.needInvitation.title}
              onChange={onChange}
              items={config.form.needInvitation.items}
            />
            {
              needInvitation === 'YES' &&
              <List selectable ripple>
                <ListSubHeader
                  className="list-item-header"
                  caption="留下你的email或地址，讓我們寄喜帖給你喲"
                />
                <ListItem
                  itemContent={
                    <form
                      style={{ width: '100%' }}
                      onSubmit={this[onEmailOrAddressSubmit]}
                    >
                      <Input
                        type="text"
                        label="地址"
                        maxLength={100}
                        hint="address"
                        value={address}
                        onChange={v => onChange('address', v)}
                        innerRef={this[getAddressInputRef]}
                      />
                      <Input
                        label="email"
                        type="email"
                        maxLength={100}
                        hint="email"
                        value={email}
                        onChange={this[onEmailChange]}
                        innerRef={this[getEmailInputRef]}
                        error={this.state.emailError ? 'email格式錯誤' : ''}
                      />
                      <input hidden type="submit" name="submit" value="" />
                    </form>
                  }
                />
              </List>
            }
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
        <Confirm
          {...this.props}
          onSubmit={onSubmit}
          isExpire={isExpire}
          jumpToName={() => { this[nameInputRef].focus(); }}
          jumpToCustomRelation={() => { this[attendQuestionRef].focusOnCustomRelationInput(); }}
          jumpToAddress={() => { this[addressInputRef].focus(); }}
          jumpToEmail={() => { this[emailInputRef].focus(); }}
        />
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  attend: PropTypes.string.isRequired,
  needInvitation: PropTypes.string.isRequired,
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
