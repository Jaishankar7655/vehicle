import React, { Component } from 'react';
import Herosection from './Components/Herosection';
import ServiceContainer from './Components/ServiceContainer';
import Testimonials from './Components/Testimonials';
import Aboutus from './Components/Aboutus';
import Customercopy from './Components/Customercopy';
import Services from './Components/Services';
import FloatingContactButton from './Components/FloatingContactButton';
import Blog from './Components/Blog';

export class App extends Component {
  render() {
    return (
      <>
        <Herosection />
        <Aboutus />
        <Services />
        <Testimonials />
        <FloatingContactButton />
        <Blog/>
      </>
    );
  }
}

export default App;
