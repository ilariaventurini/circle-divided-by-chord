import React from 'react'
import { computeCircularSegments } from 'divide-up-circle-in-circular-segments'

export type Props = {
  color1?: string
  color2?: string
  radius?: number
  datum1?: number
  datum2?: number
  angle?: number
}

export default function CircleDividedByChord(props: Props) {
  const {
    color1 = '#8DC0B1',
    color2 = '#F3E0D2',
    radius = 200,
    datum1 = 20,
    datum2 = 80,
    angle = 135,
  } = props
  const dataset = [datum1, datum2].map((datum) => ({ percentage: datum / 100 }))
  const center = { x: radius, y: radius }
  const circularSegments = computeCircularSegments(dataset, radius, center)
  const size = 2 * radius

  return (
    <svg width={size} height={size} transform={`rotate(${angle})`}>
      <path d={circularSegments[0].path} fill={color1} />
      <path d={circularSegments[1].path} fill={color2} />
    </svg>
  )
}
