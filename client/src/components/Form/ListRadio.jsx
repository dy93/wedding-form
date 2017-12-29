import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from 'react-toolbox/lib/radio/RadioGroup';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListRadioItemContent from './ListRadioItemContent';

class ListRadio extends React.Component {
  render() {
    const {
      items,
      title,
      name,
      selectValue,
      onChange,
    } = this.props;
    return (
      <List selectable ripple>
        <ListSubHeader caption={title} />
        <RadioGroup name={name} value={selectValue} onChange={v => onChange(name, v)}>
          {
            items.map((entry) => {
              const { value } = entry;
              return (
                <ListItem
                  htmlFor={name}
                  key={value}
                  onClick={() => onChange(name, value)}
                  itemContent={
                    <ListRadioItemContent
                      {...entry}
                      selectValue={selectValue}
                      name={name}
                      onChange={onChange}
                    />
                  }
                />
              );
            })
          }
        </RadioGroup>
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
};

export default ListRadio;
