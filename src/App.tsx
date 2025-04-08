import "./App.css";
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import DrawerWrapper from "./componentsInternal/DrawerWrapper";
import { Landing } from "./componentsInternal/Landing";
import ChallengeDetails from "./componentsInternal/ChallengeDetails";
import Implementation from "./componentsInternal/Implementation";
import Explanation from "./componentsInternal/Explanation";
import BenchmarkCard from "./componentsInternal/Benchmarks";
import executeNPromise from "./components/jsQuestion/promises/executeNPromise";

function App() {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    if (!landingRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrollable(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(landingRef.current);

    return () => {
      if (landingRef.current) observer.unobserve(landingRef.current);
    };
  }, []);

  return (
    <Grid scrollSnapType="y mandatory">
      <Grid ref={landingRef} scrollSnapAlign="start" minHeight="100vh">
        <Landing />
      </Grid>
      <DrawerWrapper>
        <Box
          bg="bg"
          color="text"
          p={8}
          transition="background-color 0.2s, color 0.2s"
        >
          <ChallengeDetails
            description={executeNPromise.description}
            requirements={executeNPromise.requirements}
            title={executeNPromise.title}
          />
          {/* <SolutionPreview /> */}
          <Implementation question={executeNPromise} />
          {executeNPromise.explanation?.length ? (
            <Explanation explanationList={executeNPromise.explanation} />
          ) : null}
          {executeNPromise.benchmarks &&
          Object.keys(executeNPromise.benchmarks)?.length ? (
            <BenchmarkCard data={executeNPromise.benchmarks} />
          ) : null}
        </Box>
      </DrawerWrapper>
    </Grid>
  );
}

export default App;
