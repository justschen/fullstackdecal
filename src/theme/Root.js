import React from 'react';
import textStyles from './textStyles';
import layerStyles from './layerStyles';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles,
  layerStyles,
  colors: {
    blue: '#3560A6',
    grey: '#C4C4C4',
    purple: '#474A90',
    pink: '#B573A8',
    purpleGradient:
      'linear-gradient(346.94deg, rgba(0, 0, 0, 0.25) 15.55%, rgba(0, 0, 0, 0) 102.03%), radial-gradient(33.77% 230.34% at -8.89% 117.01%, rgba(242, 201, 76, 0.25) 0%, rgba(242, 201, 76, 0) 100%), radial-gradient(154.44% 559.12% at 87.37% -25%, #3560A6 0%, #430081 95.83%)',
    orangeGradient:
      'radial-gradient(123.32% 841.17% at -13.46% 0%, #E4A400 0%, #E47373 100%)',
    blueGradient:
      'radial-gradient(170.21% 1161% at -19.63% -12.56%, #5FAFE7 0%, #3560A6 100%)',
    pinkGradient:
      'radial-gradient(170.21% 1161% at -19.63% -12.56%, #9B51E0 0%, #F2C94C 100%)',
  },
  components: {
    Box: {
      baseStyle: {
        borderWidth: 0,
        borderRadius: 0,
      },
    },
    AccordionButton: {
      baseStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        border: 'none',
        borderBottomColor: 'gray.200',
        borderTopColor: 'gray.200',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
      },
    },
  },
});

// eslint-disable-next-line react/prop-types
const Root = ({ children }) => {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default Root;
