import useGithub from "../../services/github-hook";
import { 
  WrapperImage, 
  WrapperInfoUser, 
  WrapperProfile, 
  WrapperStatusCount, 
  WrapperUserGeneric 
} from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <WrapperProfile>
      <WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </WrapperUserGeneric>
          <WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span> {githubState.user.followers}</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span> {githubState.user.following}</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span> {githubState.user.public_gists}</span>
            </div>
            <div>
              <h4>Repos</h4>
              <span> {githubState.user.public_repos}</span>
            </div>
          </WrapperStatusCount>
        </div>
      </WrapperInfoUser>
    </WrapperProfile>
  );
};

export default Profile;