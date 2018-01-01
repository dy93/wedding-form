/* react/no-multi-comp: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-toolbox/lib/slider/Slider';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import Input from 'react-toolbox/lib/input/Input';
import ListRadio from './ListRadio';
import './child.css';

class Child extends React.Component {
  render() {
    const {
      invitor,
      relation,
      relation_else,
      email,
      address,
      people,
      vegetable,
      onChange,
    } = this.props;
    return (
      <div>
        <ListRadio
          title="是誰的朋友？"
          name="invitor"
          selectValue={invitor}
          onChange={onChange}
          items={[
            { caption: '從慶的朋友', value: 'dy93' },
            { caption: '雪汾的朋友', value: 'ueewbd' },
            { caption: '都不是', value: 'neither' },
          ]}
        />
        <ListRadio
          title="與新人關係？"
          name="relation"
          selectValue={relation}
          onChange={onChange}
          items={[
            { caption: '同事', value: 'work' },
            { caption: '交大武友會', value: 'wuling' },
            { caption: '大學/研究所同學', value: 'college' },
            { caption: '高中同學', value: 'senior' },
            { caption: '國中同學', value: 'junior' },
            { caption: '其它', value: 'else', input: { hint: '請輸入', label: '其它', value: relation_else } },
          ]}
        />
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
                    innerRef={(r) => { r && (this.email = r); }}
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
                    innerRef={(r) => { r && (this.address = r); }}
                  />
                </div>
              }
            />
          </form>
        </List>
        <List selectable ripple>
          <ListSubHeader caption="出席人數(包含自己)" />
          <Slider
            pinned
            snaps
            min={0}
            max={10}
            step={1}
            editable
            value={people}
            onChange={v => onChange('people', v)}
          />
        </List>
        <List selectable ripple>
          <ListSubHeader caption="素食人數(包含自己)" />
          <Slider
            pinned
            snaps
            min={0}
            max={10}
            step={1}
            editable
            value={vegetable}
            onChange={v => onChange('vegetable', v)}
          />
        </List>
      </div>
    );
  }
}

Child.propTypes = {
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  relation_else: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Child;
