import FixtureDataGenerator from "@components/FixtureDataGenerator";
import { RelicList } from "@components/RelicList";
import { CircularProgress, Container } from "@mui/material";
import { NextPage } from "next";
import { Suspense } from "react";
import { SWRConfig } from "swr";

const App: NextPage = () => {
  return (
    <SWRConfig value={{ suspense: true }}>
      <Container maxWidth={"lg"}>
        <Suspense fallback={<CircularProgress />}>
          <RelicList />
        </Suspense>
        <FixtureDataGenerator />
      </Container>
    </SWRConfig>
  );
};

export default App;
