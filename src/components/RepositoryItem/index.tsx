import { 
  WrapperFullName, 
  WrapperLink, 
  WrapperRepositoryItem, 
  WrapperTitle 
} from "./styled";

type RepositoryItemProps =  {
  name: string, 
  linkToRepo: string, 
  fullName: string 
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ name, linkToRepo, fullName }) => {
  return (
    <WrapperRepositoryItem>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>full name:</WrapperFullName>
      <WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </WrapperLink>
    </WrapperRepositoryItem>
  );
};

export default RepositoryItem;