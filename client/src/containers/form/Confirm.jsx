import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';
import Avatar from 'react-toolbox/lib/avatar/Avatar';

const RELATION = {
  work: '同事',
  wuling: '交大武友會',
  college: '大學/研究所同學',
  senior: '高中同學',
  junior: '國中同學',
  else: '其它',
};

class Confirm extends React.Component {
  render() {
    const {
      name,
      attend,
      invitor,
      relation,
      relation_else,
      email,
      address,
      people,
      vegetable,
      memo,
      onSubmit,
    } = this.props;
    return (
      <Card>
        <CardTitle title="確認送出" />
        <CardText>
          <Chip>
            <Avatar icon="face" style={{ backgroundColor: name ? '' : 'red' }} />
            {name && <span>{name}</span>}
            {!name && <span style={{ color: 'red' }}>請輸入姓名</span>}
          </Chip>
          {attend === 'YES' &&
            <Chip>
              <Avatar icon="people" />
              {invitor === 'dy93' && <span>從慶的朋友 ({relation !== 'else' ? RELATION[relation] : (relation_else || '其它')})</span>}
              {invitor === 'ueewbd' && <span>雪汾的朋友 ({relation !== 'else' ? RELATION[relation] : (relation_else || '其它')})</span>}
            </Chip>
          }
          {attend === 'YES' &&
            <Chip>
              <Avatar icon="email" />
              <span>
                {
                  [email, address].filter(e => !(!e)).length === 0 ?
                    '不寄喜帖' :
                    `喜帖寄送至 ${[email, address].filter(e => !(!e)).join(' / ')}`
                }
              </span>
            </Chip>
          }
          {attend === 'YES' &&
            <Chip>
              <Avatar icon="restaurant_menu" />
              <span>總共{people}人，素食{vegetable}人</span>
            </Chip>
          }
          <Chip>
            <Avatar icon="chat" />
            <span>{memo}</span>
          </Chip>
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
  invitor: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  relation_else: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  vegetable: PropTypes.number.isRequired,
  memo: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Confirm;