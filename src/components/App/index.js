import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

import SearchBar from 'src/components/SearchBar';
import Header from 'src/components/Header';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import MoreResultButton from 'src/components/MoreResultButton';
import Loader from 'src/components/Loader';
import './styles.scss';

const App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Veuillez saisir une recherche');
  const [hasError, setHasError] = useState(false);

  const BASEURL = 'https://api.github.com/search/repositories?q=';

  const parseData = (dataRepositories) => dataRepositories.map((repository) => (
    {
      id: repository.id,
      name: repository.name,
      login: repository.owner.login,
      description: repository.description ? repository.description : 'No description',
      avatar_url: repository.owner.avatar_url,
      html_url: repository.html_url,
    }
  ));

  const resetState = () => {
    setRepositories([]);
    setPageNumber(1);
  };

  const fetchDatas = async () => {
    try {
      resetState();
      setLoading(true);
      setMessage('Veuillez patienter');
      const response = await axios.get(`${BASEURL}${inputSearch}&sort=stars&order=desc&page=1&per_page=9`);
      const newRepositories = parseData(response.data.items);
      setRepositories(newRepositories);
      setTotalResults(response.data.total_count);
      setMessage(`La recherche a donné ${response.data.total_count} résultat${response.data.total_count > 1 ? 's' : ''}`);
      setPageNumber(pageNumber + 1);
    }
    catch (error) {
      setMessage('Une erreur s\'est produite');
      setMessage(error.message);
      setHasError(true);
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  const loadMoreRepos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASEURL}${inputSearch}&sort=stars&order=desc&page=${pageNumber}&per_page=9`);
      const newRepositories = parseData(response.data.items);
      setRepositories([...repositories, ...newRepositories]);
      setPageNumber(pageNumber + 1);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <Container className="app">
      <Header />
      <SearchBar
        loading={loading}
        inputSearch={inputSearch}
        onInputChange={setInputSearch}
        onSubmit={fetchDatas}
        onError={(errorMessage) => {
          setMessage(errorMessage);
          setHasError(true);
        }}
      />
      <Message message={message} error={hasError} />
      {
        loading && <Loader />
      }
      {
        repositories.length > 0 && <ReposResults repositories={repositories} />
      }
      {
        totalResults > 9
        && pageNumber * 9 < totalResults
        && <MoreResultButton onClick={loadMoreRepos} loading={loading} />
      }
    </Container>
  );
};

export default App;
