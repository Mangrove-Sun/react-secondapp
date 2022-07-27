import React, { Component } from 'react';

class Comp extends Component {
  constructor(props) {
    super(props) // super(), 이 안에서 this를 쓸 수 있도록 하겠다.
    this.countUp = this.countUp.bind(this) // bind를 해줘야만 해당 메소드 안에서 this를 쓸 수 있다.
    this.state = {
      num: 0
    }
  }

  // state = {
  //   num: 0, // const [num, setNum] = useState(0)
  //   name: 'Sun'
  // }

  countUp() { // 화살표 함수를 쓰지 않는 것이 전통적인 class형 문법
    this.setState({
      num: this.state.num + 1 // 위에 작성한 state 안의 num 값을 갖고 오게 됨
    })
  }

  render() { // render() 를 붙여줘야만 렌더가 됨
    return (
      <div>
        <h1>{this.state.num}</h1>
        <h3>{this.state.name}</h3>
        <button onClick={this.countUp}>카운트 업!</button>
      </div>
    );
  }
}

export default Comp;
