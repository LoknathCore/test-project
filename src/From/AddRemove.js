import React, { useState } from 'react';

const AddRemove = () => {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    return (
        <div className="App">
            <h3 className='my-16'><a href="https://cluemediator.com">Clue Mediator</a></h3>
            {inputList.map((x, i) => {
                return (
                    <div className="box w-1/2 mx-auto">
                        <input
                            name="firstName"
                            placeholder="Enter First Name"
                            value={x.firstName}
                            onChange={e => handleInputChange(e, i)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input
                            // className="ml10"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={x.lastName}
                            onChange={e => handleInputChange(e, i)}
                            className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div className="btn-box my-8">
                            {inputList.length !== 1 && <button
                                type='button'
                                className="mr10 btn"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button type='button' className='btn' onClick={handleAddClick}>Add</button>}
                        </div>
                    </div>
                );
            })}
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
        </div>
    );
}


export default AddRemove;




