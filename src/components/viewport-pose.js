import React, { PureComponent } from 'react';
import posed from 'react-pose';

class ViewportPose extends PureComponent {
  state = { isIntersecting: false };
  observer = null;
  containerRef = null;

  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleIntersection);
    this.observe();
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  handleRef = el => {
    this.containerRef = el;
    this.observe();
  };

  observe = () => {
    if (this.containerRef && this.observer) {
      this.observer.observe(this.containerRef);
    }
  };

  handleIntersection = (entries, observer) => {
    const { isIntersecting } = entries[0];

    this.setState({ isIntersecting });
  };

  render() {
    const { children } = this.props;
    const { isIntersecting } = this.state;

    return (
      <Container ref={this.handleRef} pose={isIntersecting ? 'in' : 'out'}>
        {children}
      </Container>
    );
  }
}

export default ViewportPose;

const Container = posed.div({
  in: { staggerChildren: 100 },
  out: {},
});
