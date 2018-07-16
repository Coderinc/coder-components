# Coder-Components
###### Small library of repeatable components used on the Coder Platform

![alt-text](https://i.imgur.com/cBA5qhQ.png)

### Our Default Colors
```javascript
lightGray: '#8f908a',
mediumGray: '#333333',
darkGray: '#222222',
darkMediumGray: '#272727',
black: '#0a0a0a',
white: '#fefefe',
offWhite: '#f7f7f7',
mediumWhite: '#eeeeee',
pink: '#fb266c',
blue: '#60d5f0',
green: '#8ee80e',
yellow: '#fbec26',
red: '#ff4a4a',
teal: '#7bffbe',
purple: '#8943ff',
darkBlue: '#0075ff',
orange: '#ffa100',
```

### Component List
##### ThemeProviders
* DarkThemeProvider
  ```javascript
  props: {
    primary: 'pink',              // The primary color
  }
  ```
* LightThemeProvider
  ```javascript
  props                           // see DarkThemeProvider
  ```
##### Elements
* Avatar
  ```javascript
  props: {                        // Defaults to 1.5rem
    large: false,                 // Large? 2rem
    small: false,                 // Small? 1rem
    icon: '/path/to/img',
    label: 'Im displayed always',
    firstName: 'Joe',             // First and last name are displayed if
    lastName: 'Schmoe',           // the label is falsey
  }
  ```
* ArrowButton
  ```javascript
  props: {
    secondary: false,             // Secdonary button style?
    color: 'primary',             // Color of button
    disabled: false,
  }
  ```
* Button
  ```javascript
  props: {
    label: 'Click Me!',
    secondary: false,             // Secdonary button style?
    ternary: false,               // Third button style?
    color: 'primary',             // Color of button
    disabled: false,
  }
  ```
* Chip
  ```javascript
  props: {
    label: 'Phase',               // The text for the chip
  }
  ```
* Container
  ```javascript
  props: {                        // Defaults to 50rem
    small: false,                 // Small? 40rem 
    large: false,                 // Large? 75rem
    extraLarge: false,            // Extra Large? 100rem
  }
  ```
* H1
  ```javascript
  props: {
    light: false,                 // Do I bold this header?
  }
  ```
* H2
  ```javascript
  props                           // See H1
  ```
* H3
  ```javascript
  props                           // See H1
  ```
* H4
  ```javascript
  props                           // See H1
  ```
* IconChip
  ```javascript
  props: {
    label: 'Joe Schmoe',          // The text next to icon
    icon: '/path/to/img',     
  }
  ```
* Paragraph
  ```javascript
  props: {
    bold: false,                  // Do I bold this paragraph?
  }
  ```
* ProgressBar
  ```javascript
  props: {
    percent: 75,                  // Perent of progress to fill to 100
  }
  ```
* Tile
  ```javascript
  props: {
    active: false,                // Have I been clicked?
    onClick: v => doSomething(v),
    value: 1,                     // This value is passed into onClick
    icon: '/path/to/img',
    label: 'Joe Schmoe'           // Text for Tile
  }
  ```
* Wrapper
  ```javascript
  props: {
    scrollX: false,               // scroll on X?
    scrollY: false,               // scroll on Y?
  }
  ```
##### Components
* AnimatedNumber
  ```javascript
  props: {
    number: 100,                  // The number im going to
    duration: 250,                // Time in ms for animation
    noDecimal: false,             // Round?
    format: () => {}              // Format function applied to number before display
    component: React.Component    // What do I display with
  }
  ```
* PhaseBar
  ```javascript
  props: {
    label: 'Lorem Ipsum',         // What is displayed in the bar (requirement name)
    phase: 'Design',              // What phase is this for
  }
  ```
* RequirementBar
  ```javascript
  props: {
    label: 'Lorem Ipsum',         // Requirement Name
    phases: ['Design', 'Develop'],// Array of phases
  }
  ```
* RangeSlider
* Slider
* Comment
  ```javascript
  props: {
    user: user                    // The user who made the comment
    comment: 'Lorem ipsum',       // The text
    createdAt: '01:12:13',        // Standard datetime stuff
  }
  ```
* Select

  [React-Select](https://deploy-preview-2289--react-select.netlify.com/home)
  ```javascript
  props: {
    // See react-select
  }
  ```
### Usage
```bash
npm install coder-components
```

```javascript
import { Button } from 'coder-components';
// ...
import 'coder-components/styles/css/styles.css';
```
