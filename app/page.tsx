'use client'
import { useState, useEffect } from "react";
import keys from "../components/keys";
import scales from "../components/scales";
import tonalities from "../components/tonalities"; 

export default function Home() {
  

const [key, setKey] = useState(keys[0].name);
const [scale, setScale] = useState(scales[0].name);
const [tonality, settonality] = useState(tonalities[0].name);

const [sd, setSd] = useState({open_e_one: "#fff",f_one_e_one: "#fff",f_sharp_one_e_one: "#fff",g_e_one: "#fff",g_sharp_e_one: "#fff", a_e_one: "#fff",a_sharp_e_one: "#fff", b_e_one: "#fff", c_e_one: "#fff", c_sharp_e_one: "#fff", d_e_one: "#fff",d_sharp_e_one: "#fff",e_e_one: "#fff",open_a: "#fff",a_sharp_one_a: "#fff",b_one_a: "#fff",c_a: "#fff",c_sharp_a: "#fff",d_a: "#fff",d_sharp_a: "#fff",e_a: "#fff",f_a: "#fff",f_sharp_a: "#fff",g_a: "#fff",g_sharp_a:"#fff",a_a: "#fff",open_d: "#fff",d_sharp_one_d: "#fff",e_one_d: "#fff",f_d: "#fff",f_sharp_d: "#fff",g_d: "#fff",g_sharp_d: "#fff",a_d: "#fff",a_sharp_d: "#fff",b_d: "#fff",c_d: "#fff",c_sharp_d: "#fff",d_d: "#fff",open_g: "#fff",g_sharp_one_g: "#fff",a_one_g: "#fff",a_sharp_g: "#fff",b_g: "#fff",c_g: "#fff",c_sharp_g: "#fff",d_g: "#fff",d_sharp_g: "#fff",e_g: "#fff",f_g: "#fff",f_sharp_g: "#fff",g_g: "#fff",open_b: "#fff",c_one_b: "#fff",c_sharp_one_b: "#fff",d_b: "#fff",d_sharp_b: "#fff",e_b: "#fff",f_b: "#fff",f_sharp_b: "#fff",g_b: "#fff",g_sharp_b: "#fff",a_b: "#fff",a_sharp_b: "#fff",b_b: "#fff",open_e_two: "#fff",f_one_e_two: "#fff",f_sharp_one_e_two: "#fff",g_e_two: "#fff",g_sharp_e_two: "#fff",a_e_two: "#fff",a_sharp_e_two: "#fff",b_e_two: "#fff",c_e_two: "#fff",c_sharp_e_two: "#fff",d_e_two: "#fff",d_sharp_e_two: "#fff",e_e_two: "#fff",mnemonic:""}); 
    useEffect(() => {
      
      fetch(`/api/${key}/${scale}/${tonality}`).then(async function (response) {
      setSd(await response.json());
      })
      .catch(function (error) {
      console.log(error);
      })
  }, [key,scale,tonality]);
  


return (
  <>
  <div className="flex items-center gap-4 mx-4 mt-4">
    {/* scale toggle */}
    <div className="flex items-center gap-2">
      <span className="text-sm text-zinc-600 dark:text-zinc-300">Blues</span>

      <button
        onClick={() =>
          setScale((prev) => (prev === "blues" ? "spanishgypsy" : "blues"))
        }
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-300 transition-colors"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            scale === "spanishgypsy" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      <span className="text-sm text-zinc-600 dark:text-zinc-300">
        Spanish Gypsy
      </span>
    </div>
 {scale === "blues" && (
  <>
    {/* divider */}
    <span className="text-zinc-400 dark:text-zinc-500">|</span>

    {/* tonalities toggle */}
   
    <div className="flex items-center gap-2">
      <span className="text-sm text-zinc-600 dark:text-zinc-300">Major</span>

      <button
        onClick={() =>
          settonality((prev) => (prev === "major" ? "minor" : "major"))
        }
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-300 transition-colors"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            tonality === "minor" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      <span className="text-sm text-zinc-600 dark:text-zinc-300">Minor</span>
    </div>
    </>
    )}
  </div>
       

  {/*key buttons*/}
  <div className="flex space-x-2">
    {keys.map((item) => (
      <button
        key={item.name}
        onClick={() => setKey(item.name)}
        className={`${
          key === item.name
            ? 'text-slate-500 px-4 py-2 underline cursor-pointer'
            : 'px-4 py-2 cursor-pointer'
        } ${item.flat}`}
      >
        {item.displayname}
      </button>
    ))}
  </div>

{/*fretboard*/}
<svg viewBox="0, 0, 1200, 208">
      <rect width="3.42%" height="88.46%" style={{fill:"#fff"}} />
      <text x="1.44%" y="15.2%" style={{fill:"#000"}} className='notetext nopointer'>E</text>
      <text x="1.44%" y="27.7%" style={{fill:"#000"}} className='notetext nopointer'>B</text>
      <text x="1.44%" y="40.2%" style={{fill:"#000"}} className='notetext nopointer'>G</text>
      <text x="1.44%" y="52.7%" style={{fill:"#000"}} className='notetext nopointer'>D</text>
      <text x="1.44%" y="65.2%" style={{fill:"#000"}} className='notetext nopointer'>A</text>
      <text x="1.44%" y="77.7%" style={{fill:"#000"}} className='notetext nopointer'>E</text>
      
      
      <rect width="96.57%" height="88.46%" x="3.42%" style={{fill:"#000"}} />
      <rect width="0.68%" height="88.46%" x="3.42%"  style={{fill:"#ffffcc"}} />
      <rect width="96.57%" height="11.53%" x="3.42%" y="88.46%" style={{fill:"#fff"}} />
      <text x="7.2%" y="96%" style={{fill:"#000"}}>1</text>
      <text x="15.2%" y="96%" style={{fill:"#000"}}>2</text>
      <text x="23.2%" y="96%" style={{fill:"#000"}}>3</text>
      <text x="31.10%" y="96%" style={{fill:"#000"}}>4</text>
      <text x="39.34%" y="96%" style={{fill:"#000"}}>5</text>
      <text x="47.42%" y="96%" style={{fill:"#000"}}>6</text>
      <text x="55.50%" y="96%" style={{fill:"#000"}}>7</text>
      <text x="63.50%" y="96%" style={{fill:"#000"}}>8</text>
      <text x="71.60%" y="96%" style={{fill:"#000"}}>9</text>
      <text x="79.20%" y="96%" style={{fill:"#000"}}>10</text>
      <text x="87.30%" y="96%" style={{fill:"#000"}}>11</text>
      <text x="95.20%" y="96%" style={{fill:"#000"}}>12</text>

      <line x1="11.541%" x2="11.541%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="19.583%" x2="19.583%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="27.62%" x2="27.62%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="35.666%" x2="35.666%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="43.708%" x2="43.708%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="51.75%" x2="51.75%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="59.791%" x2="59.791%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="67.833%" x2="67.833%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="75.875%" x2="75.875%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="83.916%" x2="83.916%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="91.958%" x2="91.958%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
      <line x1="100%" x2="100%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />

      <line x1="3.42%" x2="100%" y1="12.5%" y2="12.5%" style={{stroke:"#d1ccc0", strokeWidth:"1"}} />
      <line x1="3.42%" x2="100%" y1="25%" y2="25%" style={{stroke:"#d1ccc0", strokeWidth:"1"}} />
      <line x1="3.42%" x2="100%" y1="37.5%" y2="37.5%" style={{stroke:"#d1ccc0", strokeWidth:"1"}} />
      <line x1="3.42%" x2="100%" y1="50%" y2="50%" style={{stroke:"#d1ccc0", strokeWidth:"2"}} />
      <line x1="3.42%" x2="100%" y1="62.5%" y2="62.5%" style={{stroke:"#d1ccc0", strokeWidth:"2"}} />
      <line x1="3.42%" x2="100%" y1="75%" y2="75%" style={{stroke:"#d1ccc0", strokeWidth:"2"}} />


      <circle cx="1.71%" cy="12.5%" r="10" stroke="#000" fill={sd.open_e_two} strokeWidth="1" />
      <circle cx="7.52%" cy="12.5%" r="10" stroke="#000" fill={sd.f_one_e_two}strokeWidth="1" />
      <circle cx="15.56%" cy="12.5%" r="10" stroke="#000" fill={sd.f_sharp_one_e_two} strokeWidth="1"/>
      <circle cx="23.60%" cy="12.5%" r="10" stroke="#000" fill={sd.g_e_two} strokeWidth="1"/>
      <circle cx="31.64%" cy="12.5%" r="10" stroke="#000" fill={sd.g_sharp_e_two} strokeWidth="1"/>
      <circle cx="39.68%" cy="12.5%" r="10" stroke="#000" fill={sd.a_e_two} strokeWidth="1"/>
      <circle cx="47.72%" cy="12.5%" r="10" stroke="#000" fill={sd.a_sharp_e_two} strokeWidth="1"/>
      <circle cx="55.77%" cy="12.5%" r="10" stroke="#000" fill={sd.b_e_two} strokeWidth="1"/>
      <circle cx="63.81%" cy="12.5%" r="10" stroke="#000" fill={sd.c_e_two} strokeWidth="1"/>
      <circle cx="71.85%" cy="12.5%" r="10" stroke="#000" fill={sd.c_sharp_e_two} strokeWidth="1"/>
      <circle cx="79.89%" cy="12.5%" r="10" stroke="#000" fill={sd.d_e_two} strokeWidth="1"/>
      <circle cx="87.93%" cy="12.5%" r="10" stroke="#000" fill={sd.d_sharp_e_two} strokeWidth="1"/>
      <circle cx="95.97%" cy="12.5%" r="10" stroke="#000" fill={sd.e_e_two} strokeWidth="1"/>

      <circle cx="1.71%" cy="25%" r="10" stroke="#000" fill={sd.open_b} strokeWidth="1"/>
      <circle cx="7.52%" cy="25%" r="10" stroke="#000" fill={sd.c_one_b} strokeWidth="1"/>
      <circle cx="15.56%" cy="25%" r="10" stroke="#000" fill={sd.c_sharp_one_b} strokeWidth="1"/>
      <circle cx="23.60%" cy="25%" r="10" stroke="#000" fill={sd.d_b} strokeWidth="1"/>
      <circle cx="31.64%" cy="25%" r="10" stroke="#000" fill={sd.d_sharp_b} strokeWidth="1"/>
      <circle cx="39.68%" cy="25%" r="10" stroke="#000" fill={sd.e_b} strokeWidth="1"/>
      <circle cx="47.72%" cy="25%" r="10" stroke="#000" fill={sd.f_b} strokeWidth="1"/>
      <circle cx="55.77%" cy="25%" r="10" stroke="#000" fill={sd.f_sharp_b} strokeWidth="1"/>
      <circle cx="63.81%" cy="25%" r="10" stroke="#000" fill={sd.g_b} strokeWidth="1"/>
      <circle cx="71.85%" cy="25%" r="10" stroke="#000" fill={sd.g_sharp_b} strokeWidth="1"/>
      <circle cx="79.89%" cy="25%" r="10" stroke="#000" fill={sd.a_b} strokeWidth="1"/>
      <circle cx="87.93%" cy="25%" r="10" stroke="#000" fill={sd.a_sharp_b} strokeWidth="1"/>
      <circle cx="95.97%" cy="25%" r="10" stroke="#000" fill={sd.b_b} strokeWidth="1"/>
      
      <circle cx="1.71%" cy="37.5%" r="10" stroke="#000" fill={sd.open_g} strokeWidth="1"/>
      <circle cx="7.52%" cy="37.5%" r="10" stroke="#000" fill={sd.g_sharp_one_g} strokeWidth="1"/>
      <circle cx="15.56%" cy="37.5%" r="10" stroke="#000" fill={sd.a_one_g} strokeWidth="1"/>
      <circle cx="23.60%" cy="37.5%" r="10" stroke="#000" fill={sd.a_sharp_g} strokeWidth="1"/>
      <circle cx="31.64%" cy="37.5%" r="10" stroke="#000" fill={sd.b_g} strokeWidth="1"/>
      <circle cx="39.68%" cy="37.5%" r="10" stroke="#000" fill={sd.c_g} strokeWidth="1"/>
      <circle cx="47.72%" cy="37.5%" r="10" stroke="#000" fill={sd.c_sharp_g} strokeWidth="1"/>
      <circle cx="55.77%" cy="37.5%" r="10" stroke="#000" fill={sd.d_g} strokeWidth="1"/>
      <circle cx="63.81%" cy="37.5%" r="10" stroke="#000" fill={sd.d_sharp_g} strokeWidth="1"/>
      <circle cx="71.85%" cy="37.5%" r="10" stroke="#000" fill={sd.e_g} strokeWidth="1"/>
      <circle cx="79.89%" cy="37.5%" r="10" stroke="#000" fill={sd.f_g} strokeWidth="1"/>
      <circle cx="87.93%" cy="37.5%" r="10" stroke="#000" fill={sd.f_sharp_g} strokeWidth="1"/>
      <circle cx="95.97%" cy="37.5%" r="10" stroke="#000" fill={sd.g_g} strokeWidth="1"/>
   

      <circle cx="1.71%" cy="50%" r="10" stroke="#000" fill={sd.open_d} strokeWidth="1"/>
      <circle cx="7.52%" cy="50%" r="10" stroke="#000" fill={sd.d_sharp_one_d} strokeWidth="1"/>
      <circle cx="15.56%" cy="50%" r="10" stroke="#000" fill={sd.e_one_d} strokeWidth="1"/>
      <circle cx="23.60%" cy="50%" r="10" stroke="#000" fill={sd.f_d} strokeWidth="1"/>
      <circle cx="31.64%" cy="50%" r="10" stroke="#000" fill={sd.f_sharp_d} strokeWidth="1"/>
      <circle cx="39.68%" cy="50%" r="10" stroke="#000" fill={sd.g_d} strokeWidth="1"/>
      <circle cx="47.72%" cy="50%" r="10" stroke="#000" fill={sd.g_sharp_d} strokeWidth="1"/>
      <circle cx="55.77%" cy="50%" r="10" stroke="#000" fill={sd.a_d} strokeWidth="1"/>
      <circle cx="63.81%" cy="50%" r="10" stroke="#000" fill={sd.a_sharp_d} strokeWidth="1"/>
      <circle cx="71.85%" cy="50%" r="10" stroke="#000" fill={sd.b_d} strokeWidth="1"/>
      <circle cx="79.89%" cy="50%" r="10" stroke="#000" fill={sd.c_d} strokeWidth="1"/>
      <circle cx="87.93%" cy="50%" r="10" stroke="#000" fill={sd.c_sharp_d} strokeWidth="1"/>
      <circle cx="95.97%" cy="50%" r="10" stroke="#000" fill={sd.d_d} strokeWidth="1"/>
     
      <circle cx="1.71%" cy="62.6%" r="10" stroke="#000" fill={sd.open_a} strokeWidth="1"/>
      <circle cx="7.52%" cy="62.6%" r="10" stroke="#000"  fill={sd.a_sharp_one_a} strokeWidth="1"/>
      <circle cx="15.56%" cy="62.6%" r="10" stroke="#000" fill={sd.b_one_a} strokeWidth="1"/>
      <circle cx="23.60%" cy="62.6%" r="10" stroke="#000" fill={sd.c_a} strokeWidth="1"/>
      <circle cx="31.64%" cy="62.6%" r="10" stroke="#000" fill={sd.c_sharp_a} strokeWidth="1"/>
      <circle cx="39.68%" cy="62.6%" r="10" stroke="#000" fill={sd.d_a} strokeWidth="1"/>
      <circle cx="47.72%" cy="62.6%" r="10" stroke="#000" fill={sd.d_sharp_a} strokeWidth="1"/>
      <circle cx="55.77%" cy="62.6%" r="10" stroke="#000" fill={sd.e_a} strokeWidth="1"/>
      <circle cx="63.81%" cy="62.6%" r="10" stroke="#000" fill={sd.f_a} strokeWidth="1"/>
      <circle cx="71.85%" cy="62.6%" r="10" stroke="#000" fill={sd.f_sharp_a} strokeWidth="1"/>
      <circle cx="79.89%" cy="62.6%" r="10" stroke="#000" fill={sd.g_a} strokeWidth="1"/>
      <circle cx="87.93%" cy="62.6%" r="10" stroke="#000" fill={sd.g_sharp_a} strokeWidth="1"/>
      <circle cx="95.97%" cy="62.6%" r="10" stroke="#000" fill={sd.a_a} strokeWidth="1"/>
    

      <circle cx="1.71%" cy="75.06%" r="10" stroke="#000" fill={sd.open_e_one} strokeWidth="1"/>
      <circle cx="7.52%" cy="75.06%" r="10" stroke="#000" fill={sd.f_one_e_one} strokeWidth="1"/>
      <circle cx="15.56%" cy="75.06%" r="10" stroke="#000" fill={sd.f_sharp_one_e_one} strokeWidth="1"/>
      <circle cx="23.60%" cy="75.06%" r="10" stroke="#000" fill={sd.g_e_one} strokeWidth="1"/>
      <circle cx="31.64%" cy="75.06%" r="10" stroke="#000" fill={sd.g_sharp_e_one} strokeWidth="1"/>
      <circle cx="39.68%" cy="75.06%" r="10" stroke="#000" fill={sd.a_e_one} strokeWidth="1"/>
      <circle cx="47.72%" cy="75.06%" r="10" stroke="#000" fill={sd.a_sharp_e_one} strokeWidth="1"/>
      <circle cx="55.77%" cy="75.06%" r="10" stroke="#000" fill={sd.b_e_one} strokeWidth="1"/>
      <circle cx="63.81%" cy="75.06%" r="10" stroke="#000" fill={sd.c_e_one} strokeWidth="1"/>
      <circle cx="71.85%" cy="75.06%" r="10" stroke="#000" fill={sd.c_sharp_e_one} strokeWidth="1"/>
      <circle cx="79.89%" cy="75.06%" r="10" stroke="#000" fill={sd.d_e_one} strokeWidth="1"/>
      <circle cx="87.93%" cy="75.06%" r="10" stroke="#000" fill={sd.d_sharp_e_one} strokeWidth="1"/>
      <circle cx="95.97%" cy="75.06%" r="10" stroke="#000" fill={sd.e_e_one} strokeWidth="1"/>
    
      <text x="1.40%" y="14.7%"  className='notetext nopointer'>E</text>
      <text x="7.26%" y="14.7%"  className='notetext nopointer'>F</text>
      <text x="15%" y="14.7%"  className='notetext nopointer'>F♯</text>
      <text x="23.18%" y="14.7%"  className='notetext nopointer'>G</text>
      <text x="30.90%" y="14.7%"  className='notetext nopointer'>G♯</text>
      <text x="39.34%" y="14.7%"  className='notetext nopointer'>A</text>
      <text x="47.12%" y="14.7%"  className='notetext nopointer'>A♯</text>
      <text x="55.46%" y="14.7%"  className='notetext nopointer'>B</text>
      <text x="63.40%" y="14.7%"  className='notetext nopointer'>C</text>
      <text x="71.20%" y="14.7%"  className='notetext nopointer'>C♯</text>
      <text x="79.50%" y="14.7%"  className='notetext nopointer'>D</text>
      <text x="87.30%" y="14.7%"  className='notetext nopointer'>D♯</text>
      <text x="95.64%" y="14.7%"  className='notetext nopointer'>E</text>
    

      <text x="1.40%" y="27.2%"  className='notetext nopointer'>B</text>
      <text x="7.14%" y="27.2%"  className='notetext nopointer'>C</text>
      <text x="14.88%" y="27.2%"  className='notetext nopointer'>C♯</text>
      <text x="23.26%" y="27.2%"  className='notetext nopointer'>D</text>
      <text x="31%" y="27.2%"  className='notetext nopointer'>D♯</text>
      <text x="39.30%" y="27.2%"  className='notetext nopointer'>E</text>
      <text x="47.42%" y="27.2%"  className='notetext nopointer'>F</text>
      <text x="55.22%" y="27.2%"  className='notetext nopointer'>F♯</text>
      <text x="63.36%" y="27.2%"  className='notetext nopointer'>G</text>
      <text x="71.20%" y="27.2%"  className='notetext nopointer'>G♯</text>
      <text x="79.54%" y="27.2%"  className='notetext nopointer'>A</text>
      <text x="87.30%" y="27.2%"  className='notetext nopointer'>A♯</text>
      <text x="95.64%" y="27.2%"  className='notetext nopointer'>B</text>
  
      <text x="1.28%" y="39.7%"  className='notetext nopointer'>G</text>
      <text x="6.82%" y="39.7%"  className='notetext nopointer'>G♯</text>
      <text x="15.20%" y="39.7%"  className='notetext nopointer'>A</text>
      <text x="23%" y="39.7%"  className='notetext nopointer'>A♯</text>
      <text x="31.32%" y="39.7%"  className='notetext nopointer'>B</text>
      <text x="39.30%" y="39.7%"  className='notetext nopointer'>C</text>
      <text x="47%" y="39.7%"  className='notetext nopointer'>C♯</text>
      <text x="55.42%" y="39.7%"  className='notetext nopointer'>D</text>
      <text x="63.20%" y="39.7%"  className='notetext nopointer'>D♯</text>
      <text x="71.50%" y="39.7%"  className='notetext nopointer'>E</text>
      <text x="79.60%" y="39.7%"  className='notetext nopointer'>F</text>
      <text x="87.36%" y="39.7%"  className='notetext nopointer'>F♯</text>
      <text x="95.50%" y="39.7%"  className='notetext nopointer'>G</text>
   
      <text x="1.38%" y="52.15%"  className='notetext nopointer'>D</text>
      <text x="6.90%" y="52.15%"  className='notetext nopointer'>D♯</text>
      <text x="15.20%" y="52.15%"  className='notetext nopointer'>E</text>
      <text x="23.32%" y="52.15%"  className='notetext nopointer'>F</text>
      <text x="31.10%" y="52.15%"  className='notetext nopointer'>F♯</text>
      <text x="39.26%" y="52.15%"  className='notetext nopointer'>G</text>
      <text x="47%" y="52.15%"  className='notetext nopointer'>G♯</text>
      <text x="55.42%" y="52.15%"  className='notetext nopointer'>A</text>
      <text x="63.20%" y="52.15%"  className='notetext nopointer'>A♯</text>
      <text x="71.54%" y="52.15%"  className='notetext nopointer'>B</text>
      <text x="79.50%" y="52.15%"  className='notetext nopointer'>C</text>
      <text x="87.28%" y="52.15%"  className='notetext nopointer'>C♯</text>
      <text x="95.60%" y="52.15%"  className='notetext nopointer'>D</text>
     

      <text x="1.38%" y="64.75%"  className='notetext nopointer'>A</text>
      <text x="6.96%" y="64.75%"  className='notetext nopointer'>A♯</text>
      <text x="15.24%" y="64.75%"  className='notetext nopointer'>B</text>
      <text x="23.20%" y="64.75%"  className='notetext nopointer'>C</text>
      <text x="30.94%" y="64.75%"  className='notetext nopointer'>C♯</text>
      <text x="39.34%" y="64.75%"  className='notetext nopointer'>D</text>
      <text x="47.10%" y="64.75%"  className='notetext nopointer'>D♯</text>
      <text x="55.42%" y="64.75%"  className='notetext nopointer'>E</text>
      <text x="63.52%" y="64.75%"  className='notetext nopointer'>F</text>
      <text x="71.28%" y="64.75%"  className='notetext nopointer'>F♯</text>
      <text x="79.48%" y="64.75%"  className='notetext nopointer'>G</text>
      <text x="87.24%" y="64.75%"  className='notetext nopointer'>G♯</text>
      <text x="95.62%" y="64.75%"  className='notetext nopointer'>A</text>

      <text x="1.40%" y="77.25%"  className='notetext nopointer'>E</text>
      <text x="7.26%" y="77.25%"  className='notetext nopointer'>F</text>
      <text x="15%" y="77.25%"  className='notetext nopointer'>F♯</text>
      <text x="23.18%" y="77.25%"  className='notetext nopointer'>G</text>
      <text x="30.90%" y="77.25%"  className='notetext nopointer'>G♯</text>
      <text x="39.34%" y="77.25%"  className='notetext nopointer'>A</text>
      <text x="47.12%" y="77.25%"  className='notetext nopointer'>A♯</text>
      <text x="55.46%" y="77.25%"  className='notetext nopointer'>B</text>
      <text x="63.40%" y="77.25%"  className='notetext nopointer'>C</text>
      <text x="71.20%" y="77.25%"  className='notetext nopointer'>C♯</text>
      <text x="79.50%" y="77.25%"  className='notetext nopointer'>D</text>
      <text x="87.30%" y="77.25%"  className='notetext nopointer'>D♯</text>
      <text x="95.64%" y="77.25%"  className='notetext nopointer'>E</text>
    </svg>

<p className="text-2xl text-center pt-8">{sd.mnemonic}</p>
</>
  );
}
