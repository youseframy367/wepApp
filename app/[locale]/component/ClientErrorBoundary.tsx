"use client";
import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  retryCount: number;
}

class ClientErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true, retryCount: 0 };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ClientErrorBoundary caught an error:", error, errorInfo);
    
    // Auto-retry once
    if (this.state.retryCount === 0) {
      this.setState({ retryCount: 1 });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
          <div className="w-20 h-20 mb-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-2xl font-bold text-primary mb-4">Recovering Session...</h1>
          <p className="max-w-md text-gray-400 mb-8">
            We encountered a temporary connection issue. We are automatically restoring your session.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Reload Now
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ClientErrorBoundary;
