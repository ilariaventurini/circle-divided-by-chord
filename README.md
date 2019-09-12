# circle-divided-by-chord

> Circle divided by chord.

[![NPM](https://img.shields.io/npm/v/circle-divided-by-chord.svg)](https://www.npmjs.com/package/circle-divided-by-chord) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save circle-divided-by-chord
```

## Usage

```tsx
import * as React from "react";
import CircleDividedByChord from "circle-divided-by-chord";

class Example extends React.Component {
  render() {
    return <CircleDividedByChord />;
  }
}
```

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
