import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import WeekCard from "../components/WeekCard";
import schedule from "../data/schedule";
import {
  VStack,
  Image,
  Container,
  Box,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import fullStackLogoPath from "@site/static/img/logo.png";
import { useColorMode } from "@docusaurus/theme-common";

const HomeContent: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        background={(colorMode == "light"
          ? [
              "radial-gradient(circle 40vw at 0px 700px, #dbc1ffa1, transparent)",
              "radial-gradient(circle 40vw at 50% 600px, #ffe2fbcf, transparent)",
              "radial-gradient(circle 40vw at 70% 800px, #7ad4d333, transparent)",
              "linear-gradient(transparent, 400px, transparent, 1000px, hsla(225.7, 59.23%, 69.34%, 0.12), #ffe2fbcf)",
            ]
          : [
              "radial-gradient(circle 40vw at 0px 700px, #4e169c78, transparent)",
              "radial-gradient(circle 40vw at 50% 600px, #46063d85, transparent)",
              "radial-gradient(circle 40vw at 70% 800px, #0020209c, transparent)",
              "linear-gradient(transparent, 400px, transparent, 1000px, hsla(225.7, 59.23%, 69.34%, 0.12), #ffe2fbcf)",
            ]
        ).join(", ")}
      >
        <Container maxW="container.md" my="6rem">
          <Text textStyle="subtitle2" color="blackAlpha.500">
            CS 198-99 | Spring 23
          </Text>
          <Text textStyle="title1">
            Introduction
            <br />
            to <Image src={fullStackLogoPath} height="1em" mr={4} mb={-4} />
            <span style={{ color: "#0FD3FF" }}>full-stack</span>
            <br />
            development
          </Text>
          <Text textStyle="subtitle2" color="blackAlpha.500">
            Wed and Fri, 5:00-6:30PM, HMMB 390
          </Text>
          <Link
            href="mailto:webdev-decal@lists.berkeley.edu"
            isExternal
            textStyle="subtitle2"
            color="blackAlpha.500"
          >
            webdev-decal@lists.berkeley.edu
          </Link>
        </Container>

        {schedule.weeks.map((week, index) => {
          return (
            <WeekCard weekNumber={index} schedule={schedule} key={index} />
          );
        })}
      </Box>
    </>
  );
};

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
      wrapperClassName="fullStackHero"
    >
      <HomeContent />
    </Layout>
  );
};

export default Home;
