import React from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import Input from 'react-toolbox/lib/input/Input';
import PropTypes from 'prop-types';

class ListInput extends React.Component {
  render() {
    const {
      name, title, hint, onChange, value, option,
    } = this.props;
    return (
      <List selectable ripple>
        {title && <ListSubHeader caption={title} />}
        <ListItem
          onClick={() => { this[name] && this[name].focus(); }}
          itemContent={
            <form style={{ width: '100%' }} onSubmit={(e) => { e.preventDefault(); this[name] && this[name].blur(); }}>
              <Input
                hint={hint}
                value={value}
                onChange={v => onChange(name, v)}
                {...option}
                innerRef={(r) => {
                  if (r) {
                    this[name] = r;
                  }
                }}
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
