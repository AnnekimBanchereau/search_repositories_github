import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Input } from 'semantic-ui-react';

const SearchBar = ({
  inputSearch, onInputChange, onSubmit, loading, onError,
}) => {
  const inputRef = React.createRef();
  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputSearch.length < 1) {
      onError('Veuillez entrer au moins un caractère');
    }
    else {
      onSubmit();
    }
  };

  return (
    <Segment>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field>
          <Input
            ref={inputRef}
            loading={loading}
            icon="search"
            iconPosition="left"
            placeholder="Recherche repos GitHub..."
            value={inputSearch}
            onChange={handleInputChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  inputSearch: PropTypes.string,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  onError: PropTypes.func,
};

SearchBar.defaultProps = {
  inputSearch: '',
  onInputChange: () => {},
  onSubmit: () => {},
  loading: false,
  onError: () => {},
};
export default SearchBar;
