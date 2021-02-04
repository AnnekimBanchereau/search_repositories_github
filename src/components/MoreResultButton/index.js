import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const MoreResultButton = ({ onClick, loading }) => (
  <div className="button">
    <Button loading={loading} disabled={loading} color="blue" onClick={onClick} content="Afficher plus" icon="add" labelPosition="right" />
  </div>
);

MoreResultButton.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

MoreResultButton.defaultProps = {
  onClick: () => {},
  loading: false,
};

export default MoreResultButton;
