import "./App.css";
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import DrawerWrapper from "./componentsInternal/DrawerWrapper";
import { Landing } from "./componentsInternal/Landing";
import ChallengeDetails from "./componentsInternal/ChallengeDetails";
import Implementation from "./componentsInternal/Implementation";
import Explanation from "./componentsInternal/Explanation";
import BenchmarkCard from "./componentsInternal/Benchmarks";
import arrayFlatteningJson from "../public/jsQuestions/arrayFlatteningJson";

function App() {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  return (
    <Grid scrollSnapType="y mandatory">
      <Grid ref={landingRef} scrollSnapAlign="start" minHeight="100vh">
        <Landing />
      </Grid>
      <DrawerWrapper setSelectedPath={setSelectedPath} >
        <Box
          bg="bg"
          color="text"
          p={8}
          transition="background-color 0.2s, color 0.2s"
        >
          <ChallengeDetails
            description={arrayFlatteningJson.description}
            requirements={arrayFlatteningJson.requirements}
            title={arrayFlatteningJson.title}
          />
          {/* <SolutionPreview /> */}
          <Implementation question={arrayFlatteningJson} />
          {arrayFlatteningJson.explanation?.length ? (
            <Explanation explanationList={arrayFlatteningJson.explanation} />
          ) : null}
          {arrayFlatteningJson.benchmarks &&
          Object.keys(arrayFlatteningJson.benchmarks)?.length ? (
            <BenchmarkCard data={arrayFlatteningJson.benchmarks} />
          ) : null}
        </Box>
      </DrawerWrapper>
    </Grid>
  );
}

export default App;
