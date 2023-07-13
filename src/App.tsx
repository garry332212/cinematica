import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <HomeWrapper>
        <Home />
      </HomeWrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;

const HeaderWrapper = styled.div`
  padding-bottom: 4rem; 
`;

const HomeWrapper = styled.div``;

export default App;
