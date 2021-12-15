import styled from "styled-components";
import logo from "./images/logo.svg";

function App() {
  return (
    <AppWrap>
      <NavBar>
        <NavCont>
          <Icon>
            <img src={logo} alt="logo" />
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
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  height: 65px;
  background: #ca9e9e;
  display: wrap;
  align-items: center;

  right: 5rem;
  left: 5rem;
`;

const NavCont = styled.div`
  margin: 0 5rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const Icon = styled.div`
  box-sizing: border-box;

  img {
    max-height: 45px;
  }
`;

const Content = styled.ul``;

const MainContent = styled.div`
  margin-left: 5rem;
`;
export default App;
