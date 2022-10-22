import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render() {
    const ownState: any = this.state
    if (ownState.hasError) {
      // You can render any custom fallback UI
      return <h1>We are extremely sorry but something went really wrong and the book view crashed. Please refresh the page and let me know about this incident.</h1>
    }

    return this.props.children
  }
}