import {useState} from 'react';

import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import Todos from './components/Todos';
import Empty from './components/Empty';


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

      <Info 
        todosLength={todos.length}
        totalCounts={getTotalCounts()}
        onDelete={() => setTodos([])}
      />


        {todos.length > 0 ? (
            <Todos 
              todos={todos}
              onSubstraction={(index) => handleSubstractionCount(index)}
              onAddition={(index) => handleAdditionCount(index)}
            />

          ) : (
            <Empty />
          )
        }
      </Container>
    </>
  );
}

export default App;
