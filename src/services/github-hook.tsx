import { useContext } from "react";
import { GithubContext } from "./github-provider";

const useGithub = () => {
  const { 
    githubState, 
    getUser, 
    getUserRepos, 
    getUserStarred 
  }: any = useContext(GithubContext);

  return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;