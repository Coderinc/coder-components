'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  @font-face {\n    font-family: circular;\n    font-weight: normal;\n    font-style: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-medium.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: normal;\n    font-style: italic;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-medium-italic.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: lighter;\n    font-style: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-book.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: lighter;\n    font-style: italic;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-book-italic.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: bold;\n    font-style: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-bold.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: bold;\n    font-style: italic;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-bold-italic.otf\');\n  }\n\n  @font-face {\n    font-family: coder-icons;\n    font-weight: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/coder-icons.ttf\');\n  }\n'], ['\n  @font-face {\n    font-family: circular;\n    font-weight: normal;\n    font-style: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-medium.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: normal;\n    font-style: italic;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-medium-italic.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: lighter;\n    font-style: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-book.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: lighter;\n    font-style: italic;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-book-italic.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: bold;\n    font-style: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-bold.otf\');\n  }\n\n  @font-face {\n    font-family: circular;\n    font-weight: bold;\n    font-style: italic;\n    src: url(\'https://assets.builtbycoder.com/assets/circular-bold-italic.otf\');\n  }\n\n  @font-face {\n    font-family: coder-icons;\n    font-weight: normal;\n    src: url(\'https://assets.builtbycoder.com/assets/coder-icons.ttf\');\n  }\n']);

var _styledComponents = require('styled-components');

var _Button = require('./elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ArrowButton = require('./elements/ArrowButton');

var _ArrowButton2 = _interopRequireDefault(_ArrowButton);

var _DarkThemeProvider = require('./elements/DarkThemeProvider');

var _DarkThemeProvider2 = _interopRequireDefault(_DarkThemeProvider);

var _LightThemeProvider = require('./elements/LightThemeProvider');

var _LightThemeProvider2 = _interopRequireDefault(_LightThemeProvider);

var _H = require('./elements/H1');

var _H2 = _interopRequireDefault(_H);

var _H3 = require('./elements/H2');

var _H4 = _interopRequireDefault(_H3);

var _H5 = require('./elements/H3');

var _H6 = _interopRequireDefault(_H5);

var _H7 = require('./elements/H4');

var _H8 = _interopRequireDefault(_H7);

var _Paragraph = require('./elements/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Wrapper = require('./elements/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Container = require('./elements/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Avatar = require('./elements/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chip = require('./elements/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _IconChip = require('./elements/IconChip');

var _IconChip2 = _interopRequireDefault(_IconChip);

var _ProgressBar = require('./elements/ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _Tile = require('./elements/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _TextInput = require('./elements/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Tooltip = require('./elements/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _AnimatedNumber = require('./components/AnimatedNumber');

var _AnimatedNumber2 = _interopRequireDefault(_AnimatedNumber);

var _RangeSlider = require('./components/RangeSlider');

var _RangeSlider2 = _interopRequireDefault(_RangeSlider);

var _Slider = require('./components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _PhaseBar = require('./components/PhaseBar');

var _PhaseBar2 = _interopRequireDefault(_PhaseBar);

var _RequirementBar = require('./components/RequirementBar');

var _RequirementBar2 = _interopRequireDefault(_RequirementBar);

var _Select = require('./components/Select');

var _Comment = require('./components/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// eslint-disable-next-line
(0, _styledComponents.injectGlobal)(_templateObject);

module.exports = {
  ArrowButton: _ArrowButton2.default,
  TextInput: _TextInput2.default,
  SingleSelect: _Select.SingleSelect,
  Avatar: _Avatar2.default,
  ProgressBar: _ProgressBar2.default,
  PhaseBar: _PhaseBar2.default,
  RequirementBar: _RequirementBar2.default,
  Chip: _Chip2.default,
  LightThemeProvider: _LightThemeProvider2.default,
  DarkThemeProvider: _DarkThemeProvider2.default,
  Button: _Button2.default,
  H1: _H2.default,
  H2: _H4.default,
  H3: _H6.default,
  H4: _H8.default,
  Paragraph: _Paragraph2.default,
  Wrapper: _Wrapper2.default,
  Container: _Container2.default,
  AnimatedNumber: _AnimatedNumber2.default,
  IconChip: _IconChip2.default,
  Tile: _Tile2.default,
  Slider: _Slider2.default,
  RangeSlider: _RangeSlider2.default,
  MultiSelect: _Select.MultiSelect,
  Tooltip: _Tooltip2.default,
  Comment: _Comment2.default
};