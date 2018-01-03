import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';
import Input from 'react-toolbox/lib/input/Input';

class RadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.getInputRef = this.getInputRef.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.ref && this.ref.blur();
  }
  onFocus() {
    this.ref && this.ref.focus();
  }
  getInputRef(ref) {
    this.ref = ref;
  }

  render() {
    const {
      caption, value, selectValue, name, input, onChange,
    } = this.props;
    return (
      <div>
        <RadioButton
          label={caption}
          value={value}
          checked={selectValue === value}
          onFocus={this.onFocus}
        />
        <form onSubmit={this.onSubmit}>
          <Input
            autoFocus
            label={input.label}
            hint={input.hint}
            value={input.value}
            onChange={v => onChange(name, v)}
            innerRef={this.getInputRef}
          />
        </form>
      </div>
    );
  }
}

RadioInput.propTypes = {
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

RadioInput.defaultProps = {
  input: null,
};

export default RadioInput;
