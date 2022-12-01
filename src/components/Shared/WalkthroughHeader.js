import { useNavigate } from "react-router-dom";

const WalkthroughHeader = (props) => {
  const navigate = useNavigate();

  return (
    <div className="wt-header">
      <div className="mobile-spacer"></div>
      <div className="wt-header-top">
        <div className="back-arrow-div" onClick={props.onClick}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 31 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 16C31 14.8954 30.1046 14 29 14H6.66L16.42 4.24001C17.2034 3.45657 17.2012 2.18568 16.415 1.40502V1.40502C15.6327 0.628246 14.3695 0.630478 13.59 1.41001L0.714284 14.2857C-0.23249 15.2325 -0.232488 16.7675 0.714286 17.7143L13.5894 30.5894C14.3684 31.3684 15.6316 31.3684 16.4106 30.5894V30.5894C17.1892 29.8108 17.1898 28.5486 16.4119 27.7694L6.66 18H29C30.1046 18 31 17.1046 31 16V16Z"
              fill="#1B93C5"
            />
          </svg>
        </div>
        <div className="middle">Registration</div>
        <div className="x-div" onClick={() => navigate("/dashboard")}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.690209 30.6804C-0.212135 31.5828 -0.255104 33.1941 0.711693 34.1394C1.65701 35.0847 3.26833 35.0633 4.17068 34.1609L17.3191 20.991L30.489 34.1609C31.4129 35.0847 33.0027 35.0847 33.948 34.1394C34.8718 33.1726 34.8933 31.6043 33.948 30.6804L20.7996 17.5105L33.948 4.36208C34.8933 3.43826 34.8933 1.84841 33.948 0.903099C32.9812 -0.0207288 31.4129 -0.0422132 30.489 0.881615L17.3191 14.0515L4.17068 0.881615C3.26833 -0.0207288 1.63552 -0.0636976 0.711693 0.903099C-0.233619 1.84841 -0.212135 3.45974 0.690209 4.36208L13.8601 17.5105L0.690209 30.6804Z"
              fill="#1B93C5"
            />
          </svg>
        </div>
      </div>
      <div className="wt-header-bottom">
        <div className="progress-bar-track">
          <div
            className="progress-bar"
            style={{ width: `${props.progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WalkthroughHeader;
