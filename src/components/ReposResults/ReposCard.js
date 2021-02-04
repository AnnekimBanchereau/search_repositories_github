import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const ReposCard = ({ repository }) => (
  <Card href={repository.html_url}>
    <Image src={repository.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{repository.login}</Card.Header>
      <Card.Meta>
        <span>{repository.name}</span>
      </Card.Meta>
      <Card.Description>
        {repository.description}
      </Card.Description>
    </Card.Content>
  </Card>
);

ReposCard.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    description: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }),
};

ReposCard.defaultProps = {
  repository: {},
};

export default ReposCard;
