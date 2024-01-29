import  { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ id: null, name: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddItem = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users', newItem);
      setData([...data, response.data]);
      setNewItem({ id: null, name: '' });
    } catch (error) {
      console.error('Error adding item:', error);
      
    }
  };

  const handleUpdateItem = async (id) => {
    try {
      const newData1={
        id:id,
        name:newItem
      }
      await axios.put(`http://localhost:8000/users/${id}`, { data: newData1 });
      setData(data.map(item => (item.id === id ? { ...item, newData1 } : item)));
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async id => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleNewItemChange = e => {
    setNewItem({ id: JSON.stringify(Date.now()) , name: e.target.value });
  };

  return (
    <div>
      <h1>JSON File CRUD Operations</h1>
      
      <ul className='flex flex-wrap gap-10 m-20'>
        {data.map(item => (
          <li key={item.id}>
            {item.name}{' '}
            <div className='flex gap-2'>
            <button onClick={() => handleUpdateItem(item.id)}>
              Update
            </button>{' '}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </div>
            
          </li>
        ))}
      </ul>

      <div>
        <h1>Add New Items</h1>
        <input
          type="text"
          placeholder="New Item Name"
          value={newItem.name}
          onChange={handleNewItemChange}
        />
        <button onClick={handleAddItem}>Add New Item</button>
      </div>
    </div>
  );
};

export default CrudComponent;

  

  