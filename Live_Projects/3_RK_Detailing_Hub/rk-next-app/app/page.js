"Use client"
import Hero from "@/components/home-components/Hero";
import About_home from "@/components/home-components/About_home";
import Service_home from "@/components/home-components/Service_home";
import Washing_plan from "@/components/home-components/Washing_plan";
import Points_wash from "@/components/home-components/Points_wash";



export default function Home() {
  
  return (
   <div className="">
    
     <Hero/>
    <About_home/>
    <Service_home/>
    <Washing_plan/>
    <Points_wash/>
   </div>
  );
}
