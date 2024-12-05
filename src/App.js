import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <div className="form-container" id="formContainer">
      <h2 id="formTitle">Sign Up</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required />
      </div>
      <div className="form-group" id="emailGroup">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <button
        className="form-button"
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default Sentry.withProfiler(App);
