import { ReactNode } from 'react';
import GithubProvider from './services/github-provider';

const Providers: React.FC<{ children : ReactNode }> = ({ children }) =>  (
  <GithubProvider>
    { children }
  </GithubProvider>
)

export default Providers;
