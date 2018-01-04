import React from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import Input from 'react-toolbox/lib/input/Input';
import PropTypes from 'prop-types';

class ListInput extends React.Component {
  constructor(props) {
    super(props);
    this.getInputRef = this.getInputRef.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.inputRef.blur();
  }

  onClick() {
    this.inputRef.focus();
  }

  getInputRef(ref) {
    this.inputRef = ref;
  }

  focus() {
    this.inputRef.focus();
  }

  render() {
    const {
      name, title, hint, onChange, value, option,
    } = this.props;
    return (
      <List selectable ripple>
        {title && <ListSubHeader caption={title} />}
        <ListItem
          onClick={this.onClick}
          itemContent={
            <form style={{ width: '100%' }} onSubmit={this.onSubmit}>
              <Input
                hint={hint}
                value={value}
                onChange={v => onChange(name, v)}
                {...option}
                innerRef={this.getInputRef}
              />
            </form>
          }
        />
      </List>
    );
  }
}

ListInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  hint: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  option: PropTypes.object,
};

ListInput.defaultProps = {
  title: null,
  option: {},
  label: null,
};

export default ListInput;
