# [Bootstrap](https://getbootstrap.com/)

## 1. Start With the Problem

“What if we want beautiful responsive UI fast?”

> Bootstrap is a CSS framework with ready-made classes/components.

## 2. What a Framework Is

Simple explanation:

```text id="a5b4f2"
CSS Framework = pre-written CSS classes
```

Instead of writing:

```css id="v2m7n8"
button {
  background: blue;
  padding: 10px;
}
```

We simply use:

```html id="u9x3y1"
<button class="btn btn-primary"></button>
```

## 3. Setup Bootstrap

[Bootstrap Official Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## 4. Utility Classes

We will use Tailwind for this.
and we do not mix 2 frameworks in 1 project.

### Container

```html id="m1v7k3"
<div class="container"></div>
```

gives responsive width

## Row + Columns

```html id="p4d8n6"
<div class="row">
  <div class="col">1</div>
  <div class="col">2</div>
</div>
```

Bootstrap grid has 12 columns

## 5. Buttons

```html id="g8k2w5"
<button class="btn btn-primary">Click Me</button>
```

Show variants:

```html id="f4j7t1"
btn-success btn-danger btn-warning
```

## 6. Cards

```html id="h2q9v6"
<div class="card p-3">
  <h2>Title</h2>
  <p>Description</p>
</div>
```

## 7. Navbar

Only basic [navbar](https://getbootstrap.com/docs/5.3/components/navbar/).

## 8. Best Mini Project

Build any ONE:

- Navbar
- Responsive cards
- Footer

## 9. Bootstrap Philosophy

Very important line:

> **Bootstrap trades flexibility for speed.**

Meaning:

- Faster development
- Less custom CSS

## 10. Real-World Mention

Bootstrap is used for:

- admin dashboards
- quick prototypes
- startup MVPs
- freelancing projects

### One-Line Definition

> Bootstrap is a CSS framework that provides ready-made classes and responsive components to build websites quickly.
