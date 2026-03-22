import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex items-center justify-center min-h-screen bg-background"
          data-testid="error-boundary-fallback"
        >
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Something went wrong. Please refresh the page and try again.
            </p>
            {this.state.error && (
              <details className="text-left text-sm text-muted-foreground mb-6 bg-muted p-4 rounded">
                <summary className="cursor-pointer font-semibold mb-2">
                  Error Details
                </summary>
                <pre className="overflow-auto max-h-48 text-xs">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              data-testid="button-refresh"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
