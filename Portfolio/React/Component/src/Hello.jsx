function Hello() {
    
    let myName ="Prasanjit";

    let fullName= () => {
        return "Prasanjit Rout";
    }
    return <h1>
        Future Speaks by {fullName()}
    </h1>
}
export default Hello;