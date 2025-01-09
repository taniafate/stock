import { ROUTES } from "./routes";

export const NAVIGATION_LINKS = [
  { id: 1,
    title: ROUTES.favourites.name,
    href: ROUTES.favourites.route,
    icon: 'i-favourites'
  },
  { id: 2,
    title: ROUTES.stock.name,
    href: ROUTES.stock.route,
    icon: 'i-stock'
  },
  { id: 3,
    title: ROUTES.deal.name,
    href: ROUTES.deal.route,
    icon: 'i-deal'
  },
]