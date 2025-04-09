import "./App.css";
import { Box, Grid} from "@chakra-ui/react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Landing } from "./componentsInternal/Landing";
import useSwrMutationHook from "./componentsInternal/useSwrHook";
import { IQuestions } from "./components/helper/commonInterface";
import DrawerSkeleton from "./componentsInternal/DrawerSkeleton";

const DrawerWrapper = lazy(() => import("./componentsInternal/DrawerWrapper"));
const ChallengeDetails = lazy(
  () => import("./componentsInternal/ChallengeDetails")
);
const Implementation = lazy(
  () => import("./componentsInternal/Implementation")
);
const Explanation = lazy(() => import("./componentsInternal/Explanation"));
const BenchmarkCard = lazy(() => import("./componentsInternal/Benchmarks"));

function App() {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [questionData, setQuestionData] = useState<IQuestions | null>(null);
  const { triggerFetch } = useSwrMutationHook();

  useEffect(() => {
    if (selectedPath?.length) {
      triggerFetch(
        `https://raw.githubusercontent.com/ashishcumar/Jsxample/dev/public${selectedPath}.json`
      ).then((res) => {
        if (res != undefined) {
          setQuestionData(res);
        }
      });
    }
  }, [selectedPath]);

  return (
    <Grid scrollSnapType="y mandatory">
      <Grid ref={landingRef} scrollSnapAlign="start" minHeight="100vh">
        <Landing />
      </Grid>
      <Suspense fallback={<DrawerSkeleton />}>
        <DrawerWrapper setSelectedPath={setSelectedPath}>
          {questionData !== null ? (
            <Box
              bg="bg"
              color="text"
              p={8}
              transition="background-color 0.2s, color 0.2s"
            >
              <ChallengeDetails
                description={questionData.description}
                requirements={questionData.requirements}
                title={questionData.title}
              />
              {/* <SolutionPreview /> */}
              <Implementation question={questionData} />
              {questionData.explanation?.length ? (
                <Explanation explanationList={questionData.explanation} />
              ) : null}
              {questionData?.benchmarks &&
              Object.keys(questionData.benchmarks)?.length ? (
                <BenchmarkCard data={questionData.benchmarks} />
              ) : null}
            </Box>
          ) : (
            <DrawerSkeleton />
          )}
        </DrawerWrapper>
      </Suspense>
    </Grid>
  );
}

export default App;
