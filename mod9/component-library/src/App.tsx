import './App.css';
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};

function App() {
  return (
    <>
      <h1 className="text-6xl mb-5 text-center">Components Library</h1>

      {/* ALERT BOX */}
      <section>
        <h2 className="text-3xl mb-10 text-center justify-around p-1">Alert Box</h2>
        <AlertBox type="success" message="You Did IT!!!" />
        <AlertBox type="error" message="You did NOT do it!!!" />
        <AlertBox type="info" message="Here's what up..." />
        <AlertBox type="warning" message="Do NOT do what you're about to do" />
        <AlertBox
          type="success"
          message="Against all odds, you have done it!"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      </section>

      {/* USER PROFILE CARD  */}
      <section className="mt-10 flex flex-col items-center">
        <h2 className="text-3xl mb-5 text-center">User Profile</h2>

        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        />

        <h2 className="text-2xl mt-10 text-center">Product Display</h2>

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>

        <div className="text-sm text-gray-500 mt-2">
          Last login: 2 hours ago
        </div>
      </section>
    </>
  );
}

export default App;
