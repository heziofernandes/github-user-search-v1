import React from 'react';
import { render, screen } from '@testing-library/react';
import mockUser from './fixture/mockUser';
import mockRepo from './fixture/mockRepo';

import { User } from './User';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useParams: () => ({
    username: 'testUser',
  }),
}));

const returnMock = (key: string) => {
  const Obj: any = {
    'users/testUser': { data: mockUser },
    'users/testUser/repos': { data: mockRepo },
  };
  return Obj[key];
};

jest.mock('../../hooks/useFetch', () => ({
  useFetch: (url: string) => {
    return returnMock(url);
  },
}));

describe('User Component', () => {
  it('should be rendered flawlessly', () => {
    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });

  it('should be rendered username succefully', () => {
    const { getByTestId } = render(<User />);
    const usernameElement = screen.getByTestId('username');
    expect(usernameElement).toBeInTheDocument();
    expect(getByTestId).toMatchSnapshot();
    expect(usernameElement.innerHTML).toEqual(mockUser.name);
  });

  it('should be rendered repository name succefully', () => {
    render(<User />);
    mockRepo.forEach((item, index) => {
      const repoNameElement = screen.getByTestId(`reponame-${item.id}`);
      expect(repoNameElement.innerHTML).toEqual(mockRepo[index].full_name);
    });
  });
});
