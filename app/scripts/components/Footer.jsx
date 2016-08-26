import React from 'react';
import PureRender from 'react-pure-render/function';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  shouldComponentUpdate = PureRender;

  render() {
    return (
      <footer className="main-footer">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=gilbarbara&repo=logos&type=star&count=true"
          frameBorder="0"
          scrolling="0" width="110px" height="20px" />
        <iframe
          src="https://ghbtns.com/github-btn.html?user=gilbarbara&type=follow&count=true"
          frameBorder="0"
          scrolling="0" width="160px" height="20px" />
      </footer>
    );
  }
}

export default Footer;
