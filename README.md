# react-component-tailwindcss
![Version](https://img.shields.io/badge/version-0.0.3-blue.svg) 
![License](https://img.shields.io/badge/license-MIT-green.svg)

Welcome to **react-component-tailwindcss**. This library provides a collection of reusable and customizable React components designed to help you build applications faster and with greater consistency.

## Features

- **Reusable Components**: Build your UI using components that can be easily reused across your application.
- **Customizable**: Each component comes with a set of props for customization.
- **Tailwind CSS Support**: Style components using Tailwind CSS for a modern and responsive design.
- **Storybook Integration**: Explore and test components in isolation with Storybook. 
- Checkout **[Storybook](https://victorious-mushroom-03215740f.5.azurestaticapps.net/?path=/docs/components-button--docs)** to see all components

## Installation

To install the library, you can use npm or yarn:

```bash
npm install react-component-tailwindcss
```

## Usage
Here’s a quick example of how to use a component from the library:
```css
/* In main css(scss) file */
@import "react-component-tailwindcss/dist/index.css"
```
```tsx
// Inside your component.
import React from 'react';
import { Button } from 'react-component-tailwindcss';

const App = () => {
  return (
    <div>
      <Button>Click</Button>
    </div>
  );
};
export default App;
```

## Documentation
For more detailed documentation on how to use each component, visit the **[Storybook](https://victorious-mushroom-03215740f.5.azurestaticapps.net/?path=/docs/components-button--docs)** where you can see live examples and customizable props.

## License
This project is licensed under the MIT License

## Author
Jehyun Jung <br>
[Github](https://github.com/congmul) | [Linkedin](https://www.linkedin.com/in/jehyun-jung-bb247813b/)