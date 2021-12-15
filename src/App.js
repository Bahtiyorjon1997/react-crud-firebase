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
  background: #ebeef1;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  height: 65px;
  background: #2b2cb8;
  right: 5rem;
  left: 5rem;
`;

const NavCont = styled.div`
  margin: 5px 5rem;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  box-sizing: border-box;

  img {
    max-height: 45px;
  }
`;

const Content = styled.ul`
  font-family: "Poppins" sans-serif;
  list-style: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  max-width: 500px;

  li > a {
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.165em !important;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 0 19px;
    display: inline-block;
  }
`;

const MainContent = styled.div`
  margin-left: 5rem;
`;
export default App;
