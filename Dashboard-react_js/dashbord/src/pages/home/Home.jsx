import React from 'react'
import "./home.scss"
import TopBox from '../../components/TopBox/TopBox'
import ChartBox from '../../components/ChartBox/ChartBox'
import BarChartBox from '../../components/BarChartBox/BarChartBox'
const Home = () => {
  const box2Data={
    title:"Total Users",
    points:"11.238",
    icon:"user.svg",
    per:"45"
  }
  const box3Data={
    title:"Total Products",
    points:"538",
    icon:"product.svg",
    per:"78"
  }
  const box5Data={
    title:"Total Ratio",
    points:"3.2",
    icon:"chart.svg",
    per:"55"
  }
  const box6Data={
    title:"Total Revenue",
    points:"$56.30",
    icon:"revenueIcon.svg",
    per:"-24"
  }
  return (
    <div className='home'>
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><ChartBox title={box2Data.title} points={box2Data.points}
       icon={box2Data.icon} per={box2Data.per}/></div>
      <div className="box box3"><ChartBox title={box3Data.title} points={box3Data.points}
       icon={box3Data.icon} per={box3Data.per}/></div>
      <div className="box box4"></div>
      <div className="box box5"><ChartBox   title={box5Data.title} points={box5Data.points}
       icon={box5Data.icon} per={box5Data.per}/></div>
      <div className="box box6"><ChartBox  title={box6Data.title} points={box6Data.points}
       icon={box6Data.icon} per={box6Data.per} /></div>
      <div className="box box7">box7</div>
      <div className="box box8"><BarChartBox color={"lightgreen"} title={"Total Visit"}/></div>
      <div className="box box9"><BarChartBox color={"pink"} title={"Total Profit"}/></div>
    </div>
  )
}

export default Home