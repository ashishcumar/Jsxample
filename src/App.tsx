import "./App.css";
import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import DrawerWrapper from "./componentsInternal/DrawerWrapper";
import { Landing } from "./componentsInternal/Landing";
import ChallengeDetails from "./componentsInternal/ChallengeDetails";
import Implementation from "./componentsInternal/Implementation";
import Explanation from "./componentsInternal/Explanation";
import BenchmarkCard from "./componentsInternal/Benchmarks";
import useSwrMutationHook from "./componentsInternal/useSwrHook";
import { IQuestions } from "./components/helper/commonInterface";

function App() {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [questionData, setQuestionData] = useState<IQuestions | null>(null);
  const { triggerFetch, data, error, isLoading } = useSwrMutationHook();

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

  console.log("data in app -->", { questionData });

  return (
    <Grid scrollSnapType="y mandatory">
      <Grid ref={landingRef} scrollSnapAlign="start" minHeight="100vh">
        <Landing />
      </Grid>
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
          <Box p={8}>
            <VStack spacing={6} align="stretch">
              <Skeleton height="40px" width="70%" />

              <VStack spacing={4} align="stretch">
                <Skeleton height="20px" width="100%" />
                <Skeleton height="20px" width="90%" />
                <Skeleton height="20px" width="85%" />
                <Skeleton height="20px" width="95%" />
              </VStack>

              <VStack spacing={3} align="stretch" mt={4}>
                <Skeleton height="20px" width="60%" />
                <Skeleton height="16px" width="100%" />
                <Skeleton height="16px" width="95%" />
                <Skeleton height="16px" width="90%" />
              </VStack>

              <Skeleton height="300px" mt={6} borderRadius="md" />

              <VStack spacing={3} align="stretch" mt={6}>
                <Skeleton height="20px" width="50%" />
                <Skeleton height="16px" width="100%" />
                <Skeleton height="16px" width="95%" />
              </VStack>

              <Skeleton height="150px" mt={6} borderRadius="md" />
            </VStack>
          </Box>
        )}
      </DrawerWrapper>
    </Grid>
  );
}

export default App;
