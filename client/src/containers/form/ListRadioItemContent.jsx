import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';
import Input from 'react-toolbox/lib/input/Input';

class ListRadioItemContent extends React.Component {
  render() {
    const {
      caption, value, selectValue, name, input, onChange,
    } = this.props;
    const key = `${name}_${value}`;
    return (
      <div>
        <RadioButton
          label={caption}
          value={value}
          checked={selectValue === value}
          onFocus={() => { this[key] && this[key].focus(); }}
        />
        {
          input && selectValue === value &&
          <form onSubmit={(e) => { e.preventDefault(); this[key] && this[key].blur(); }}>
            <Input
              autoFocus
              label={input.label}
              hint={input.hint}
              value={input.value}
              onChange={v => onChange(key, v)}
              innerRef={(r) => {
                if (r) {
                  this[key] = r;
                }
              }}
            />
          </form>
        }
      </div>
    );
  }
}

ListRadioItemContent.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  input: PropTypes.shape({
    hint: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

ListRadioItemContent.defaultProps = {
  input: null,
};

export default ListRadioItemContent;
