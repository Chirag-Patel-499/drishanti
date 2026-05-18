const API_BASE_URL = 'http://localhost:8000';

export const API_URLS = {
    PRODUCTS: `${API_BASE_URL}/api/products/`,
    CATEGORIES: `${API_BASE_URL}/api/categories/`,
    SUBCATEGORIES: `${API_BASE_URL}/api/subcategories/`,
    BESTSELLERS: `${API_BASE_URL}/api/products/bestsellers/`,
    FEATURED: `${API_BASE_URL}/api/products/featured/`,
    PRODUCT_DETAIL: (slug) => `${API_BASE_URL}/api/products/${slug}/`,
    CART: `${API_BASE_URL}/api/cart/`,
    CLEAR_CART: `${API_BASE_URL}/api/cart/clear/`,
    WISHLIST: `${API_BASE_URL}/api/wishlist/`,
    CREATE_ORDER: `${API_BASE_URL}/api/create-order/`,
    CREATE_COD_ORDER: `${API_BASE_URL}/api/create-cod-order/`,
    VERIFY_PAYMENT: `${API_BASE_URL}/api/verify-payment/`,
    COUPONS_APPLY: `${API_BASE_URL}/api/coupons/apply/`,
    ORDERS: `${API_BASE_URL}/api/orders/`,
    ORDER_DETAIL: (id) => `${API_BASE_URL}/api/orders/${id}/`,
};

export default API_BASE_URL;
