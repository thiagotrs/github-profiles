import Layout from "./components/Layout";
import NoSearch from "./components/NoSearch";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./services/github-hook";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;