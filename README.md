# GDG GU DevConnect 2025 – Event Landing Page

A single-page, responsive event website built for the **GDG GU** event task.  
The page includes registration, countdown, highlights, schedule, location, and social links.

---

## 💡 Project Overview

This is a static 1-page website designed for a hypothetical upcoming **GDG Galgotias University** event.

**Tech stack:**

- HTML5
- Modern CSS (Flexbox + Grid)
- Vanilla JavaScript (no frameworks)

---

## ✨ Features

### Mandatory Features

- ✅ **Event Registration Form**
  - Captures: **Name, Email, College/Organization, Interest Area**
  - Optional field: *What do you expect from this event?*
  - Basic validation + success message simulation

- ✅ **Countdown Timer**
  - Live countdown until the mock event date:
  - `15 March 2025, 10:00 AM` (configurable in `script.js`)

- ✅ **Event Highlights Section**
  - 3 highlight cards:
    - Web & Cloud Track
    - Android & Flutter Track
    - Community & Careers Track

- ✅ **Location Section**
  - Google Maps embed for **Galgotias University, Greater Noida**
  - Short description of venue

- ✅ **Social Media Links**
  - Placeholder buttons for:
    - Twitter / X
    - Instagram
    - LinkedIn
    - YouTube  

> Replace the `href="#"` values in the social links with the official GDG Galgotias handles when available.

### Bonus / Optional Features

- ⭐ **Dark / Light Theme Toggle**
  - Toggle button in the header
  - Theme preference stored in `localStorage`

- ⭐ **Event Schedule**
  - Clean, responsive table layout
  - Covers full-day sessions from keynote to closing

- ⭐ **Form Submission Success Simulation**
  - On form submit:
    - Validates required fields
    - Displays a success message
    - Resets the form
    - Mimics email confirmation behavior

---

## 🗂 Project Structure

```text
.
├── index.html   # Main single-page layout, structure & content
├── style.css    # All styling (light/dark theme, layout, responsive design)
└── script.js    # Countdown, theme toggle, smooth scroll, form logic
