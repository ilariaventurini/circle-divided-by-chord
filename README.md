<div align="center" style="text-align: center">
  <h1>Circle divided by chord</h1>
  <p>Divide a circle into two circular segments whose area is proportional to the data</p>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/circle-divided-by-chord">
    <img alt="npm"
      src="https://img.shields.io/npm/v/circle-divided-by-chord.svg">
  </a>
</p>

---

This React component allows you to divide a circle into two circular segments whose area is proportional to the data received in input.\
Take a look to [divide-up-circle-in-circular-segments](https://github.com/ilariaventurini/divide-up-circle-in-circular-segments) for more information.

## Install

```bash
npm install --save circle-divided-by-chord
```

or

```bash
yarn add circle-divided-by-chord
```

## Screenshots

![image](https://user-images.githubusercontent.com/44204353/93715819-f47b1180-fb6b-11ea-90e3-9e0f352db837.png)

## API

Props are all optional:

| Prop      |   Type   | Default value | Description                 |
| --------- | :------: | ------------: | --------------------------- |
| `color1`  | `string` |     `#8DC0B1` | color of the first section  |
| `color2`  | `string` |     `#F3E0D2` | color of the second section |
| `radius`  | `number` |         `200` | radius of the circle (px)   |
| `datum1`  | `number` |          `20` | first datum in `[0-100]`    |
| `datum2`  | `number` |          `80` | second datum in `[0-100]`   |
| `angle`   | `number` |         `135` | rotation angle (degree)     |

## Examples

### Basic example

```tsx
import React from "react"
import CircleDividedByChord from "circle-divided-by-chord"

class Example extends React.Component {
  render() {
    return <CircleDividedByChord />
  }
}
```

![Example 1](https://user-images.githubusercontent.com/44204353/64919110-5fe71200-d7a7-11e9-870c-4378fec77039.png)

### Another example

```tsx
import React from "react"
import CircleDividedByChord from "circle-divided-by-chord"
import { random, range } from "lodash"

function getRandomColor() {
  return `hsl(${parseInt(256 * Math.random())}, 70%, 85%, 1)`
}

class Example extends React.Component {
  render() {
    return (
      range(56).map(i =>
        <CircleDividedByChord
          key={i}
          radius={30}
          datum1={random(0, 100, true)}
          datum2={random(0, 100, true)}
          angle={random(0, 360, true)}
          color1={getRandomColor()}
          color2={getRandomColor()}
        />
      )
    )
  }
}
```

![Example 2](https://user-images.githubusercontent.com/44204353/64919209-5f02b000-d7a8-11e9-9e41-db13b67fe7d5.png)

## License

[MIT](https://github.com/ilariaventurini/circle-divided-by-chord/blob/master/LICENSE) © [Ilaria Venturini](https://github.com/ilariaventurini)

---

This project was bootstrapped with [urca generator](https://github.com/ilariaventurini/urca/).
