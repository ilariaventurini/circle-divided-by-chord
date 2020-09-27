import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import CircleDividedByChord from '../dist/CircleDividedByChord'
import 'tachyons'
import 'tachyons-extra'
import { randomColor, randomNumber } from './utils'

const maxRadius = 150

const App = () => {
  const [color1, setColor1] = useState('#8DC0B1')
  const [color2, setColor2] = useState('#F3E0D2')
  const [datum1, setDatum1] = useState(20)
  const [datum2, setDatum2] = useState(80)
  const [radius, setRadius] = useState(maxRadius)
  const [angle, setAngle] = useState(135)

  const colors = [color1, color2]

  return (
    <div className="w-100 h-100 flex flex-column flex-center">
      <div className="flex flex-column items-center" style={{ width: 300 }}>
        {/* legend */}
        <div className="flex mb2">
          {[datum1, datum2].map((datum, i) => (
            <div className="w3 flex items-center mr2" key={i}>
              <div className="w1 h1 mr2 br-100" style={{ backgroundColor: colors[i] }} />
              <div>{`${datum}%`}</div>
            </div>
          ))}
        </div>

        {/* circle */}
        <div
          className="-circle flex flex-center"
          style={{ width: 2 * maxRadius, height: 2 * maxRadius }}
        >
          <CircleDividedByChord
            color1={color1}
            color2={color2}
            radius={radius}
            datum1={datum1}
            datum2={datum2}
            angle={angle}
          />
        </div>

        {/* props */}
        <code className="f7 mt2" style={{ backgroundColor: '#f3f3f3' }}>{`
          <CircleDividedByChord 
            color2="${color1}"
            color2="${color2}"
            radius={${radius}}
            datum1={${datum1}}
            datum2={${datum2}}
            angle={${angle}}
          />`}</code>
      </div>

      <div
        className="button br1 pa2 mt3 flex flex-center pointer user-select-none w3"
        onClick={() => {
          const datum1 = randomNumber(0, 100)
          const datum2 = 100 - datum1
          setDatum1(datum1)
          setDatum2(datum2)
          setColor1(randomColor())
          setColor2(randomColor())
          setRadius(randomNumber(20, maxRadius))
          setAngle(randomNumber(0, 360))
        }}
      >
        Again!
      </div>
    </div>
  )
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('app'))
}
renderApp()
