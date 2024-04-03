import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './home.module.scss';

export const Home = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const navigateToUserPage = () => navigate(`/user/${username}`);

  return (
    <div className={styles.container} data-testid="home-container">
      <h1 className={styles.title}>Search for a user</h1>
      <div className={styles.content}>
        <Input
          customStyle={styles.input}
          type="text"
          name="username"
          placeholder="Type a github username"
          value={username}
          autoCapitalize="none"
          onChange={handleUsernameChange}
          data-testid="username-input"
        />
        <Button
          customStyle={styles.button}
          title="search"
          isDisabled={username.length <= 3}
          onClick={navigateToUserPage}
          data-testid="search-button"
        />
      </div>
    </div>
  );
};
