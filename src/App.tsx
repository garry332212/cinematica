import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import NowPlaying from "./components/pages/NowPlaying";
import { Route, Routes } from "react-router-dom";
import Popular from "./components/pages/Popular";
import ThisWeek from "./components/pages/ThisWeek";
import TvShows from "./components/pages/TvShows";

function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <HomeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="now_playing" element={<NowPlaying />} />
          <Route path="popular" element={<Popular />} />
          <Route path="this_week" element={<ThisWeek />} />
          <Route path="tv_shows" element={<TvShows />} />
        </Routes>

        
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
