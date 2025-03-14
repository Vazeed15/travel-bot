import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChatLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default ChatLayout; 