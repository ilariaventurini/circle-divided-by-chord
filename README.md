# Circle divided by chord

> Circle divided by chord.

[![NPM](https://img.shields.io/npm/v/circle-divided-by-chord.svg)](https://www.npmjs.com/package/circle-divided-by-chord) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save circle-divided-by-chord
```

or

```bash
yarn add circle-divided-by-chord
```

## Usage

# Basic example

```tsx
import * as React from "react";
import CircleDividedByChord from "circle-divided-by-chord";

class Example extends React.Component {
  render() {
    return <CircleDividedByChord />;
  }
}
```

![Example 1](https://user-images.githubusercontent.com/44204353/64919110-5fe71200-d7a7-11e9-870c-4378fec77039.png)

# Another example

```tsx
import * as React from "react";
import CircleDividedByChord from "circle-divided-by-chord";
import { random, range } from "lodash";

function getRandomColor() {
  return `hsl(${parseInt(256 * Math.random())}, 70%, 85%, 1)`;
}

class Example extends React.Component {
  render() {
    return (
      <div className="pa2">
        {range(56).map(i => {
          const datum1 = random(0, 100, true);
          const datum2 = random(0, 100, true);
          const angle = random(0, 360, true);
          const color1 = getRandomColor();
          const color2 = getRandomColor();

          return (
            <CircleDividedByChord
              key={i}
              radius={30}
              datum1={datum1}
              datum2={datum2}
              angle={angle}
              color1={color1}
              color2={color2}
            />
          );
        })}
      </div>
    );
  }
}
```

![Example 2](https://user-images.githubusercontent.com/44204353/64919209-5f02b000-d7a8-11e9-9e41-db13b67fe7d5.png)

### Props

Props are all optional:

| Prop name |   Type   | Default value | What is                     |
| --------- | :------: | ------------: | --------------------------- |
| `color1`  | `string` |     `#8DC0B1` | color of the first section  |
| `color2`  | `string` |     `#F3E0D2` | color of the second section |
| `radius`  | `number` |         `200` | radius of the circle (px)   |
| `datum1`  | `number` |          `20` | first datum                 |
| `datum2`  | `number` |          `80` | second datum                |
| `angle`   | `number` |         `135` | angle of the chord          |

## License

MIT © [ilariaventurini](https://github.com/ilariaventurini)
