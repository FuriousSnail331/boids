class Controls {
  constructor() {
    this.vectorsEnabled = false;
    this.simulationSpeed = 0.8;
    this.fps = 0;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.createUI();
    this.startFPSCounter();
  }

  createUI() {
    const container = document.createElement("div");
    container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(41, 44, 60, 0.9);
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      color: #e0e0e0;
      font-size: 14px;
      z-index: 1000;
    `;

    const vectorToggle = document.createElement("label");
    vectorToggle.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      cursor: pointer;
    `;

    const vectorCheckbox = document.createElement("input");
    vectorCheckbox.type = "checkbox";
    vectorCheckbox.checked = this.vectorsEnabled;
    vectorCheckbox.style.cssText = "cursor: pointer;";
    vectorCheckbox.onchange = () => {
      this.vectorsEnabled = vectorCheckbox.checked;
    };

    vectorToggle.appendChild(vectorCheckbox);
    vectorToggle.appendChild(document.createTextNode("Show Vectors"));

    const speedLabel = document.createElement("div");
    speedLabel.textContent = "Speed";
    speedLabel.style.marginBottom = "8px";

    const speedSlider = document.createElement("input");
    speedSlider.type = "range";
    speedSlider.min = "0.1";
    speedSlider.max = "3";
    speedSlider.step = "0.1";
    speedSlider.value = this.simulationSpeed;
    speedSlider.style.cssText = `
      width: 100%;
      cursor: pointer;
    `;

    const speedValue = document.createElement("div");
    speedValue.textContent = `${this.simulationSpeed.toFixed(1)}x`;
    speedValue.style.cssText = `
      margin-top: 5px;
      text-align: center;
      font-size: 12px;
      color: #a6d189;
    `;

    speedSlider.oninput = () => {
      this.simulationSpeed = parseFloat(speedSlider.value);
      speedValue.textContent = `${this.simulationSpeed.toFixed(1)}x`;
    };

    this.fpsLabel = document.createElement("div");
    this.fpsLabel.style.cssText = `
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(224, 224, 224, 0.2);
      font-size: 12px;
      color: #8caaee;
    `;
    this.fpsLabel.textContent = "FPS: 0";

    container.appendChild(vectorToggle);
    container.appendChild(speedLabel);
    container.appendChild(speedSlider);
    container.appendChild(speedValue);
    container.appendChild(this.fpsLabel);

    document.body.appendChild(container);
  }

  startFPSCounter() {
    setInterval(() => {
      const currentTime = performance.now();
      const delta = currentTime - this.lastTime;
      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.frameCount = 0;
      this.lastTime = currentTime;
      if (this.fpsLabel) {
        this.fpsLabel.textContent = `FPS: ${this.fps}`;
      }
    }, 1000);
  }

  updateFrame() {
    this.frameCount++;
  }

  shouldDrawVectors() {
    return this.vectorsEnabled;
  }

  getSpeed() {
    return this.simulationSpeed;
  }
}
