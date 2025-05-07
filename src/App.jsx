import './App.css'
import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import data from './data';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
