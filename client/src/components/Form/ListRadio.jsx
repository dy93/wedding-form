import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import Input from 'react-toolbox/lib/input/Input';
import './ListRadioInput.css';

class ListRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.getInputRef = this.getInputRef.bind(this);
    this.onElseClick = this.onElseClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.inputRef.blur();
  }
  onInputChange(value) {
    this.setState({ inputValue: value });
    this.props.onChange(this.props.name, value);
  }
  onElseClick() {
    const { onChange, name } = this.props;
    setTimeout(() => {
      this.inputRef.focus();
    }, 100);
    return onChange(name, this.state.inputValue);
  }
  getInputRef(ref) {
    this.inputRef = ref;
  }
  render() {
    const {
      items,
      title,
      name,
      selectValue,
      onChange,
      allowElse = false,
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
          allowElse &&
          <ListItem
            onClick={this.onElseClick}
            itemContent={
              <div style={{ marginTop: '6.5px' }}>
                <RadioButton
                  label="其它"
                  checked={!items.find(entry => entry.value === selectValue)}
                />
                <form onSubmit={this.onSubmit}>
                  <Input
                    type={!items.find(entry => entry.value === selectValue) ? 'text' : 'hidden'}
                    maxLength={50}
                    className="padding-padding-disappear"
                    innerRef={this.getInputRef}
                    value={!items.find(entry => entry.value === selectValue) ? this.state.inputValue : ''}
                    onChange={this.onInputChange}
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

ListRadio.propTypes = {
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
  allowElse: PropTypes.bool,
};

ListRadio.defaultProps = {
  allowElse: false,
};

export default ListRadio;
