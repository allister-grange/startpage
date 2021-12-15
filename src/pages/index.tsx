import { Box, Button, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { CartesianGrid, XAxis, YAxis, Legend, Bar, BarChart } from "recharts";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
import { NiwaUvGraph } from "../components/NiwaUvGraph";
import styles from "../styles/Home.module.css";
import { TransformedNiwaData } from "../types/niwa";

const Home: NextPage = () => {
  // todo make a hook
  const [niwaData, setNiwaData] = useState<undefined | TransformedNiwaData[]>();

  const getNiwaData = async () => {
    try {
      const res = await fetch(process.env.API_URL + "/api/niwaUV");
      const data = (await res.json()) as TransformedNiwaData[];

      setNiwaData(data);
    }
    catch(err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <ColorModeSwitcher />
      {/* <Center height="100vh" display={"flex"} flexDir="column"> */}
        <Box>
          <Heading>First push</Heading>
        </Box>
        <Box>
          <Button onClick={getNiwaData}>Get my data biotch</Button>
        </Box>
        <Grid>
          <GridItem bg="orange" borderRadius="15" w="550px" mt="10" py="5">
            <Heading fontSize="2xl" ml="10" mb="4">UV Wellington</Heading>
            <NiwaUvGraph niwaData={niwaData} />
          </GridItem>
        </Grid>
      {/* </Center> */}
    </div>
  );
};

export default Home;
