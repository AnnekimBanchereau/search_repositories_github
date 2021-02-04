import React from 'react';
import PropTypes from 'prop-types';
import { Message as MessageBox } from 'semantic-ui-react';

const Message = ({ message, error }) => (
  <MessageBox negative={error}>
    <p>{message}</p>
  </MessageBox>
);

Message.propTypes = {
  message: PropTypes.string,
  error: PropTypes.bool,
};

Message.defaultProps = {
  message: '',
  error: false,
};
export default Message;
