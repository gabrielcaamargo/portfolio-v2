import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultColorSet from '../../assets/styles/default';

import LinkTabs from '../LinkTabs';
import AboutMe from '../AboutMe';
import Presentation from '../Presentation';

export default function App() {
  return (
    <ThemeProvider theme={defaultColorSet}>
      <GlobalStyles />
      <LinkTabs />
      <Presentation />
      <AboutMe />
    </ThemeProvider>
  );
}
