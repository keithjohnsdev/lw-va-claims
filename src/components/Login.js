import { default as FooterButton, LoginButton } from "./Shared/Buttons";
import { Container3 } from "./Shared/Containers";
import WhiteRoundInput from "./Shared/Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <div className="logo-section">
        <div className="logo-div">
          <svg
            width="72"
            height="72"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="60" fill="white" />
            <path
              opacity="0.6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M101.629 47.6906C97.2372 44.6597 91.2372 45.7112 88.2063 50.103L77.196 66.1854L72.2476 59.072L60.2476 75.5257L68.2888 87.0308C68.9692 88.6391 70.0826 90.1236 71.6909 91.1751C73.361 92.3504 75.3403 92.9071 77.3197 92.9071C79.2372 92.9071 81.2785 92.4123 82.9486 91.1751C84.6187 90.0617 85.6702 88.5772 86.3506 86.9071L104.103 61.0514C107.134 56.7834 106.021 50.7215 101.629 47.6906Z"
              fill="#1B93C5"
            />
            <path
              opacity="0.6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.0505 66.4947L31.7927 50.103C28.7618 45.7112 22.7618 44.6597 18.3701 47.6906C13.9783 50.7215 12.9268 56.7215 15.9577 61.1133L34.9474 88.8246C36.8031 91.4844 39.7103 92.9071 42.6793 92.9689C42.7412 92.9689 42.8649 92.9689 42.9268 92.9689C42.9886 92.9689 43.1123 92.9689 43.1742 92.9689C46.1433 92.9071 49.1123 91.4844 50.9061 88.8246L60.1845 75.5875L48.6793 58.3916L43.0505 66.4947Z"
              fill="#1B93C5"
            />
            <path
              opacity="0.6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.2053 37.9174C55.1744 33.5257 49.1744 32.4741 44.7827 35.5051C40.3909 38.536 39.3394 44.536 42.3703 48.9277L48.7414 58.3916L60.927 41.7525L58.2053 37.9174Z"
              fill="#1B93C5"
            />
            <path
              opacity="0.6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.9477 35.5051C72.556 32.4741 66.556 33.5257 63.525 37.9174L60.8652 41.7525L72.2467 59.1339L72.6178 58.5772L79.3601 48.9277C82.391 44.536 81.3395 38.536 76.9477 35.5051Z"
              fill="#1B93C5"
            />
            <path
              opacity="0.9"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.6797 58.3921L60.2467 75.588L72.2467 59.1344L60.8653 41.7529L48.6797 58.3921Z"
              fill="#026792"
            />
          </svg>
        </div>
        <div className="logo-text">
          <svg
            width="163"
            height="27"
            viewBox="0 0 273 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.356 35.926H7.62701V4.95518C7.62701 3.03078 6.02604 1.52734 4.11719 1.52734H4.05561C2.08519 1.52734 0.668945 3.03078 0.668945 5.07545V39.4139C0.668945 41.0978 2.08519 42.5411 3.87089 42.5411H17.4176C19.1417 42.5411 20.6195 41.1579 20.6195 39.4139C20.4963 37.7301 19.1417 35.926 17.356 35.926Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.2415 12.292H31.5174C30.0396 12.292 28.8696 13.4346 28.8696 14.8779V39.8349C28.8696 41.2782 30.0396 42.4209 31.5174 42.4209H33.2415C34.7193 42.4209 35.8893 41.2782 35.8893 39.8349V14.8779C35.8893 13.4947 34.7193 12.292 33.2415 12.292Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.3191 1.16602C30.2871 1.16602 28.563 2.78973 28.563 4.8344V4.89454C28.563 6.87907 30.2255 8.56292 32.3191 8.56292C34.4127 8.56292 36.0752 6.93921 36.0752 4.89454V4.8344C36.0752 2.78973 34.4127 1.16602 32.3191 1.16602Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.3794 0.56543C53.5617 0.56543 44.7563 1.76818 44.7563 12.7132V40.4967C44.7563 41.5792 45.68 42.4211 46.7268 42.4211H49.744C50.8524 42.4211 51.7144 41.519 51.7144 40.4967V19.5087H57.3794C58.4877 19.5087 59.3498 18.6067 59.3498 17.5843V15.7802C59.3498 14.6977 58.4262 13.8558 57.3794 13.8558H51.7144V12.8936C51.7144 10.5482 52.5149 6.69945 58.0567 6.69945C59.1651 6.69945 60.0887 5.79739 60.0887 4.71491V3.33175C60.1503 1.82832 58.9188 0.56543 57.3794 0.56543Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.1015 9.40625C70.311 9.40625 63.4761 16.3822 63.4761 26.4251C63.4761 36.2877 70.8652 43.444 81.0867 43.444C86.5054 43.444 90.5078 41.2791 92.4167 39.9561C93.4635 39.2344 93.7714 37.9114 93.1556 36.8289L92.5398 35.8066C92.1088 35.0849 91.3083 34.6038 90.4463 34.6038C89.9537 34.6038 89.5226 34.7241 89.0916 34.9647C87.3675 36.0471 84.6581 37.31 81.4562 37.31C76.838 37.31 71.2962 34.7843 70.742 27.688H92.0472C93.3403 27.688 94.3871 26.7258 94.5103 25.4629C94.5103 25.1623 94.5718 24.8616 94.5718 24.6812C94.5718 15.3599 88.9069 9.40625 80.1015 9.40625ZM87.3176 22.217H71C71.9852 17.7668 75.3719 15.0005 79.9901 15.0005C83.2536 15.0005 86.9481 16.8647 87.3176 22.217Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M235.765 9.40625C225.974 9.40625 219.139 16.3822 219.139 26.4251C219.139 36.2877 226.528 43.444 236.75 43.444C242.169 43.444 246.171 41.2791 248.08 39.9561C249.127 39.2344 249.434 37.9114 248.819 36.8289L248.203 35.8066C247.772 35.0849 246.971 34.6038 246.109 34.6038C245.617 34.6038 245.186 34.7241 244.755 34.9647C243.031 36.0471 240.321 37.31 237.119 37.31C232.501 37.31 226.959 34.7843 226.405 27.688H247.71C249.003 27.688 250.05 26.7258 250.173 25.4629C250.173 25.1623 250.173 24.8616 250.173 24.6812C250.235 15.3599 244.57 9.40625 235.765 9.40625ZM235.641 15.0592C238.966 15.0592 242.661 16.9836 243.03 22.2757H226.713C227.636 17.8256 231.085 15.0592 235.641 15.0592Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M146.603 1.28711C144.941 1.28711 143.524 2.36958 143.155 3.93316L135.889 33.0998L128.377 4.83522C127.822 2.79055 125.914 1.34725 123.758 1.34725H123.143C120.741 1.34725 118.648 2.91082 118.094 5.19604L110.643 33.16L103.623 3.9933C103.254 2.42972 101.837 1.34725 100.175 1.34725C99.0666 1.34725 98.0814 1.82835 97.404 2.67027C96.7267 3.5122 96.4804 4.59467 96.7883 5.61701L105.409 38.5122C106.025 40.8576 108.18 42.4813 110.643 42.4813C112.921 42.4813 114.892 40.9778 115.446 38.873L123.389 9.22525L131.271 38.7527C131.886 40.9177 133.857 42.4813 136.197 42.4813C138.598 42.4813 140.692 40.9177 141.308 38.6325L150.174 5.67714C150.482 4.65481 150.236 3.57233 149.559 2.67027C148.697 1.76821 147.711 1.28711 146.603 1.28711Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M166.492 9.22461C161.196 9.22461 157.317 10.9686 155.531 11.9909C154.361 12.6524 153.992 14.0957 154.608 15.1782L155.223 16.2607C155.654 16.9823 156.455 17.4634 157.317 17.4634C157.748 17.4634 158.118 17.3432 158.487 17.1628C160.15 16.2607 162.736 15.1782 165.63 15.1782C170.125 15.1782 172.342 17.3432 172.342 21.7332V21.8535H171.356C158.118 21.8535 151.406 25.6421 151.406 33.1593C151.406 39.7744 157.132 43.2023 162.859 43.2023C168.462 43.2023 171.541 40.015 172.834 38.0906C172.834 38.3913 172.834 38.7521 172.834 39.0528V40.1353C172.834 41.4583 173.942 42.4806 175.236 42.4806H177.021C178.376 42.4806 179.423 41.3982 179.423 40.1353V22.094C179.423 14.7573 173.881 9.22461 166.492 9.22461ZM172.464 27.2664V27.8678C172.464 33.641 168.216 37.5499 164.213 37.5499C160.334 37.5499 158.548 35.1444 158.548 32.9194C158.548 27.928 165.814 27.3266 171.233 27.3266H172.464V27.2664Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M270.493 36.5277C268.092 36.5277 264.028 35.6256 264.028 29.7923V16.1411H269.2C270.678 16.1411 271.848 14.9985 271.848 13.5552V12.6531C271.848 11.4503 270.801 10.428 269.57 10.428H264.028V4.71494C264.028 2.85068 262.427 1.28711 260.518 1.28711C258.548 1.28711 256.947 2.85068 256.947 4.77508V30.5139C256.947 35.0844 258.609 42.7218 269.816 42.7218C270.124 42.7218 270.37 42.7218 270.617 42.7218C271.602 42.6617 272.402 41.8799 272.402 40.9177V38.3919C272.402 37.3696 271.54 36.5277 270.493 36.5277Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M212.858 36.2856C211.688 36.1653 210.518 35.5639 210.518 32.6172V3.87148C210.518 3.7512 210.518 3.63093 210.457 3.51065C209.964 2.24776 208.486 1.3457 207.008 1.3457C205.53 1.3457 204.114 2.24776 203.622 3.51065C203.56 3.63093 203.56 3.7512 203.56 3.87148V33.3388C203.56 39.4127 206.577 42.4797 212.489 42.4797C212.981 42.4797 213.412 42.4196 213.782 42.2392C215.075 41.8182 215.937 40.6756 215.937 39.3526C215.875 37.6687 214.582 36.3457 212.858 36.2856Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M196.479 36.2856C195.309 36.1653 194.139 35.5639 194.139 32.6172V3.87148C194.139 3.7512 194.139 3.63093 194.078 3.51065C193.585 2.24776 192.107 1.3457 190.629 1.3457C189.152 1.3457 187.735 2.24776 187.243 3.51065C187.181 3.63093 187.181 3.7512 187.181 3.87148V33.3388C187.181 39.4127 190.198 42.4797 196.11 42.4797C196.602 42.4797 197.033 42.4196 197.403 42.2392C198.696 41.8182 199.558 40.6756 199.558 39.3526C199.558 37.6687 198.203 36.3457 196.479 36.2856Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="create-account-section">
        <Container3>
          <h3 className="create-account-text">Login</h3>
          <div className="create-account-inputs">
            <form onSubmit={handleSubmit}>
              <WhiteRoundInput
                placeholder="Enter Email Address"
                onChange={handleEmailChange}
                type="email"
                value={email}
              />
              <WhiteRoundInput
                placeholder="Enter Password"
                onChange={handlePasswordChange}
                type="password"
                value={password}
              />
              <LoginButton
                type="submit"
                mod={email.length > 0 && password.length > 0 ? "green" : ""}
              >
                Login
              </LoginButton>
            </form>
          </div>
        </Container3>
      </div>
    </div>
  );
};

export default Login;
