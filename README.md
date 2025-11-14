# K2 Shilajit Store

A minimal, fully functional online store for selling shilajit products.

## Features

- **Product Catalog**: Display of 6 different shilajit products
- **Shopping Cart**: Add, remove, and update quantities
- **Checkout System**: Complete checkout form with order processing
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Storage**: Cart persists between page refreshes
- **Modern UI**: Clean, professional design with smooth animations

## How to Use

1. Open `index.html` in your web browser
2. Browse products and click "Add to Cart"
3. Click the cart icon (🛒) to view your cart
4. Adjust quantities or remove items
5. Click "Checkout" to place an order
6. Fill in your details and submit

## Files

- `index.html` - Main store page
- `styles.css` - All styling and responsive design
- `script.js` - Cart functionality and checkout logic

## Customization

### Adding Products
Edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        description: "Product description",
        price: 49.99,
        image: "💎" // Emoji or you can use image URLs
    },
    // Add more products...
];
```

### Changing Colors
Edit the color values in `styles.css`:
- Primary color: `#2c3e50`
- Accent color: `#667eea`
- Success color: `#27ae60`

### Store Name
Change "K2 Shilajit" in `index.html` to your preferred name.

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Notes

- This is a front-end only store. For production use, you'll need to:
  - Connect to a payment gateway (Stripe, PayPal, etc.)
  - Set up a backend server to process orders
  - Add email notifications
  - Implement inventory management


