import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ReposCard from './ReposCard';
import './styles.scss';

const ReposResults = ({ repositories }) => (
  <Card.Group className="repositories" stackable doubling itemsPerRow={3}>
    {
      repositories.map((repository) => <ReposCard key={repository.id} repository={repository} />)
    }
  </Card.Group>
);

ReposResults.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

ReposResults.defaultProps = {
  repositories: [],
};
export default ReposResults;
