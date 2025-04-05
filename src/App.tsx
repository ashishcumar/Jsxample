import "./App.css";
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import DrawerWrapper from "./componentsInternal/DrawerWrapper";
import { Landing } from "./componentsInternal/Landing";
import ChallengeDetails from "./componentsInternal/ChallengeDetails";
import SolutionPreview from "./componentsInternal/SolutionPreview";
import Implementation from "./componentsInternal/Implementation";

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

      <DrawerWrapper isScrollable={isScrollable}>
        <Box
          bg="bg"
          color="text"
          height="100vh"
          p={8}
          transition="background-color 0.2s, color 0.2s"
          scrollSnapAlign="start"
          minHeight="100vh"
          overflow={isScrollable ? "scroll" : "hidden"}
        >
          <ChallengeDetails />
          <SolutionPreview />
          <Implementation  />
        </Box>
      </DrawerWrapper>
    </Grid>
  );
}

export default App;
