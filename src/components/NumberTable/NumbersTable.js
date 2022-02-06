
import './NumbersTable.css'

function NumbersTable({limit}) {
    let numberList = []
    for (let i = 1 ; i <= limit; i++) { 
        if (i % 2 === 0) {
            numberList.push([i, 'red'])
        } else (
            numberList.push([i, 'white'])
        )
    }
    
    const listItems = numberList.map((number) => 
    <div className="number" style={{backgroundColor:`${number[1]}`}}>{number[0]}</div>) ;
    
    
    return ( 
        <div className="table">
            {listItems}
        </div>
     );
}

export default NumbersTable;