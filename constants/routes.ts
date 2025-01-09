type TRouteNames = 'stock' | 'favourites' | 'deal'

interface IRoute {
  route: string
  name: string
}

export const ROUTES: Record<TRouteNames, IRoute> = {
  stock: {
    route: '/',
    name: 'Склад',
  },
  favourites: {
    route: '/favourites',
    name: 'Избранное',
  },
  deal: {
    route: '/deal',
    name: 'Сделки',
  }
}