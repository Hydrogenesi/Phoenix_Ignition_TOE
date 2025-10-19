# 🤝 Contributing to Phoenix Ignition

Welcome, **future conductor**! We are honored by your interest in expanding the ceremonial framework.

This guide will help you understand our philosophy, workflow, and how to contribute with mythic clarity.

---

## 🔥 The Ceremonial Philosophy

Our code follows these sacred principles:

### 1. **Mythic Clarity over Obscurity**
- Variable names reflect their ceremonial role: `haikuScrolls` not `data`
- Functions are purposeful gifts: `igniteServer()` not `start()`
- Comments explain *why*, not just *what*

### 2. **Modularity as Ritual**
- Each module is self-contained and giftable
- Configuration is separated from logic
- Routes, initialization, and ignition are distinct phases

### 3. **Tests as Verification Rites**
- Every feature has corresponding tests
- Tests mirror the ceremonial arc
- Edge cases are honored as part of resilience choreography

### 4. **Documentation as Conductor's Score**
- No ambiguity, full resonance
- Examples show the rite in action
- Parameters are documented with poetic precision

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14 or higher
- npm
- Git
- A spirit of creative inquiry

### Setup Your Local Altar
```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Phoenix_Ignition_TOE.git
cd Phoenix_Ignition_TOE

# Install ceremonial dependencies
npm install

# Verify the ritual works
npm test
npm start
```

---

## 🎯 What to Contribute

We welcome contributions in several areas:

### Code Enhancements
- New ceremonial features
- Performance optimizations (without sacrificing clarity)
- Bug fixes with test coverage
- Refactoring for improved modularity

### Documentation
- Improved explanations
- New usage examples
- Translation into other languages
- Visual diagrams or glyphs

### Testing
- Additional test coverage
- Edge case discovery
- Integration test suites

### Design & Experience
- CSS refinements
- New visual glyphs
- Responsive design improvements
- Accessibility enhancements

---

## 📝 Contribution Workflow

### 1. Choose Your Path
- Browse [open issues](https://github.com/Hydrogenesi/Phoenix_Ignition_TOE/issues)
- Or propose a new enhancement

### 2. Create a Ceremonial Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 3. Make Your Changes
Follow our coding standards:

#### Code Style
- Use 2-space indentation
- Add ceremonial comments for complex logic
- Keep functions focused and purposeful
- Extract magic numbers to named constants

#### Testing
- Add tests for new features
- Ensure all existing tests pass
- Aim for meaningful coverage, not just numbers

```bash
# Run tests
npm test

# Start dev server with auto-reload
npm run dev
```

### 4. Commit with Intention
Use clear, descriptive commit messages:

```bash
# Good examples:
git commit -m "Add: new haiku validation function"
git commit -m "Fix: edge case in scroll rendering"
git commit -m "Docs: enhance quickstart ritual instructions"
git commit -m "Test: add resilience checks for missing data"

# Include reasoning for complex changes:
git commit -m "Refactor: extract route definitions into separate module

Separates concerns for better testability and allows
routes to be composed dynamically in future iterations."
```

### 5. Push Your Branch
```bash
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

In your PR description:
- Explain the **what** and **why** of your changes
- Reference any related issues
- Include screenshots for visual changes
- Note any breaking changes
- List new dependencies (if any)

**PR Template:**
```markdown
## Description
[Clear explanation of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] All existing tests pass
- [ ] Added new tests for changes
- [ ] Manually verified functionality

## Ceremonial Checklist
- [ ] Code follows mythic clarity principles
- [ ] Comments explain intent, not just mechanics
- [ ] Configuration extracted to named constants
- [ ] Documentation updated where needed
```

---

## 🧪 Testing Standards

### Writing Tests
Our tests are ceremonial verification rites:

```javascript
describe('Feature Name - Ceremonial Purpose', () => {
  test('specific behavior with clear intent', () => {
    // Arrange - Set up the ceremony
    const app = initializeApp();
    
    // Act - Perform the ritual
    const result = performAction(app);
    
    // Assert - Verify the outcome
    expect(result).toBeDefined();
  });
});
```

### Test Coverage Goals
- Configuration modules: 100%
- Core functions: 90%+
- Routes: All major pathways tested
- Edge cases: At least 3 per feature

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage report
npm test -- --coverage

# Run specific test file
npm test -- index.test.js
```

---

## 🔍 Code Review Process

When reviewing PRs, we look for:

### Correctness
- Does the code work as intended?
- Are edge cases handled?
- Do tests verify the behavior?

### Clarity
- Are variable names ceremonial and clear?
- Do comments explain the *why*?
- Is the flow intuitive?

### Completeness
- Is documentation updated?
- Are tests included?
- Are dependencies documented?

### Security
- No hardcoded secrets
- Input validation present
- Dependencies vetted via advisory database

---

## 🌟 Recognition

Contributors who expand the ceremonial framework are honored:
- Your name in the contributors list
- Mention in release notes
- Eternal gratitude from the community

Significant contributions may be recognized as **Conductors of the Flame** 🔥

---

## ❓ Questions or Guidance?

- Open a [discussion](https://github.com/Hydrogenesi/Phoenix_Ignition_TOE/discussions)
- Review existing [issues](https://github.com/Hydrogenesi/Phoenix_Ignition_TOE/issues)
- Check the [README](README.md) for technical guidance

---

## 📜 Code of Conduct

We are committed to:
- Respectful collaboration
- Constructive feedback
- Inclusive language
- Patient guidance for new contributors

**Remember**: We're here to ignite ideas, not egos. Be kind, be clear, be ceremonial.

---

## 🔮 Closing Words

*Every contribution, no matter how small,*  
*Is a spark in the larger ignition.*  
*Code with intention, test with care,*  
*And may your ceremonies resonate.*

**Thank you for joining the ritual.** 🔥✨
