/* react/no-multi-comp: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-toolbox/lib/slider/Slider';
import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListRadio from './ListRadio';
import './child.css';
import config from '../../config';

class Child extends React.Component {
  render() {
    const {
      invitor,
      relation,
      relation_else,
      people,
      vegetable,
      onChange,
    } = this.props;
    return (
      <div>
        <ListRadio
          title={config.form.invitor.title}
          name="invitor"
          selectValue={invitor}
          onChange={onChange}
          items={config.form.invitor.items}
        />
        <ListRadio
          title={config.form.relation.title}
          name="relation"
          selectValue={relation}
          onChange={onChange}
          items={[
            ...config.form.relation.items,
            {
              caption: '其它',
              value: 'else',
              input: { hint: '請輸入', label: '其它', value: relation_else },
            },
          ]}
        />
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
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Child;
