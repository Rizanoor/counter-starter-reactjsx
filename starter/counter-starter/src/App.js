import {useState} from 'react';
import './App.css';  

import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';

// import shoppingIcon from './assets/shopping-icon.svg';
import plusicon from './assets/plus-icon.svg';
import minusicon from './assets/minus-icon.svg';


function App() {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Onigiri', count: 1},
    {title: 'Golda Coffee', count: 1},
  ]);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert('No blank list')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index) => { 
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1
    
    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => { 
    const newTodos = [...todos]

    if (newTodos[index].count > 0) {
      // selama jumalah count masih di atas 0
      // bisa lakuin pengurangan
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // kalo udah 0 dan masih dikurangin juga
      // hapus array value dengan index yang sesuai
      newTodos.splice(index, 1)
    }
    
    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }



  return (
    <>
      <Navbar />

      <Container>
       <SearchInput 
        onSubmit={handleSubmit}
        onChange={(e) => setValue(e.target.value)}
        value={value}
       />

      <div className='info'>
        <div className='info-total'>
          <p>{`Total List: ${todos.length}`}</p>
        </div>
        
        <div className='info-total'>
          <p>{`Total Counts: ${getTotalCounts()}`}</p>
        </div>

        <button onClick={() => setTodos([])} className='delete-all-button'>
          Delete All List
        </button>
      </div>


        {todos.length > 0 ? (
            <div className='todos'>
              {todos.map((todo, index, arr) =>{

                return(
                  <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>

                    {todo.title}

                    <div className='todo-icon-wrapper'>
                        <div className='todo-count'>
                          {todo.count}
                        </div>

                        <button onClick={() => handleSubstractionCount(index)} className='todo-action-button'>
                          <img src={minusicon} alt='minus icon'></img>
                        </button>

                        <button onClick={() => handleAdditionCount(index)} className='todo-action-button'>
                          <img src={plusicon} alt='plus icon'></img>
                        </button>
                    </div>
                  </div>
                )
              } )}
            </div>
          ) : (
            <div>
              Kosong
            </div>
          )
        }
      </Container>
    </>
  );
}

export default App;
