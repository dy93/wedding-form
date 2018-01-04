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
  constructor(props) {
    super(props);
    this.getRelationListRadioRef = this.getRelationListRadioRef.bind(this);
  }

  getRelationListRadioRef(ref) {
    this.relationListRadioRef = ref;
  }

  focusOnRelationOther() {
    this.relationListRadioRef.focusOnOther();
  }


  render() {
    const {
      invitor,
      relation,
      people,
      vegetable,
      childrenSeats,
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
          items={config.form.relation.items}
          allowElse
          ref={this.getRelationListRadioRef}
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
            value={childrenSeats}
            onChange={v => onChange('childrenSeats', v)}
          />
        </List>
      </div>
    );
  }
}

Child.propTypes = {
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  childrenSeats: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Child;
