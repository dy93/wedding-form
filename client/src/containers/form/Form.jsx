import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import Child from './Child';
import ListRadio from './ListRadio';
import ListInput from './ListInput';
import Confirm from './Confirm';

class Form extends React.Component {
  render() {
    const {
      name,
      attend,
      memo,
      onSubmit,
      onChange,
    } = this.props;
    return (
      <div>
        <Card>
          <CardTitle title="婚宴出席調查" />
          <CardText>
            <ListInput
              title="姓名"
              name="name"
              value={name}
              onChange={onChange}
              hint="請輸入姓名"
              option={{ maxLength: 100, required: true }}
            />
            <ListRadio
              name="attend"
              selectValue={attend}
              title="是否出席？"
              onChange={onChange}
              items={[
                { caption: 'YES', value: 'YES' },
                { caption: 'NO', value: 'NO' },
              ]}
            />
            {attend === 'YES' && <Child {...this.props} onChange={onChange} />}
            <ListInput
              title="想對從慶或雪汾說的話"
              name="memo"
              value={memo}
              onChange={onChange}
              hint="請輸入悄悄話"
              option={{ multiline: true, maxLength: 1000, rows: 5 }}
            />
          </CardText>
        </Card>
        <Confirm {...this.props} onSubmit={onSubmit} />
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  attend: PropTypes.string.isRequired,
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  relation_else: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  memo: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
