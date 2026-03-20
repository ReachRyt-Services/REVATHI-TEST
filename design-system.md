# Design System Specification: Revathi Institutions (React Migration)

## 1. Visual Philosophy: "Clinical Authority"
The design follows a **Headless/Bespoke** approach. It moves away from generic templates to an **Apple-inspired Academic** aesthetic—emphasizing white space, precision, and high-quality photography to reflect the institution's connection to the 300-bed Revathi Medical Center (RMC).

---

## 2. Color Palette
These HEX codes are selected to balance medical professionalism with modern student-focused energy.

| Role | Color Name | HEX Code | Preview |
| :--- | :--- | :--- | :--- |
| **Primary** | Deep Medical Blue | `#003366` | *Trust, Authority, Heritage* |
| **Secondary** | Hospital Teal | `#008080` | *Clinical, Clean, Modern* |
| **Background** | Soft Slate Grey | `#F5F7FA` | *Neutral, Section Contrast* |
| **Surface** | Pure White | `#FFFFFF` | *Minimalism, Clarity* |
| **Typography** | Charcoal Text | `#333333` | *High Readability* |

---

## 3. Typography & Hierarchy
* **Font Family:** Geometric Sans-Serif (e.g., `Inter`, `SF Pro Display`, or `Public Sans`).
* **Scale:**
    * **H1 (Hero):** 48px - 64px, Semi-Bold (Primary Blue)
    * **H2 (Sections):** 32px, Medium (Primary Blue)
    * **Body:** 16px - 18px, Regular (Charcoal)
    * **CTA Labels:** 14px, Bold, Uppercase/Tracking +1px.

---

## 4. UI Design Features
To ensure a "Premium React" feel, the following interactive features will be implemented:

### **A. Component Styling**
* **Corner Radius:** Unified **12px** on all cards, buttons, and input fields for a soft, modern touch.
* **Shadows:** "Layered" soft shadows. Use `0 4px 6px -1px rgb(0 0 0 / 0.1)` for static elements and `0 10px 15px -3px rgb(0 0 0 / 0.1)` on hover.
* **Glassmorphism:** Use a 5% opacity blur on the **Sticky Navigation Bar** to give an "Apple" feel when scrolling over content.

### **B. Animations (Framer Motion / AOS)**
* **Micro-interactions:** Buttons should have a slight `scale: 0.98` on click.
* **Section Entrance:** Smooth fade-in and slide-up (30px) as the user scrolls into view.
* **Loading States:** Custom skeleton loaders in **Soft Slate Grey** to maintain perceived speed.

### **C. Conversion-Focused Elements**
* **The "Floating" Enquiry Widget:** A fixed-position sidebar widget on desktop (bottom-right) that simplifies to a single "Apply" button on mobile.
* **Course Discovery Grid:** Interactive cards that highlight with a Teal border on hover.
* **High-Bandwidth Media:** Lazy-loading for high-res images of RMC and Campus life to ensure rural network performance.

---

## 5. Technical Implementation (React)
```css
/* CSS Variables for Implementation */
:root {
  --primary-blue: #003366;
  --secondary-teal: #008080;
  --neutral-bg: #F5F7FA;
  --text-primary: #333333;
  --white: #FFFFFF;
  --radius-main: 12px;
}
```
