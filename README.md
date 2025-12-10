# Boids

<a href="https://winter-of-open-source.vercel.app/"><img src="media/banner.png" alt="Winter of Open Source"></a>

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-yellow.svg)](https://www.javascript.com/)

**Boids** is an interactive browser-based flocking simulation that demonstrates emergent behavior from simple rules. Watch as individual agents (boids) interact with their neighbors using separation, alignment, and cohesion rules to create realistic, organic group movement patterns.

This project is part of **[Winter of Open Source](https://winter-of-open-source.vercel.app/)**, where contributors can improve simulations, add new features, optimize performance, and enhance the overall project.

## How It Works

The simulation is based on three core flocking behaviors:

1. **Separation**: Boids steer to avoid crowding local flockmates
2. **Alignment**: Boids steer towards the average heading of local flockmates
3. **Cohesion**: Boids steer to move towards the average location of local flockmates

Each behavior contributes a steering force weighted by configurable parameters, allowing you to fine-tune the simulation dynamics.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Configuration](#configuration)
3. [How to Contribute](#how-to-contribute)
4. [Code of Conduct](#code-of-conduct)
5. [References](#references)

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/datavorous/boids.git
cd boids
```

2. Open `index.html` in your web browser (or use a local server):

```bash
# Option 1: Python 3
python3 -m http.server 8000

# Option 2: Node.js (if installed)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## Configuration

Edit `src/config.js` to customize the simulation:

```javascript
const CONFIG = {
  boidCount: 130, // Number of boids in the simulation
  maxSpeed: 3, // Maximum velocity magnitude
  maxForce: 0.07, // Maximum steering force
  visualRange: 60, // Distance at which boids see each other

  cohesionWeight: 1.0, // Influence of cohesion behavior
  alignmentWeight: 1.0, // Influence of alignment behavior
  separationWeight: 1.9, // Influence of separation behavior

  trailLength: 20, // Length of motion trails
  trailEnabled: true, // Enable/disable trails
};
```

## Welcome to Winter of Open Source! 🎉

We're excited to have you contribute to the Boids simulation! Whether you're fixing bugs, adding features, or optimizing performance, your contributions help make this project better.

### Getting Help

- **Discord**: [Server link]()
- **GitHub Discussions**: Ask questions and discuss ideas
- **Comment on issues**: Reach out to maintainers directly

### Important Rules

- Work on **one issue at a time**
- Complete assigned issues within a reasonable timeframe (can be extended based on difficulty)
- Respect the [Code of Conduct](CODE_OF_CONDUCT.md)
- Always link your PR to an issue
- Avoid plagiarism or AI-generated content without proper attribution

## How to Contribute

Please follow [CONTRIBUTING.md](CONTRIBUTING.md) for step-by-step guidance on:

- Setting up your development environment
- Understanding the codebase structure
- Making improvements and submitting PRs
- Code style and best practices
- Testing your changes

## Code of Conduct

Please follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to ensure a welcoming and productive environment for all contributors.

## References

- [Boids Algorithm (Wikipedia)](https://en.wikipedia.org/wiki/Boids)
- [Steering Behaviors for Autonomous Characters](https://www.red3d.com/cwr/boids/)
- [Craig Reynolds' Original Paper](https://www.red3d.com/cwr/papers/1987/boids.html)
