# Portfolio Website — Master Design Documentation

> This document serves as the central design specification for the portfolio website. It defines the overall visual language, project architecture, design system, development guidelines, and references every individual design specification document.

---

# Project Overview

This portfolio is designed to communicate professionalism, technical expertise, creativity, and attention to detail through a clean, modern, and premium user experience.

The website focuses on:

- Strong typography
- Spacious layouts
- Reusable UI components
- Consistent spacing
- Minimal visual clutter
- Responsive design
- Smooth interactions
- High accessibility
- Performance-first architecture

Every section should feel like part of one cohesive design system rather than individual pages.

---

# Design Philosophy

The website should feel:

- Premium
- Modern
- Minimal
- Professional
- Lightweight
- Elegant
- Comfortable to read
- Easy to navigate

The user should immediately notice:

- Clean spacing
- Consistent alignment
- Visual hierarchy
- Reusable components
- Smooth interactions

Avoid:

- Over-designed interfaces
- Decorative graphics
- Heavy gradients
- Large illustrations
- Excessive animations
- Visual noise

---

# Color System

The project uses semantic colors instead of fixed values.

## Primary Color

Used for:

- Primary buttons
- Important actions
- Active navigation
- Main highlights

---

## Secondary Color

Used for:

- Secondary text
- Supporting elements
- Muted UI

---

## Accent Color

Used for:

- Badges
- Status indicators
- Hover states
- Small highlights
- Decorative glows

---

## White

Used for:

- Cards
- Containers
- Content backgrounds

---

## Black

Used for:

- Headings
- Important text
- High emphasis elements

> Actual color values are defined inside `Colors.md`.

---

# Typography

Typography should establish a clear reading hierarchy.

Levels

- Hero Heading
- Section Heading
- Card Heading
- Body Text
- Small Text
- Badge Text
- Button Text

Typography documentation lives inside:

Typography.md

---

# Layout System

The entire website follows a card-based layout.

Characteristics

- Floating sections
- Rounded containers
- Spacious padding
- Comfortable margins
- Large whitespace

All layouts should maintain a consistent visual rhythm.

Detailed documentation:

Layout.md

---

# Component Design System

The UI is built from reusable components.

Examples

- Navbar
- Buttons
- Section Header
- Badges
- Project Card
- Contact Form
- Social Buttons
- Technology Badges

Each component should follow the same visual language.

Detailed documentation:

Components.md

---

# Shadows

Use only subtle elevation.

Goals

- Soft floating appearance
- Minimal depth
- Never distracting

---

# Borders

Use:

- Thin subtle borders
- Rounded corners
- Consistent border radius

Avoid:

- Thick borders
- Sharp edges

---

# Spacing System

Whitespace is one of the most important design elements.

Maintain consistent spacing between:

- Sections
- Cards
- Headings
- Paragraphs
- Buttons
- Badges

Spacing should feel generous without wasting screen space.

---

# Animation Philosophy

Animations should improve the experience rather than distract.

Characteristics

- Smooth
- Fast
- Lightweight
- Natural
- Consistent

Avoid

- Long animations
- Bounce effects
- Overuse of motion

Animation specifications are documented inside:

Animations.md

---

# Website Structure

Home Page

```
Navbar

Hero
About

Experience
Skills

Projects

Testimonials

Contact

Footer
```

Project Details Page

```
Navbar

Back Navigation

Project Details

Footer
```

---

# Documentation Structure

```
Master-Design.md

Navbar.md

Hero.md

About.md

Experience.md

Skills.md

Projects.md

Project-Card.md

Project-Details.md

Testimonials.md

Contact.md

Footer.md

Colors.md

Typography.md

Layout.md

Components.md

Animations.md
```

Each markdown file is responsible for documenting only its own section or component.

---

# Development Stack

Framework

- Next.js

Architecture

- App Router

Language

- JavaScript (ES6+)

Styling

- Tailwind CSS

React

- React Compiler

Icons

- React Icons

Notifications

- React Toastify

Animations

- Framer Motion

Deployment

- Vercel

---

# Development Principles

The codebase should prioritize:

- Reusable components
- Clean folder structure
- Maintainability
- Scalability
- Accessibility
- Performance
- Responsive design
- SEO-friendly architecture

---

# Responsive Design

Desktop

Primary design target.

Tablet

Layouts adapt while maintaining spacing.

Mobile

Everything stacks naturally while preserving readability.

No content should overflow.

---

# Accessibility

Maintain:

- Semantic HTML
- Keyboard navigation
- Proper heading hierarchy
- Image alt text
- Visible focus states
- Good color contrast

---

# Performance

Prioritize:

- Lazy loading
- Image optimization
- Font optimization
- Code splitting
- Minimal client-side JavaScript
- Efficient rendering

---

# Reusability Rules

Every repeated UI should become a reusable component.

Examples

- Buttons
- Cards
- Badges
- Forms
- Inputs
- Section Headers
- Navigation Items

Avoid duplicated UI code.

---

# Design Consistency Rules

Every section should share:

- Border radius
- Shadows
- Padding
- Typography
- Button styles
- Badge styles
- Hover behaviour
- Transition timing

The portfolio should feel like one unified product rather than multiple independent sections.

---

# Final Goal

The final website should represent a professional software developer through thoughtful design, clean architecture, smooth interactions, and a cohesive visual system.

Every design decision should support readability, usability, maintainability, and long-term scalability.