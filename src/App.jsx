// App.jsx
import { CartProvider } from "./components/CartContext";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useCart } from "./components/CartContext";

const products = [
    { id: 1, name: "Điện thoại", price: 500, image: "/dienthoai.png" },
    { id: 2, name: "Laptop", price: 1000, image: "/laptop.png" },
    { id: 3, name: "Tai nghe", price: 100, image: "/tainghe.png" },
    { id: 4, name: "Ti vi", price: 2000, image: "/tivi.png" },
    { id: 5, name: "Tủ lạnh", price: 3000, image: "/tulanh.png" },
    { id: 6, name: "Chuột", price: 50, image: "/chuot.png" },
];

const ProductList = () => {
    const { addToCart } = useCart();

    return (
        <div>
            <h2 className="mb-3">Danh sách sản phẩm</h2>
            <Row>
                {products.map(product => (
                    <Col sm={6} md={4} key={product.id} className="mb-3">
                        <div className="card h-100">
                            <div className="d-flex justify-content-center">
                                <img
                                    src={product.image}
                                    className="card-img-top w-50"
                                    alt={product.name}
                                    style={{ backgroundPosition: 'center' }}
                                />
                            </div>

                            < div className="card-body" >
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}$</p>
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div >
    );
};

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, total } = useCart();

    return (
        <div className="card mt-3 mt-md-0">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Giỏ hàng</h5>
            </div>
            <div className="card-body">
                {cart.length === 0 ? (
                    <p>Giỏ hàng trống</p>
                ) : (
                    <ul className="list-group mb-3">
                        {cart.map(item => (
                            <li key={item.id} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6 className="my-0">{item.name}</h6>
                                        <small className="text-muted">{item.price}$ x {item.quantity}</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="btn-group btn-group-sm me-2">
                                            <button className="btn btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className="btn btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                        <button className="btn btn-sm btn-danger"
                                            onClick={() => removeFromCart(item.id)}>X</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <strong>Tổng cộng:</strong>
                            <strong>{total}$</strong>
                        </li>
                    </ul>
                )}
                {cart.length > 0 && (
                    <button className="btn btn-success w-100">Thanh toán</button>
                )}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <CartProvider>
            <Container className="py-4">
                <h1 className="text-center mb-4">🛒 Ứng dụng Giỏ Hàng</h1>
                <Row>
                    <Col md={7}>
                        <ProductList />
                    </Col>
                    <Col md={5}>
                        <Cart />
                    </Col>
                </Row>
            </Container>
        </CartProvider>
    );
};

export default App;