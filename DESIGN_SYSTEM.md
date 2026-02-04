# Design System

> "Simplicity is the architecture."

## 1. Principles
*   **Essential Only**: If it can be removed, remove it.
*   **Grid Locked**: Every element sits on a 4px grid.
*   **Premium Feel**: Transitions are physics-based (`duration-800`), not linear.

## 2. Typography
We use only two font families. No exceptions.

*   **Primary (Sans)**: `Inter` (`font-sans`)
    *   *Usage*: Headers, Body text, UI elements.
*   **Secondary (Mono)**: `JetBrains Mono` (`font-mono`)
    *   *Usage*: Code snippets, data values, "machine" aesthetic elements.

## 3. Colors
The palette is restricted to high-contrast neutrals and a single feature color.

| Name | Value | Usage |
| :--- | :--- | :--- |
| **Void Black** | `#050505` | Main background. Deepest layer. |
| **Near Black** | `#0A0A0A` | Secondary background, cards. |
| **Rose Orange** | `#FF7F50` | Primary Brand Color. ASCII visualizations, key highlights. |
| **Glow Orange** | `#FF4500` | Active states, high-energy variants. |
| **Old Gold** | `#B3A369` | Georgia Tech specific highlights. |
| **White** | `#FFFFFF` | Primary text. |
| **Neutral 500** | `#737373` | Secondary text, subtitles. |

## 4. Components

### Badges & Labels
*   **Text Size**: `text-[11px]` (uppercase, `tracking-widest`).
*   **Color**: `text-neutral-500` (label), `text-neutral-300` (value).

### Interactions
*   **Transitions**: Standard duration is `800ms` for entrances, `300ms` for hover.
*   **Hover**: Subtle brightness boost or glow. Never change layout.
