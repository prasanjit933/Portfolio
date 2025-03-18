import styles from "../ButtonsContainer.module.css"
const ButtonContainer = () => {

    return <div className ={styles.buttonscontainer}>
    <button className={styles.buttons}>C</button>
    <button className={styles.buttons}>1</button>
    <button className={styles.buttons}>2</button>
    <button className={styles.buttons}>3</button>
  </div>

};

export default ButtonContainer;