import React from 'react'
import './App.css';
import ContactForm from './components/FormComponent';


class App extends React.Component {
  submit = (values) => {
    alert(`Вы зарегистрированы!`)
    console.log(values)
  }

  render() {
    return (
      <div className="App">
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
