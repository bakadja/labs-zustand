# 🐻 Zustand Labs

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Zustand](https://img.shields.io/badge/Zustand-FF6B6B?style=flat&logo=bear&logoColor=white)](https://zustand-demo.pmnd.rs/)

A comprehensive collection of hands-on labs and exercises for learning Zustand, the lightweight state management solution for React applications.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Labs Overview](#labs-overview)
- [Getting Started](#getting-started)
- [Lab Exercises](#lab-exercises)
- [Code Examples](#code-examples)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## 📖 About

This repository contains a series of progressive labs designed to teach you Zustand from the ground up. Each lab builds upon the previous one, covering everything from basic state management to advanced patterns and best practices.

## ✨ Features

- 📚 **Progressive Learning**: Step-by-step labs from beginner to advanced
- 🔧 **Hands-on Exercises**: Practical examples and coding challenges
- 🎯 **Real-world Scenarios**: Common use cases and patterns
- 📝 **Detailed Documentation**: Clear explanations and code comments
- 🧪 **Testing Examples**: Learn how to test Zustand stores
- 🚀 **TypeScript Support**: Full TypeScript examples and best practices

## 🔧 Prerequisites

Before starting these labs, you should have:

- Basic knowledge of React and JavaScript/TypeScript
- Node.js (version 16 or higher)
- npm or yarn package manager
- A code editor (VS Code recommended)

## 📦 Installation

1. Clone this repository:
```bash
git clone https://github.com/bakadja/labs-zustand.git
cd labs-zustand
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## 🎯 Labs Overview

| Lab | Topic | Difficulty | Duration |
|-----|-------|------------|----------|
| Lab 1 | Basic Store Creation | Beginner | 30 min |
| Lab 2 | State Updates & Actions | Beginner | 45 min |
| Lab 3 | Computed Values & Selectors | Intermediate | 60 min |
| Lab 4 | Async Actions & Side Effects | Intermediate | 75 min |
| Lab 5 | Store Composition & Slices | Advanced | 90 min |
| Lab 6 | Persistence & Middleware | Advanced | 60 min |
| Lab 7 | Testing Zustand Stores | Advanced | 45 min |

## 🚀 Getting Started

### Quick Start Example

Here's a simple Zustand store to get you started:

```typescript
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

// Usage in React component
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()
  
  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

## 🔬 Lab Exercises

### Lab 1: Basic Store Creation
Learn to create your first Zustand store with simple state management.

**Objectives:**
- Create a basic store
- Understand state structure
- Implement simple actions

### Lab 2: State Updates & Actions
Master different ways to update state and organize actions.

**Objectives:**
- Learn various update patterns
- Implement complex state changes
- Handle nested state updates

### Lab 3: Computed Values & Selectors
Explore derived state and performance optimization with selectors.

**Objectives:**
- Create computed values
- Use selectors for performance
- Understand re-render optimization

### Lab 4: Async Actions & Side Effects
Handle asynchronous operations and side effects in your stores.

**Objectives:**
- Implement async actions
- Handle loading states
- Manage error handling

### Lab 5: Store Composition & Slices
Learn advanced patterns for organizing large applications.

**Objectives:**
- Split stores into slices
- Compose multiple stores
- Share state between stores

### Lab 6: Persistence & Middleware
Add persistence and middleware to enhance your stores.

**Objectives:**
- Implement state persistence
- Create custom middleware
- Debug with dev tools

### Lab 7: Testing Zustand Stores
Write comprehensive tests for your Zustand stores.

**Objectives:**
- Unit test stores
- Test async actions
- Mock dependencies

## 💡 Code Examples

### Advanced Store Pattern

```typescript
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  setFilter: (filter: 'all' | 'active' | 'completed') => void
  filteredTodos: Todo[]
}

const useTodoStore = create<TodoState>()(
  subscribeWithSelector(
    immer((set, get) => ({
      todos: [],
      filter: 'all',
      addTodo: (text) =>
        set((state) => {
          state.todos.push({
            id: crypto.randomUUID(),
            text,
            completed: false,
          })
        }),
      toggleTodo: (id) =>
        set((state) => {
          const todo = state.todos.find((t) => t.id === id)
          if (todo) {
            todo.completed = !todo.completed
          }
        }),
      deleteTodo: (id) =>
        set((state) => {
          state.todos = state.todos.filter((t) => t.id !== id)
        }),
      setFilter: (filter) => set({ filter }),
      get filteredTodos() {
        const { todos, filter } = get()
        switch (filter) {
          case 'active':
            return todos.filter((t) => !t.completed)
          case 'completed':
            return todos.filter((t) => t.completed)
          default:
            return todos
        }
      },
    }))
  )
)
```

## 🤝 Contributing

We welcome contributions to improve these labs! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-lab`)
3. Commit your changes (`git commit -am 'Add new lab exercise'`)
4. Push to the branch (`git push origin feature/new-lab`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and patterns
- Add tests for new features
- Update documentation as needed
- Ensure all labs run successfully

## 📚 Resources

- [Zustand Official Documentation](https://zustand-demo.pmnd.rs/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Testing Library](https://testing-library.com/)

### Recommended Reading

- [State Management Patterns](https://kentcdodds.com/blog/application-state-management-with-react)
- [React Performance](https://react.dev/learn/render-and-commit)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Learning! 🎓**

If you find these labs helpful, please consider giving this repository a ⭐️
