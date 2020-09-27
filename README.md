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

## Demo page

[Here](https://circle-divided-by-chord.netlify.app/) the demo page.

![demo](https://user-images.githubusercontent.com/44204353/94367340-5bee0f80-00de-11eb-9a1e-e8096bf21661.gif)

## Examples

```tsx
import React from "react"
import CircleDividedByChord from "circle-divided-by-chord"

const Example = () => {
  return <CircleDividedByChord />
}
```

![example1](https://user-images.githubusercontent.com/44204353/64919110-5fe71200-d7a7-11e9-870c-4378fec77039.png)

---

```tsx
import React from "react"
import CircleDividedByChord from "circle-divided-by-chord"

const Example = () => {
  return (
    <CircleDividedByChord
      radius={150}
      datum1={50}
      datum2={50}
      angle={0}
      color1="#FF6663"
      color2="#0B3954"
    />
  )
}
```

![example2](https://user-images.githubusercontent.com/44204353/94367513-84c2d480-00df-11eb-9a1a-eb5182a49f73.png)

---

```tsx
import React from "react"
import CircleDividedByChord from "circle-divided-by-chord"

const Example = () => {
  return (
    <CircleDividedByChord
      radius={150}
      datum1={70}
      datum2={30}
      angle={0}
      color1="#525174"
      color2="#5DD39E"
    />
  )
}
```

![example3](https://user-images.githubusercontent.com/44204353/94367662-74f7c000-00e0-11eb-827e-8f5e08f49374.png)

## License

[MIT](https://github.com/ilariaventurini/circle-divided-by-chord/blob/master/LICENSE) © [Ilaria Venturini](https://github.com/ilariaventurini)

---

This project was bootstrapped with [urca generator](https://github.com/ilariaventurini/urca/).
