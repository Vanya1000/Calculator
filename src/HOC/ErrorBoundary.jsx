import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // send error to server...
    console.log(errorInfo)
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <>
          <h1>Something went wrong... Please, try later.</h1>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
