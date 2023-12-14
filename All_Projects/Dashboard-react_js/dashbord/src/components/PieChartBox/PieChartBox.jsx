import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import "./pieChartBox.scss"
const PieChartBox = () => {
    const dataPie=[
        { name:"Mobile",value:"400",color:"#0088FE" },
        { name:"Desktop",value:"300",color:"#00C49F" },
        { name:"Laptop",value:"250",color:"#FFBB28" },
        { name:"Tablet",value:"200",color:"#FF8042" },

    ]

    const data = [
        { name: 'GroupA', value: 400 ,color:"#0088FE"},
        { name: 'GroupB', value: 300 , color:"#00C49F"},
        { name: 'GroupC', value: 300 , color:'#FFBB28' },
        { name: 'GroupD', value: 200 , color:'#FF8042'},
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='pieChartBox'>
        <h1>Lead By Source</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
        <PieChart width={800} height={400} >
        <Tooltip contentStyle={{ background: "white",borderRadius: "5px",}}/>
        <Pie
          data={data}
          
          innerRadius={"70%"}
          outerRadius={"90%"}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       
      </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="options">
        {data.map((elm)=>(
            <div className="option" key={elm.name}>
                <div className="title">
                   <div className="dot" style={{backgroundColor:elm.color}}> </div>
                   <span>{elm.name}</span>
                 </div>
                  <span>{elm.value}</span>
            </div>
        ))}
    </div>
        
    </div>

  )
}

export default PieChartBox