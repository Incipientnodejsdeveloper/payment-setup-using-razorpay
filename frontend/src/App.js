import ProductList from "./Products";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of product 1",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category A",
    brand: "Brand X",
    quantity: 100,
    rating: 4.5,
    numReviews: 10,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of product 2",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category B",
    brand: "Brand Y",
    quantity: 50,
    rating: 3.7,
    numReviews: 5,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of product 3",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category A",
    brand: "Brand Z",
    quantity: 75,
    rating: 4.2,
    numReviews: 8,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of product 4",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category C",
    brand: "Brand X",
    quantity: 20,
    rating: 4.9,
    numReviews: 15,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description of product 5",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category B",
    brand: "Brand Y",
    quantity: 60,
    rating: 3.2,
    numReviews: 3,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description of product 6",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category A",
    brand: "Brand Z",
    quantity: 120,
    rating: 4.6,
    numReviews: 12,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description of product 7",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category C",
    brand: "Brand X",
    quantity: 10,
    rating: 4.8,
    numReviews: 20,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description of product 8",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category B",
    brand: "Brand Y",
    quantity: 30,
    rating: 3.9,
    numReviews: 7,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  },
  {
    id: 9,
    name: "Product 9",
    description: "Description of product 9",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Category A",
    brand: "Brand Z",
    quantity: 40,
    rating: 4.1,
    numReviews: 6,
    link: "https://rzp.io/l/mrDKPkQ4Wv"
  }];

function App() {
  return (
    <div style={{padding:"1rem"}}>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
