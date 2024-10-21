# Matchstick Game Simulation

This project is a simple match game where a user plays against the computer. The game starts with a customizable number of matches, and the player who ends up with an even number of matches wins. The user can choose who goes first and how many matches can be taken per turn. The game is built with **React**, **Redux Toolkit**, and **TypeScript**,

## Features

- **Player vs. Computer**: The user plays against the computer, who follows an optimal strategy.

- **React, Redux Toolkit, & TypeScript**: The app is built with React, using Redux Toolkit for state management and TypeScript for type safety and scalability.
- **Customizable Game Parameters**:
  - **Number of matches**: The user can select how many matches will be in the game
  - **Number of matches per turn**: The user can select how many matches can be taken in a turn.
  - **Who goes first**: The user can choose whether the player or the computer goes first.

## Installation

Clone the repository:

```bash
git clone https://github.com/bilokrylets/matchstick-game.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Technologies Used

- **React**: Front-end UI library.
- **Redux Toolkit**: State management.
- **SCSS**: Styling to ensure maintainability and match the provided design.
- **TypeScript**: Programming language for application logic.

## How to Play

- **Choose the game settings:**
  - Select who goes first (player or computer).
  - Select how many matches will be in the game.
  - Select how many matches can be taken per turn.
- **Gameplay:**
  - Take turns selecting the number of matches (based on your chosen settings).
  - The computer will follow an optimal strategy to make its move.
- **Win Condition:**
  - The game ends when all matches are taken.
  - The player with an even number of matches at the end wins.

## Optimal Strategy

The computer makes decisions based on a mathematical strategy that guarantees a win when possible. It analyzes the remaining number of matches and adjusts its move to keep the match count in its favor.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for more information.
