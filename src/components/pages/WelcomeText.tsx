import styled, { keyframes } from "styled-components";
import { colors, fontFamily } from "../modules/themes";

const WelcomeText = () => {
  return (
    <WelcomeWrapper>
      <div className="ball-shadow">
        <h1>Welcom To <span>TSXpert</span></h1>
      </div>
    </WelcomeWrapper>
  );
};

export default WelcomeText;

const spinAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) translateX(-10%) translateY(-50%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) translateX(10%) translateY(-50%) rotate(160deg);
  }
  100% {
    transform: translate(-50%, -50%) translateX(-10%) translateY(-50%) rotate(360deg);
  }
`;

const WelcomeWrapper = styled.div`
  .ball-shadow {
    position: relative;
    top: 500px;
    left:1000px;
    font-size: 2rem;
    text-align: center;
    animation: ${spinAnimation} 10s linear infinite;
    animation-timing-function: ease-in-out;
    width: 40%;
    > h1 {
     font-family: ${fontFamily.shadowsIntoLight};
     >span{
      font-family: ${fontFamily.Acme};
      font-size: 5rem;
      color:${colors.primary}
     }
    }
  }
`;
