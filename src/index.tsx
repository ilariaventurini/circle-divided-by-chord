import * as React from "react";

const ITERATIONS = 10;

function whatPercentIsAofB(a: number, b: number) {
  return (a / b) * 100;
}

function circularSegmentHeight(fractionArea: number, r: number) {
  let theta0;
  let theta1;
  // Newton's method
  theta1 = Math.pow(12 * fractionArea * Math.PI, 1 / 3);
  for (let i = 0; i < ITERATIONS; ++i) {
    theta0 = theta1;
    theta1 =
      (Math.sin(theta0) -
        theta0 * Math.cos(theta0) +
        2 * fractionArea * Math.PI) /
      (1 - Math.cos(theta0));
    theta1 = isNaN(theta1) ? 0 : theta1;
  }
  fractionArea = (1 - Math.cos(theta1 / 2)) / 2;
  const h = 2 * r * fractionArea; // height of fractionArea
  const d = r - h; // height of other area
  return { d: d, h: h };
}

export type Props = {
  color1?: string;
  color2?: string;
  radius?: number;
  datum1?: number;
  datum2?: number;
  angle?: number;
};

export default class CircleDividedByChord extends React.Component<Props> {
  render() {
    const {
      color1 = "#8DC0B1",
      color2 = "#F3E0D2",
      radius = 200,
      datum1 = 20,
      datum2 = 80,
      angle = 135
    } = this.props;

    const size = 2 * radius;
    const total = datum1 + datum2;
    const percentOfDatum1 = whatPercentIsAofB(datum1, total) / 100;
    const { d: datum1h, h: datum2h } = circularSegmentHeight(
      percentOfDatum1,
      radius
    );
    const randomNumber = window.performance.now();

    return (
      <>
        <svg width={size} height={size}>
          <defs>
            <clipPath id={`clip${randomNumber}`}>
              <rect x={0} y={radius + datum1h} width={size} height={datum2h} />
            </clipPath>
          </defs>

          <g transform={`rotate(${angle}, ${radius}, ${radius})`}>
            <circle
              cx={radius}
              cy={radius}
              fill={color2}
              r={radius}
              opacity={1}
            />
            <circle
              cx={radius}
              cy={radius}
              fill={color1}
              r={radius}
              opacity={1}
              clipPath={`url(#clip${randomNumber})`}
            />
          </g>
        </svg>
      </>
    );
  }
}
