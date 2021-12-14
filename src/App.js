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
            <li>Home</li>
            <li>Add Member</li>
            <li>Log Out</li>
          </Content>
        </NavCont>
      </NavBar>
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
export default App;
