import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';
import Avatar from 'react-toolbox/lib/avatar/Avatar';

class Confirm extends React.Component {
  render() {
    const {
      name,
      attend,
      invitation,
      invitor,
      relation,
      email,
      address,
      people,
      vegetable,
      memo,
      onSubmit,
      jumpToName,
      jumpToChild,
      jumpToEmail,
    } = this.props;
    return (
      <Card>
        <CardTitle title="Summary" />
        <CardText>
          <div>
            <Chip>
              <Avatar icon="face" />
              {name && <span>{name}</span>}
              {!name && <span style={{ color: 'red' }} onClick={jumpToName}>請輸入姓名</span>}
            </Chip>
          </div>
          {attend === 'YES' &&
            <div>
              <Chip>
                <Avatar icon="people" />
                {relation && <span>{invitor} ({relation})</span>}
                {!relation && <span style={{ color: 'red' }} onClick={jumpToChild}>{invitor} (請輸入關係)</span>}
              </Chip>
            </div>
          }
          {attend === 'YES' &&
            <div>
              <Chip>
                <Avatar icon="email" />
                {invitation === 'NO' && <span>不寄喜帖</span>}
                {
                  invitation === 'YES' && (!email && !address) &&
                  <span style={{ color: 'red' }} onClick={jumpToEmail}>寄送喜帖 (請輸入郵寄地址或email)</span>
                }
                {
                  invitation === 'YES' && (!!email || !!address) &&
                  <span>寄送喜帖</span>
                }
              </Chip>
            </div>
          }
          {attend === 'YES' &&
            <div>
              <Chip>
                <Avatar icon="restaurant_menu" />
                <span>總共{people}人，素食{vegetable}人</span>
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
          <Button disabled={!name} label="送出" primary raised style={{ width: '100%' }} onClick={onSubmit} />
        </CardActions>
      </Card>
    );
  }
}

Confirm.propTypes = {
  name: PropTypes.string.isRequired,
  attend: PropTypes.string.isRequired,
  invitation: PropTypes.string.isRequired,
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  memo: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  jumpToName: PropTypes.func.isRequired,
  jumpToChild: PropTypes.func.isRequired,
  jumpToEmail: PropTypes.func.isRequired,
};

export default Confirm;
