import  { useState } from "react";

interface IProps {
  progress: number;
  incrementSize: number;
  intervalDuration: number;
  controls?: boolean;
}

const ProgressBar = (props: IProps) => {
  const {
    progress = 100,
    controls = false,
  } = props;
  const [currentProgress, setCurrentProgress] = useState(0);

  const [start, setStart] = useState<boolean>(false);

  const handleControls = () => {
    if (currentProgress === progress) {
      setCurrentProgress(0);
      setStart(false);
    } else {
      setStart(!start);
    }
  };


  return (
    <div
      style={{
        border: "1px solid red",
        display: "grid",
        placeContent: "center",
        background:'white'
      }}
    >
      <div
        style={{
          height: "40px",
          width: "250px",
          border: "1px solid black",
          borderRadius: "24px",
          overflow: "hidden",
          background: "white",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${currentProgress}%`,
            background: "red",
            transition: "width 0.2s linear",
          }}
        ></div>
      </div>
      {controls ? (
        <button
          // style={{
          //   margin: "24px auto",
          //   width: "fit-content",
          //   border: "1px solid white",
          //   padding: "4px 16px",
          //   borderRadius: "12px",
          // }}
          onClick={handleControls}
        >
          {currentProgress == progress ? "Reset" : start ? "Stop" : "Start"}
        </button>
      ) : null}
    </div>
  );
};

export default ProgressBar;
