# PAKGO

**Pack up. Go places.**

PAKGO is a fictional travel backpack brand landing page created as part
of a website-building assessment. The website presents the PAKGO Alpine
Backpack through a responsive layout, campaign imagery, testimonials,
and an alternating image-and-text gallery.

## Overview

The website is designed to feel like a modern, approachable
outdoor-lifestyle brand. Its visual direction combines a clean editorial
layout with warm earthy colors, expressive typography, and minimalist
campaign illustrations.

## Features

-   Responsive header with desktop navigation and a mobile dropdown menu
-   Hero section featuring the PAKGO Alpine Backpack
-   Three-column testimonial section with placeholder customer profiles
    and copy
-   Four-row gallery with alternating image and text layouts
-   Footer with brand information and section navigation
-   Scroll-to-top button
-   Hover interactions and responsive styling
-   Visible section and element labels included for the assessment

## Built With

-   React
-   TypeScript
-   Vite
-   Tailwind CSS
-   HTML and CSS

## Project Structure

``` text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Testimonials.tsx
│   ├── Gallery.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
├── App.tsx
└── index.css

public/
└── images/
    ├── backpack.png
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    └── gallery-4.png
```


## Brand Color Palette

### Primary brand colors

  Color           Hex         Usage
  --------------- ----------- --------------------------------
  Cream           `#F5F1E8`   Main page background
  Leather Brown   `#79583C`   Primary buttons and accents
  Dark Brown      `#4B2E1B`   Headings and brand text
  Muted Olive     `#85866A`   Secondary headings and accents

### Supporting colors

  Color          Hex         Usage
  -------------- ----------- -------------------------------------
  Sage Gray      `#686B60`   Body text and descriptions
  Warm Sand      `#E5DDCE`   Borders, dividers, and image frames
  Soft Ivory     `#FAF8F2`   Cards and content backgrounds
  Footer Beige   `#EDE8DC`   Footer background

### Interaction colors

  Color          Hex         Usage
  -------------- ----------- ---------------------------
  Deep Leather   `#5F422C`   Brown button hover state
  Forest Olive   `#535F40`   Scroll-to-top hover state

The four primary colors establish the brand identity. Supporting and
interaction colors are used for layout contrast, readability, and hover
feedback.

## Getting Started

### Prerequisites

-   Node.js
-   npm

### Installation

1.  Clone or download this repository.

2.  Open the project folder in a terminal.

3.  Install the dependencies:

    ``` bash
    npm install
    ```

4.  Start the local development server:

    ``` bash
    npm run dev
    ```

5.  Open the local URL shown in the terminal.

### Production Build

To create a production build:

``` bash
npm run build
```

To preview the production build locally:

``` bash
npm run preview
```

## Notes

-   PAKGO is a fictional brand created for an assessment project.
-   Testimonial names, portraits, and review copy are placeholders and
    should not be interpreted as verified customer endorsements.
-   Campaign and product imagery are used for the website presentation.
-   The project is intended as a front-end website demonstration; it
    does not include real product checkout or payment functionality.

## Deployment

The website can be published using a hosting platform that supports Vite
projects, such as Vercel. Connect the project repository, use the
standard Vite build command (`npm run build`), and set the output
directory to `dist`.

------------------------------------------------------------------------

Created as part of a website-building assessment.
