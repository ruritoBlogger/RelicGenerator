import FixtureDataGenerator from "@components/FixtureDataGenerator";
import { RelicList } from "@components/RelicList";
import { useQuery } from "@hooks/useQuery";
import { Container } from "@mui/material";
import { NextPage } from "next";

const App: NextPage = () => {
  const { relicList, error } = useQuery();

  if (relicList === undefined || error !== undefined) {
    return <p>errored!!!</p>;
  }

  return (
    <Container maxWidth={"lg"}>
      <RelicList relicList={relicList} />
      <FixtureDataGenerator />
    </Container>
  );
};

export default App;
