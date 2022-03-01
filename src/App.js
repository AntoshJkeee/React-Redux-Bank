import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AiFillCloseCircle} from 'react-icons/ai';
import {addCustomerAction, removeCurrentCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => {
    return state.cash.cash
  })

  const customers = useSelector((state) => {
    return state.customers.customers
  })

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    let newCustomer = {
      name: name,
      id: new Date()
    }
    dispatch(addCustomerAction(newCustomer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCurrentCustomerAction(customer))
  }

  return (
    <div className="App">
      <h1 className="main-text">Bank of <strong>Sereda Anton</strong></h1>
      <div className="btns">
        <button onClick={() => addCash(Number(prompt('Сколько денег вы хотите добавить ?')))}>
          Добавить cash
        </button>
        <button onClick={() => getCash(Number(prompt('Сколько денег вы хотите снять ?')))}>
          Снять cash
        </button>
        <button onClick={() => addCustomer(prompt('Введите имя пользователя'))}>
          Добавить пользователя
        </button>
      </div>
      <div className="result">
        <h3>Результат: {cash} долларов США</h3>
      </div>
      <div className="result">
        {customers.length ?
          <>
            <h3>Пользователи банка: <strong>{customers.length}</strong></h3>

            {customers.map((customer) => {
                return <div className='user-info' key={customer.id}><h3>Пользователь: </h3>
                  <div className='group'><h3>{customer.name}</h3><AiFillCloseCircle
                    onClick={() => removeCustomer(customer)} className='ico'/></div>
                </div>
              }
            )}
          </> : <div>Пользователей банка нет</div>
        }
      </div>
    </div>
  );
}

export default App;
