import { useState } from "react";
import {BrowserRouter, Link,Route  } from 'react-router'
import HomePage from "./HomePage.jsx"
import { useNavigate } from "react-router-dom";

const CloudBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Sky gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, #b8dff0 0%, #d6ecf8 40%, #e8f4fb 70%, #cde8f5 100%)",
      }}
    />
    {/* Subtle arc lines */}
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 1024 768"
      fill="none"
    >
      <circle
        cx="512"
        cy="900"
        r="500"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="512"
        cy="900"
        r="620"
        stroke="white"
        strokeWidth="0.8"
        fill="none"
      />
      <circle
        cx="512"
        cy="900"
        r="740"
        stroke="white"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
    {/* Cloud blobs */}
    <div
      className="absolute bottom-0 left-0 w-96 h-48 rounded-full opacity-80"
      style={{
        background:
          "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, rgba(220,240,252,0.4) 70%, transparent 100%)",
        transform: "translate(-20%, 30%)",
        filter: "blur(2px)",
      }}
    />
    <div
      className="absolute bottom-0 right-0 w-80 h-40 rounded-full opacity-70"
      style={{
        background:
          "radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, rgba(200,232,248,0.4) 70%, transparent 100%)",
        transform: "translate(10%, 25%)",
        filter: "blur(2px)",
      }}
    />
    <div
      className="absolute bottom-16 left-1/4 w-64 h-28 rounded-full opacity-60"
      style={{
        background:
          "radial-gradient(ellipse, rgba(255,255,255,0.8) 0%, rgba(210,238,250,0.3) 70%, transparent 100%)",
        filter: "blur(3px)",
      }}
    />
    <div
      className="absolute bottom-8 right-1/4 w-72 h-32 rounded-full opacity-65"
      style={{
        background:
          "radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, rgba(215,237,250,0.35) 70%, transparent 100%)",
        filter: "blur(2px)",
      }}
    />
  </div>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const navigate = useNavigate()
  const handleLogin = async () => {
  const newErrors = {
    email: "",
    password: "",
    general: "",
  };

  const robustEmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Email validation
  if (!email) {
    newErrors.email = "Email required";
  } else if (!robustEmailRegex.test(email)) {
    newErrors.email = "Invalid email";
  }

  // Password validation
  if (!password) {
    newErrors.password = "Password required";
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  setErrors(newErrors);

  //  stop if validation failed
  if (newErrors.email || newErrors.password) return;

  //  safe to call API
  try {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    const res = await fetch("http://localhost:8000/token", {
      method: "POST",
      body: formData,
      credentials: "include", // this is for the credential http cookie
    });
    if (!res.ok) {
      const errorData = await res.json();

      if (res.status === 422 && Array.isArray(errorData.detail)) {
        const backendErrors = { email: "", password: "", general: "" };

        errorData.detail.forEach((err) => {
          if (err.loc.includes("username")) backendErrors.email = err.msg;
          if (err.loc.includes("password")) backendErrors.password = err.msg;
        });

        setErrors(backendErrors);
        return;
      }

      if (res.status === 401) {
        setErrors(prev => ({
          ...prev,
          general: errorData.detail,
          
        }));
        alert(errorData.detail)
      }
    }
    else{
      setLoggedIn(true)
      console.log("hello")
      // return <Navigate to="/" replace />;
     navigate("/", { replace: true })

    }
  } catch (err) {
    console.log(err, "this is the error")
    setErrors(prev => ({
      ...prev,
      general: "Server unreachable. Try again later."
    }));
  }
};


  return (

    <div className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden">
      <CloudBackground />

      {/* Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "#1a1a1a" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        <span className="font-semibold text-gray-800 text-sm tracking-wide">
          Still Test
        </span>
      </div>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-4 rounded-3xl p-8 transition-colors duration-150"
        style={{
          background: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow:
            "0 8px 40px rgba(100, 160, 200, 0.18), 0 2px 8px rgba(100, 160, 200, 0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(245, 247, 250, 0.95)",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)",
              border: "1px solid rgba(220,230,240,0.6)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-1.5">
            Sign in with email
          </h1>
          {/* <p className="text-sm text-gray-400 leading-relaxed">
            Make a new doc to bring your words, data,<br />and teams together. For free
          </p> */}
        </div>

        {/* Fields */}
        <div className="space-y-3 mb-2">
          {/* Email */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-150"
            style={{
              background: "rgba(245, 247, 250, 0.8)",
              border: errors.email
                ? "1px solid rgb(239, 68, 68)"
                : "1px solid rgba(220,228,238,0.6)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
          <div>
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{
              background: "rgba(245, 247, 250, 0.8)",
              border: errors.password
                ? "1px solid rgb(239, 68, 68)"
                : "1px solid rgba(220,228,238,0.6)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-4">
          <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
            Forgot password?
          </button>
        </div>

        {/* CTA */}
        <button
          className="w-full py-3.5 rounded-xl text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "#111827",
            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          }}
          onClick={handleLogin}
        >
          Get Started
        </button>
        {errors.general && <p className="text-xs text-red-500 mt-1">{errors.general}</p>}
        </div>

        {/* Divider */}
        {/* <div className="flex items-center gap-3 my-5">
          <div
            className="flex-1 h-px"
            style={{ borderTop: "1.5px dashed rgba(200,210,220,0.8)" }}
          />
          <span className="text-xs text-gray-400">Or sign in with</span>
          <div
            className="flex-1 h-px"
            style={{ borderTop: "1.5px dashed rgba(200,210,220,0.8)" }}
          />
        </div> */}

        {/* Social buttons */}
        {/* <div className="flex gap-3">
          {[
            { icon: <GoogleIcon />, label: "Google" },
            { icon: <FacebookIcon />, label: "Facebook" },
            { icon: <AppleIcon />, label: "Apple" },
          ].map(({ icon, label }) => (
            <button
              key={label}
              aria-label={`Sign in with ${label}`}
              className="flex-1 flex items-center justify-center py-3 rounded-xl transition-all duration-150 hover:bg-gray-50 active:scale-95"
              style={{
                background: "rgba(248, 250, 252, 0.9)",
                border: "1px solid rgba(220,228,238,0.7)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {icon}
            </button>
          ))}
        </div> */}
      </div>
   
  );
}
