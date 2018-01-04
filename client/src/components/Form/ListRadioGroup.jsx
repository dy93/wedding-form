import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import Input from 'react-toolbox/lib/input/Input';
import './listradiogroup.css';

const getCustomValueInputRef = Symbol('getCustomValueInputRef');
const customValueInputRef = Symbol('customValueInputRef');
const onCustomRadioButtonClick = Symbol('onCustomRadioButtonClick');
const onCustomValueChange = Symbol('onCustomValueChange');
const onSubmit = Symbol('onSubmit');

class ListRadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this[getCustomValueInputRef] = this[getCustomValueInputRef].bind(this);
    this[onCustomRadioButtonClick] = this[onCustomRadioButtonClick].bind(this);
    this[onCustomValueChange] = this[onCustomValueChange].bind(this);
    this[onSubmit] = this[onSubmit].bind(this);
  }

  [onSubmit](e) {
    e.preventDefault();
    this[customValueInputRef].blur();
  }

  [onCustomValueChange](value) {
    const trimValue = value.trim().length === 0 ? '' : value;
    this.setState({ inputValue: trimValue });
    this.props.onChange(this.props.name, trimValue);
  }

  [onCustomRadioButtonClick]() {
    const { onChange, name } = this.props;
    onChange(name, this.state.inputValue);
    setTimeout(() => {
      this[customValueInputRef].focus();
    }, 0);
  }

  [getCustomValueInputRef](ref) {
    this[customValueInputRef] = ref;
  }

  focusOnCustomInput() {
    this[customValueInputRef].focus();
  }

  render() {
    const {
      items,
      title,
      name,
      selectValue,
      onChange,
      allowCustomValue = false,
    } = this.props;
    return (
      <List selectable ripple>
        <ListSubHeader caption={title} />
        {
          items.map(entry => (
            <ListItem
              key={entry.value}
              onClick={() => onChange(name, entry.value)}
              itemContent={
                <div>
                  <RadioButton
                    label={entry.caption}
                    value={entry.value}
                    checked={selectValue === entry.value}
                  />
                </div>
              }
            />
          ))
        }
        {
          allowCustomValue &&
          <ListItem
            onClick={this[onCustomRadioButtonClick]}
            itemContent={
              <div style={{ marginTop: '6.5px' }}>
                <RadioButton
                  label="其它"
                  checked={!items.find(entry => entry.value === selectValue)}
                />
                <form onSubmit={this[onSubmit]}>
                  <Input
                    type={!items.find(entry => entry.value === selectValue) ? 'text' : 'hidden'}
                    maxLength={50}
                    className="padding-padding-disappear"
                    innerRef={this[getCustomValueInputRef]}
                    value={!items.find(entry => entry.value === selectValue) ? this.state.inputValue : ''}
                    onChange={this[onCustomValueChange]}
                  />
                </form>
              </div>
              }
          />
        }
      </List>
    );
  }
}

ListRadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string,
    value: PropTypes.string.isRequired,
    input: PropTypes.shape({
      hint: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.value,
    }),
  })).isRequired,
  allowCustomValue: PropTypes.bool,
};

ListRadioGroup.defaultProps = {
  allowCustomValue: false,
};

export default ListRadioGroup;
