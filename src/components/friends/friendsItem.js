import PropTypes from 'prop-types';
import css from 'components/friends/friends.module.css';

const FriendsItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsItem;
