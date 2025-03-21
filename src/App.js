import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import Cardlist from './components/Cardlist';
import { items } from './data';
import { useState } from 'react';


function App() {

  const [itemsData,setItemsData] = useState(items)

  // الزراير والاضافه اخر فيديو
  const allCategory =['الكل' , ...new Set(items.map((i)=> i.Category))]
  // الزراير والاضافه اخر فيديوend


  // filter by category الزراير بتاعت الكل فطار غدا عشاء
  const filterbyCategory = (cat)=>{
    // زورار الكل
    if (cat === "الكل"){
      setItemsData(items)
    }else {
    // زورار الكلend
    const newAarry = items.filter((item)=> item.Category === cat)
    setItemsData(newAarry)
    }
  }


  // زورار البحث   Search
  const filterbySearch = (word)=>{
    if (word !== "") {
      const newAarry = items.filter((item) => item.title === word)
      setItemsData(newAarry)
    }
  }

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
      <Header/>
      <Category filterbyCategory={filterbyCategory} allCategory={allCategory} />
      <Cardlist itemsData={itemsData}/>
      </Container>
    </div>
  );
}
export default App;
