import React from 'react'
import styled from 'styled-components'

import TimePicker from './index'

const TestingPage = styled.div`
  height: 50vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding-top: calc(100% - 185vh);
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  position: relative;
  height: 60%;
  width: 80%;
  padding: 20px;
  background-color: ${props => props.color};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  transition: background-color 800ms linear;
`

const Increaser = styled.a`
  top: 20px;
  left: 20px;
  position: absolute;
  font-family: 'Dancing Script', cursive;
  color: white;
  font-size: 34px;
  cursor: pointer;
  text-decoration: none;
`

const TimeWaitsForNoOne = styled.a`
  margin: 40px;
  color: black;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
`

const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const COLORS = [
    '#000000'
//   '#2ECC40',
//   '#7FDBFF',
//   '#001f3f',
//   '#0074D9',
//   '#3D9970',
//   '#FF851B',
//   '#FF4136',
//   '#85144b',
//   '#B10DC9',
//   '#AAAAAA'
]

const getRandomColor = colors =>
  colors[Math.floor(Math.random() * colors.length)]

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: getRandomColor(COLORS),
      duration: 25
    }
  }

  render() {
    const { color, duration } = this.state
    return (
      <TestingPage>
        {/* <Container color={color}> */}
          <TimePicker
            duration={duration}
            wrapper={ContainerWrapper}
            onStart={this.updateColor}
            onDurationChange={duration => this.setState({ duration })}
          />
        {/* </Container> */}
      </TestingPage>
    )
  }

  updateColor = () => {
    const chooseFrom = COLORS.filter(c => c !== this.state.color)
    const color = getRandomColor(chooseFrom)
    this.setState({ color })
  }
}
