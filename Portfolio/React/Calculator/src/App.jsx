
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import styles from './App.module.css'


function App() {

  return <div className = {styles.calculator}>
  <Display/>
  <ButtonsContainer/>
  
  </div>
   
  
}

export default App;
