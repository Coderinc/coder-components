import { injectGlobal } from 'styled-components';
import Button from './elements/Button';
import ArrowButton from './elements/ArrowButton';
import DarkThemeProvider from './elements/DarkThemeProvider';
import LightThemeProvider from './elements/LightThemeProvider';
import H1 from './elements/H1';
import H2 from './elements/H2';
import H3 from './elements/H3';
import H4 from './elements/H4';
import Paragraph from './elements/Paragraph';
import Wrapper from './elements/Wrapper';
import Container from './elements/Container';
import Avatar from './elements/Avatar';
import Chip from './elements/Chip';
import IconChip from './elements/IconChip';
import ProgressBar from './elements/ProgressBar';
import Tile from './elements/Tile';
import TextInput from './elements/TextInput';
import Tooltip from './elements/Tooltip';

import AnimatedNumber from './components/AnimatedNumber';
import RangeSlider from './components/RangeSlider';
import Slider from './components/Slider';
import PhaseBar from './components/PhaseBar';
import RequirementBar from './components/RequirementBar';
import { SingleSelect, MultiSelect } from './components/Select';
import Comment from './components/Comment';

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: circular;
    font-weight: normal;
    font-style: normal;
    src: url('https://assets.builtbycoder.com/assets/circular-medium.otf');
  }

  @font-face {
    font-family: circular;
    font-weight: normal;
    font-style: italic;
    src: url('https://assets.builtbycoder.com/assets/circular-medium-italic.otf');
  }

  @font-face {
    font-family: circular;
    font-weight: lighter;
    font-style: normal;
    src: url('https://assets.builtbycoder.com/assets/circular-book.otf');
  }

  @font-face {
    font-family: circular;
    font-weight: lighter;
    font-style: italic;
    src: url('https://assets.builtbycoder.com/assets/circular-book-italic.otf');
  }

  @font-face {
    font-family: circular;
    font-weight: bold;
    font-style: normal;
    src: url('https://assets.builtbycoder.com/assets/circular-bold.otf');
  }

  @font-face {
    font-family: circular;
    font-weight: bold;
    font-style: italic;
    src: url('https://assets.builtbycoder.com/assets/circular-bold-italic.otf');
  }

  @font-face {
    font-family: coder-icons;
    font-weight: normal;
    src: url('https://assets.builtbycoder.com/assets/coder-icons.ttf');
  }
`;

module.exports = {
  ArrowButton,
  TextInput,
  SingleSelect,
  Avatar,
  ProgressBar,
  PhaseBar,
  RequirementBar,
  Chip,
  LightThemeProvider,
  DarkThemeProvider,
  Button,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Wrapper,
  Container,
  AnimatedNumber,
  IconChip,
  Tile,
  Slider,
  RangeSlider,
  MultiSelect,
  Tooltip,
  Comment,
};
