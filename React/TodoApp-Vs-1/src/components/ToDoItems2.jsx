function ToDoItems2 () {
    let todoName ="Go To College";
    let todoDate = "5/10/2023";
    
    
        return (
            <div class="row  kg-row">
            <div class="col-6">{todoName}</div>
            <div class="col-4">{todoDate}</div>
            <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
       </div>
    
        );
    }
    
    export default ToDoItems2;