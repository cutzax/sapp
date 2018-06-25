import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
    render() {
        return(
        <div>
            <h1>About Us</h1>
            <p>Vivamus ultrices quam et leo auctor accumsan. Sed molestie elit arcu, aliquam posuere n
                eque sagittis a. Aliquam commodo mattis tempor. Sed at ultricies ex, ac lacinia ex. In pulvinar a
                rcu diam, nec semper purus venenatis in. Duis libero justo, luctus egestas nunc cursus, aliquam tincidun
                t ipsum. In pellentesque, quam hendrerit consectetur pulvinar, sapien arcu malesuada velit, nec tincidunt 
                dolor nunc non arcu. Vestibulum suscipit egestas tristique. Nunc sagittis convallis arcu, quis gravida 
                felis ullamcorper a. Vestibulum ornare dolor lectus, ac malesuada purus fringilla eget. Nulla sagittis c
                onvallis vehicula. Nulla imperdiet nisl sit amet ex rutrum bibendum. Sed placerat justo urna, eu fring
                illa mauris luctus id. In vitae auctor mi, ac efficitur risus. Duis pulvinar eros nec sollicitudin euismod.</p>
        </div>
        );
    }
}

export default About;