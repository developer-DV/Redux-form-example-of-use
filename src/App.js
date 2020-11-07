import React from 'react'
import './App.css';
import ContactForm from './components/FormComponent';


class App extends React.Component {
  submit = (values) => {
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
