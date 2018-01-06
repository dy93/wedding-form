/* react/no-multi-comp: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-toolbox/lib/slider/Slider';
import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListRadioGroup from './ListRadioGroup';
import './attend-questions.css';
import config from '../../config';

const getRelationRadioGroupRef = Symbol('getRelationRadioGroupRef');
const relationRadioGroupRef = Symbol('relationRadioGroupRef');

class AttendQuestions extends React.Component {
  constructor(props) {
    super(props);
    this[getRelationRadioGroupRef] = this[getRelationRadioGroupRef].bind(this);
  }

  [getRelationRadioGroupRef](ref) {
    this[relationRadioGroupRef] = ref;
  }

  focusOnCustomRelationInput() {
    this[relationRadioGroupRef].focusOnCustomInput();
  }


  render() {
    const {
      invitor,
      relation,
      people,
      vegetable,
      babySeats,
      onChange,
    } = this.props;
    return (
      <div>
        <ListRadioGroup
          title={config.form.invitor.title}
          name="invitor"
          selectValue={invitor}
          onChange={onChange}
          items={config.form.invitor.items}
        />
        <ListRadioGroup
          title={config.form.relation.title}
          name="relation"
          selectValue={relation}
          onChange={onChange}
          items={config.form.relation.items}
          allowCustomValue
          ref={this[getRelationRadioGroupRef]}
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
        <List selectable ripple>
          <ListSubHeader caption="是否需要兒童座椅? (請選擇需要數量)" />
          <Slider
            pinned
            snaps
            min={0}
            max={3}
            step={1}
            editable
            value={babySeats}
            onChange={v => onChange('babySeats', v)}
          />
        </List>
      </div>
    );
  }
}

AttendQuestions.propTypes = {
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  babySeats: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AttendQuestions;
