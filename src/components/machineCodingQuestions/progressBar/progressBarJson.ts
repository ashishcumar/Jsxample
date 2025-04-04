export const progressBarJson = {
  "React TSX": {
    code: {
      "ProgressBar.tsx": `
import React, { useEffect, useState, useRef } from "react";

interface IProps {
  progress: number;
  incrementSize: number;
  intervalDuration: number;
  controls?: boolean;
}

const ProgressBar = (props: IProps) => {
  const {
    progress = 100,
    incrementSize = 1,
    intervalDuration = 20,
    controls = false,
  } = props;
  const [currentProgress, setCurrentProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [pause, setPause] = useState<boolean>(false);

  const resetProgress = () => {
    setCurrentProgress(0)
  }

  useEffect(() => {
    if (currentProgress < 0) {
      setCurrentProgress(0);
      return;
    }
    if ((!controls) || (controls && pause)) {
      intervalRef.current = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev < progress) {
            return prev + incrementSize;
          } else {
            clearInterval(intervalRef.current as number);
            intervalRef.current = null;
            return prev;
          }
        });
      }, intervalDuration);
    } else if (controls && !pause) {
      clearInterval(intervalRef.current as number);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [progress,pause]);

  return (
    <div
      style={{
        border: "1px solid red",
        display: "grid",
        placeContent: "center",
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
            width: \`\${currentProgress}%\`,
            background: "red",
            transition: "width 0.2s linear",
          }}
        ></div>
      </div>
      {controls ? (
        <button
          style={{
            margin: "24px auto",
            width: "fit-content",
            border: "1px solid white",
            padding: "4px 16px",
            borderRadius: "12px",
          }}
          onClick={()=>setPause(!pause)}
        >
          {pause ? "Stop" : "Start"}
        </button>
      ) : null}
    </div>
  );
};

export default ProgressBar;

`,
    },
  },
  "React JSX": {
    code: {
      "ProgressBar.jsx": `
import React, { useEffect, useState, useRef } from "react";

const Progress = () => {
  const [prog, setProg] = useState(0);
  const progress = 50;
  const intervalRef = useRef(null);
  const [pause,setPause] = useState()

  useEffect(() => {
    if(progress){
      intervalRef.current = setInterval(()=>{
        setProg((prev) => {
          if(prev < progress){
            return prev + 1
          }else{
            clearInterval(intervalRef.current)
            intervalRef.current = null;
            return prev
          }
        })
      },20)
    }

    return ()=>{
      if(intervalRef.current){
        clearInterval(intervalRef.current)
      }
    }
  },[progress])

  return (
    <div
      style={{
        height: "40px",
        width: "250px",
        border: "1px solid black",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: \`\${prog}%\`,
          background: "red",
          transition: "width 0.2s linear",
        }}
      ></div>
    </div>
  );
};

export default Progress;
      `,
    },
  },
  
};
