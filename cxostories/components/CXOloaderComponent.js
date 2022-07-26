// import React from "react";
import logo from "../images/logo.png";
// const CXOloaderComponent = () => {
//   return (
//     <img
//       style={{
//         height: 15,
//         width: 100,
//         objectFit: "contain",
//         transform: "scale(3.5)",
//       }}
//       alt="CXOstories logo"
//       src={logo}
//     />
//   );
// };
// export default CXOloaderComponent;
import PropTypes from "prop-types";
import React from "react";

const AppLoadingScreenStyles = `
.sanity-app-loading-screen {
  font-family: Poppins;
  text-align: center;
  background-color: white;
  color: #1C2430;
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.sanity-app-loading-screen__inner {
  margin: auto;
}
.sanity-app-loading-screen__text {
  margin-top: 2rem;
  font-size: 13px;
  font-weight: 600;
}
.sanity-app-loading-screen__loader {
  display: block;
  animation: pulse var(--time) cubic-bezier(.11,0,.27,1) infinite;
  --time: 3s;
}
@keyframes pulse {
  from {
    transform: scale3d(0.75, 0.75, 0.75);
  }
  50% {
    transform: scale3d(1, 1, 1);
  }
  to {
    transform: scale3d(0.75, 0.75, 0.75);
  }
}
`;

const AppLoaderStyles = `
  .fillShape {
    stroke-width: 40;
    stroke: #F03E2F;
    opacity: 0;
  }
  .fillShape--bottom {
    stroke-dasharray: 90;
    stroke-dashoffset: 85;
    animation: bottom var(--time) ease-in infinite;
  }
  .fillShape--middle {
    stroke-dasharray: 115;
    stroke-dashoffset: 110;
    animation: middle var(--time) linear infinite;
  }
  .fillShape--top {
    stroke-dasharray: 77;
    stroke-dashoffset: 72;
    animation: top var(--time) ease-out infinite;
  }
  @keyframes bottom {
    0%,
    85% {
      stroke-dashoffset: 265;
      opacity: 0;
    }
    15%,
    64% {
      stroke-dashoffset: 175;
      opacity: 0.5;
    }
  }
  @keyframes middle {
    11%,
    75% {
      stroke-dashoffset: 100;
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    25%,
    63% {
      stroke-dashoffset: 225;
      opacity: 1;
    }
  }
  @keyframes top {
    22%,
    70% {
      opacity: 0;
      stroke-dashoffset: 226;
    }
    25% {
      opacity: 0.5;
    }
    35%,
    54% {
      stroke-dashoffset: 149;
      opacity: 0.5;
    }
  }
`;

export default class AppLoadingScreen extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: "Loading Cxostory Studio",
  };

  render() {
    // console.log(this.props)
    return (
      <div className="sanity-app-loading-screen">
        <style type="text/css">{AppLoadingScreenStyles}</style>
        <div className="sanity-app-loading-screen__inner">
          <div className="sanity-app-loading-screen__loader">
            <img
              style={{
                height: "6rem",
                objectFit: "contain",
              }}
              alt="CXOstories logo"
              src={logo}
            />
          </div>
          <div className="sanity-app-loading-screen__text">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}
