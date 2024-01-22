import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import "./App.css";
import HeroSection from "./hero/HeroSection";

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 18);

const setUserClientId = async () => {
  return localStorage.setItem("clientId", generateId());
};

const getUserClientId = () => {
  return localStorage.getItem("clientId");
};

const cleanUserClientId = () => {
  localStorage.removeItem("clientId");
};

function App() {
  const [visitorId, setVisitorId] = useState("");
  const userAgent = window.navigator.userAgent;

  const userPlatform = window.navigator.platform;

  console.log(MediaDeviceInfo.toString());

  const getFingerprint = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();

    // The unique identifier is available in the `visitorId` property
    setVisitorId(result.visitorId);
  };

  useEffect(() => {
    getFingerprint();

    const buttonGenerate = document.querySelector("button.generate");
    const buttonRemove = document.querySelector("button.remove");
    const output = document.querySelector("code");

    const updateOutput = () => {
      if (getUserClientId()) {
        output.innerHTML = getUserClientId() + " ↗️ Load from Local Storage";
      }
    };

    buttonGenerate.addEventListener(
      "click",
      async () => {
        buttonGenerate.disabled = true;
        buttonRemove.disabled = false;
        await setUserClientId();
        updateOutput();
      },
      false
    );

    buttonRemove.addEventListener(
      "click",
      () => {
        buttonGenerate.disabled = false;
        buttonRemove.disabled = true;
        cleanUserClientId();
        output.innerHTML = "❌ Removed from Local Storage";
      },
      false
    );

    // Initial update
    updateOutput();
  }, []);

  return (
    <div className="App">
      {/* <HeroSection/> */}
      <div>
        user Agent is {userAgent}
        <br />
        <br />
        userPlatform is {userPlatform}
        <br />
        <br />
        <p style={{ fontWeight: "bold" }}>
          Your fingerprint is (visitorId)
        </p>{" "}
        {visitorId}
      </div>

      <div>
        <p>
          <button className="generate">Generate and Save Random ID</button>
        </p>
        <p>
          <code></code>
        </p>
        <p>
          <button className="remove" disabled>
            Remove Saved ID
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
