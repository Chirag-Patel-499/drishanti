from django.urls import path
from .views import (
    create_razorpay_order, verify_payment, get_products, get_bestsellers, 
    get_featured, get_product_detail, wishlist_manager, cart_manager, 
    clear_cart, apply_coupon, create_cod_order, get_user_orders, get_order_detail,
    get_categories, get_subcategories
)

urlpatterns = [
    path('products/', get_products),
    path('products/bestsellers/', get_bestsellers),
    path('products/featured/', get_featured),
    path('products/<slug:slug>/', get_product_detail),
    
    path('categories/', get_categories),
    path('subcategories/', get_subcategories),
    
    path('wishlist/', wishlist_manager),
    path('cart/', cart_manager),
    path('cart/clear/', clear_cart),
    path('coupons/apply/', apply_coupon),
    path('create-order/', create_razorpay_order),
    path('create-cod-order/', create_cod_order),
    path('verify-payment/', verify_payment),
    path('orders/', get_user_orders),
    path('orders/<int:pk>/', get_order_detail),
]
