# PremiumShop - Copilot Instructions

## Project Overview
This is a Next.js 14+ e-commerce landing page for selling premium subscription slots (ChatGPT, Netflix, YouTube, etc.) at affordable prices.

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: React Icons
- **Language**: TypeScript

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
└── data/
    └── products.ts        # Product data and Zalo config
```

## Key Files
- `src/data/products.ts` - Contains all product data, categories, testimonials, and Zalo configuration
- `src/app/globals.css` - Global styles with Tailwind v4 @theme directive
- `src/components/` - All UI components (Header, Footer, ProductCard, etc.)

## Adding New Products
To add a new product, update the `products` array in `src/data/products.ts`:
```typescript
{
  id: 'unique-id',
  slug: 'url-slug',
  name: 'Product Name',
  // ... other fields
}
```

## Zalo Configuration
Update `ZALO_CONFIG` in `src/data/products.ts` with your actual Zalo ID and link.

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Deployment
Deploy to Vercel by connecting your GitHub repository or using `vercel` CLI.
