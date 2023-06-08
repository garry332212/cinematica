import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <AppWrapper>
      <div className="header">
        <Header />
      </div>
      <Home />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  .header {
    margin-bottom: 10rem;
  }
`;
