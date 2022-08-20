import { Component } from 'react';

export default class List extends Component {
  state = {
    numbers: [1, 2, 3]
  };
  
  addRandomNumber = () => {
    const randNumber = Math.raound(Math.random() * 10);
    this.setState({
      numbers: [...this.state.numbers, randNumber]
    });
  };
  
  componentDidMount() {
    console.log('КОМПОНЕНТ БЫЛ ОТОБРАЖЕН');
  }
  
  render() {
     return (
       <div>
          <ul>
            {this.state.numbers((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
          <button onClick={this.addRandomNumber}>Новое число</button>
       </div> 
     );
  };
}


/*const List = () => {
  const [numbers, setNumbers] = useState([1, 555, 3]);
  
  const addNumber = () => {
    const randNumber = Math.raound(Math.random() * 10);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };
  
  return (
     <div>
       <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Новое число</button>
     </div>
  );
};*/


