import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Validator from '../../lib/validator';


function Invitation({
  needInvitation, address, email, jumpToAddress, jumpToEmail,
}) {
  if (needInvitation === 'NO') {
    return (
      <div>
        <Chip>
          <Avatar icon="email" /><span>不寄喜帖</span>
        </Chip>
      </div>
    );
  }

  let span = null;
  if (!email && !address) {
    span = <span style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} onClick={jumpToAddress}>寄送喜帖 (請輸入郵寄地址或email)</span>;
  } else if (!Validator.validateEmail(email)) {
    span = <span style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} onClick={jumpToEmail}>寄送喜帖 (請輸入郵寄地址或email)</span>;
  } else {
    span = <span>寄送喜帖</span>;
  }

  return (
    <div>
      <Chip>
        <Avatar icon="email" />
        {span}
      </Chip>
    </div>
  );
}

Invitation.propTypes = {
  needInvitation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  jumpToAddress: PropTypes.func.isRequired,
  jumpToEmail: PropTypes.func.isRequired,
};

class Confirm extends React.Component {
  render() {
    const {
      name,
      attend,
      invitor,
      relation,
      people,
      vegetable,
      babySeats,
      memo,
      needInvitation,
      email,
      address,
      onSubmit,
      jumpToName,
      jumpToCustomRelation,
      isExpire,
    } = this.props;
    const disabledSubmit = isExpire || !name || (needInvitation === 'YES' && !email && !address) || (needInvitation === 'YES' && !Validator.validateEmail(email));
    return (
      <Card>
        <CardTitle title="Summary" />
        <CardText>
          <div>
            <Chip>
              <Avatar icon="face" />
              {name && <span>{name}</span>}
              {!name && <span style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} onClick={jumpToName}>請輸入姓名</span>}
            </Chip>
          </div>
          {attend === 'YES' &&
            <div>
              <Chip>
                <Avatar icon="people" />
                {relation && <span>{invitor} ({relation})</span>}
                {!relation && <span style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} onClick={jumpToCustomRelation}>{invitor} (請輸入關係)</span>}
              </Chip>
            </div>
          }
          {
            <Invitation {...this.props} />
          }
          {attend === 'YES' &&
            <div>
              <Chip>
                <Avatar icon="restaurant_menu" />
                <span>總共{people}人，素食{vegetable}人</span>
              </Chip>
            </div>
          }
          {attend === 'YES' &&
            <div>
              <Chip>
                <Avatar icon="child_care" />
                <span>兒童座椅{babySeats}張</span>
              </Chip>
            </div>
          }
          <div>
            <Chip>
              <Avatar icon="chat" />
              <span>{memo}</span>
            </Chip>
          </div>
        </CardText>
        <CardActions>
          <Button disabled={disabledSubmit} label="送出" primary raised style={{ width: '100%' }} onClick={onSubmit} />
        </CardActions>
      </Card>
    );
  }
}

Confirm.propTypes = {
  name: PropTypes.string.isRequired,
  attend: PropTypes.string.isRequired,
  needInvitation: PropTypes.string.isRequired,
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  babySeats: PropTypes.number.isRequired,
  memo: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  jumpToName: PropTypes.func.isRequired,
  jumpToCustomRelation: PropTypes.func.isRequired,
  jumpToAddress: PropTypes.func.isRequired,
  isExpire: PropTypes.bool.isRequired,
};

export default Confirm;
