/**
 * ErrorBoundary — Critical fix
 * ป้องกันทั้งหน้า crash เมื่อ component ใดใด throw error
 * ใช้ class component เพราะ React ยังไม่มี hook สำหรับ error boundary
 */
import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props { children: ReactNode }
interface State { hasError: boolean; message: string }

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="hsl(357 79% 51%)" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold mb-2">เกิดข้อผิดพลาด</h1>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              ขออภัย เกิดข้อผิดพลาดบางอย่าง<br />
              กรุณาลองรีเฟรชหน้าหรือกลับไปหน้าหลัก
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-smooth"
              >
                รีเฟรชหน้า
              </button>
              <Link
                to="/"
                className="px-5 py-2.5 rounded-full gradient-red text-white text-sm font-semibold shadow-red-sm"
                onClick={() => this.setState({ hasError: false, message: "" })}
              >
                กลับหน้าหลัก
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
