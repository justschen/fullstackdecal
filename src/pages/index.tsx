import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import WeekCard from '../components/WeekCard';
import schedule from '../data/schedule';
import { Container, Box, Flex, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Container maxW="container.lg" pt={10} pb={16}>
        <Text textStyle="title" mb={0}>
          CS 198-099: Introduction to Full Stack Development
        </Text>
        <Text textStyle="subtitle2" mb={6}>
          Spring 2022
        </Text>
        <Text textStyle="body" mb={4}>
          Welcome to{' '}
          <a href="https://webatberkeley.org/">Web Development at Berkeley</a>
          &apos;s Introduction to Full Stack Development! In this course, we
          cover the basics of web development, how the internet works, and the
          frameworks, technologies, and best practices that are used in the
          industry today. No prior CS experience is required to participate and
          succeed in this course, but we do acknowledge that we cover a fairly
          large amount of material and that this course can feel like a lot,
          even for those with past CS experience.
        </Text>
        <Box layerStyle="aside" mb={8}>
          <Text textStyle="body">
            💡 The materials in this course have been made available to the
            public in pursuit of reaching, educating, and supporting as many
            people as we can.
          </Text>
        </Box>
        <Text textStyle="title2" color="purple" mb={4}>
          Announcements
        </Text>
        <Box mb={16}>
          <Text textStyle="subtitle2" fontSize="3xl" mb={2}>
            Week 0
          </Text>
          <Text textStyle="body">
            Welcome to the Introduction to Full Stack Development DeCal!
          </Text>
        </Box>
        <Text textStyle="title2" color="purple" mb={8}>
          Course Overview
        </Text>
        <Flex direction="column" gap={7}>
          <>
            {Array(12)
              .fill(0)
              .map((_, index) => {
                const weekLessons = schedule.filter(
                  (lesson) => lesson.week === index
                );

                return (
                  <WeekCard
                    weekNumber={index}
                    lessons={weekLessons}
                    key={index}
                  />
                );
              })}
          </>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
