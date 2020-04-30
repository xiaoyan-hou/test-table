// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import _ from 'lodash';

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    id: i,
    content: `content-${i}`
  });
}

function App() {
  const [list, setList] = useState(data);
  const handleChange = (val, rows) => {
    let newData = [...list];
    newData[newData.findIndex((o) => o.id === rows.id)].content = val;
    setList(newData);
  }

  const handleAdd = () => {
    console.log('data', list);
    const lastId = list[list.length -1].id;
    const newData = {
      id: lastId + 1,
      content: `content-${lastId + 1}`
    };
    setList([...list, newData]);
  };

  const columns = [
    {
      dataIndex: 'id'
    },
    {
      dataIndex: 'id',
      render: (val) => {
        return <h2>{val} : {Math.random()}</h2>
      }
    },
    {
      dataIndex: 'content',
      render: (val, rows) => {
        return <Input value={val} onChange={(e) => handleChange(e.target.value, rows)} />
      }
    }
  ]
  return (
    <div className="App">
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        columns={columns}
        dataSource={list}
        rowKey="id"
      />
    </div>
  );
}

export default App;
