import styled from "styled-components";

function App() {
  return (
    <AppWrap>
      <NavBar>
        <NavCont>
          <Icon>
            <img src="" alt="" />
          </Icon>
          <Content>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Add Member</a>
            </li>
            <li>
              <a href="#">Log Out</a>
            </li>
          </Content>
        </NavCont>
      </NavBar>
      <MainContent></MainContent>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  background: #ac6464;
`;

const NavBar = styled.nav`
  height: 65px;
  background: #ca9e9e;
`;

const NavCont = styled.div``;

const Icon = styled.div``;

const Content = styled.ul``;

const MainContent = styled.div`
  margin-left: 5rem;
`;
export default App;
