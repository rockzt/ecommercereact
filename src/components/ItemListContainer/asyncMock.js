const products = [
    { id: 1, sku: 'P01', productName: 'Republic Of Gamer', category: 'Laptops', qty: 2, img: 'https://via.placeholder.com/100/3498db/ffffff' },
    { id: 2, sku: 'P02', productName: '10.5 Samsung', category: 'Tablets', qty: 3, img: 'https://via.placeholder.com/100/e74c3c/ffffff' },
    { id: 3, sku: 'P03', productName: 'Iphone 12 Pro Max', category: 'Cellphones', qty: 4, img: 'https://via.placeholder.com/100/2ecc71/ffffff' },
    { id: 4, sku: 'P04', productName: 'Ergonomic Logitech', category: 'Keyboards', qty: 1, img: 'https://via.placeholder.com/100/3498db/ffffff' },
    { id: 5, sku: 'P05', productName: 'HP JetBlack', category: 'Printers', qty: 2, img: 'https://via.placeholder.com/100/e74c3c/ffffff' },
    { id: 6, sku: 'P06', productName: 'Razer Limited Edition', category: 'Headphones', qty: 6, img: 'https://via.placeholder.com/100/2ecc71/ffffff' },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}