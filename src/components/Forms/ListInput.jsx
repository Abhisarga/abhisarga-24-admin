'use client'
import { useState } from "react";
import { DeleteIcon } from "../Icons/Icons";
export function ListInput({ label, getContent }) {
    const [items, setItems] = useState([
        { id: 1 },
        // Add more initial items as needed
    ]);

    const handleAddItem = () => {
        const newItem = {
            id: items.length + 1,
            content: getContent(items.length + 1),
        };

        setItems([...items, newItem]);
    };
    const handleDeleteItem = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        const updatedItemsWithIds = updatedItems.map((item, index) => ({
            ...item,
            id: index + 1,
        }));
        setItems(updatedItemsWithIds);
    };

    return (<>

        {items.map((item) => (
            <ListItem key={item.id} id={item.id} label={label} handleDelete={handleDeleteItem} content={getContent(item.id)}>

            </ListItem>
        ))}

        <button
            type="button"
            onClick={handleAddItem}
            className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700 hover:shadow-lg"
        >
            {`Add ${label}`}
        </button>

    </>);
}

export function ListItem({ id, label, handleDelete, content, children }) {
    return (<>
        <div id={id} className="bg-gray-50 rounded-lg w-max-3/4 shadow-lg px-4 space-y-4 pt-2 pb-4">
            <div className="flex justify-between items-center py-3 px-4 border-b ">
                <h3 className="font-normal text-gray-800 ">
                    {`${label} ${handleDelete && id || ''}`}
                </h3>
                {handleDelete && <button
                    type="button"
                    onClick={() => handleDelete(id)}
                    className="flex justify-center items-center w-12 h-12 text-sm font-semibold rounded-full border  text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none  hover:outline-4  hover:text-red-500 "
                >
                    <DeleteIcon />
                </button>}
            </div>
            {content}
            {children}


        </div>
    </>);
}