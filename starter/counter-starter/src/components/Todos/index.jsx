import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Todos.module.css';

import plusicon from '../../assets/plus-icon.svg';
import minusicon from '../../assets/minus-icon.svg';


const Todos = (props) => {
  return (
    <div className={styles.todos}>
              {props.todos.map((todo, index, arr) =>{

                return(
                  <div 
                    key={index} 
                    // className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}
                    className={classnames(styles.todo, {
                      [styles.todoDivider]: !(arr.length === index + 1)
                    })}                 
                   >

                    {todo.title}

                    <div className={styles.todoIconWrapper}>
                        <div className={styles.todoCount}>
                          {todo.count}
                        </div>

                        <button onClick={() => props.onSubstraction(index)} className={styles.todoActionButton}>
                          <img src={minusicon} alt='minus icon'></img>
                        </button>

                        <button onClick={() => props.onAddition(index)} className={styles.todoActionButton}>
                          <img src={plusicon} alt='plus icon'></img>
                        </button>
                    </div>
                  </div>
                )
              } )}
            </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    const: PropTypes.number
  })),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func
}

export default Todos