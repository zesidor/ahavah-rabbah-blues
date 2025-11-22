'use client'
import { useState, useEffect } from "react";
import keys from "../components/keys";
import scales from "../components/scales";
import tonalities from "../components/tonalities"; 

export default function Home() {
  

const [key, setKey] = useState(keys[0].name);
const [scale, setScale] = useState(scales[0].name);
const [tonality, settonality] = useState(tonalities[0].name);

const [sd, setSd] = useState({open_e_one: "#fff",f_one_e_one: "#fff",f_sharp_one_e_one: "#fff",g_e_one: "#fff",g_sharp_e_one: "#fff", a_e_one: "#fff",a_sharp_e_one: "#fff", b_e_one: "#fff", c_e_one: "#fff", c_sharp_e_one: "#fff", d_e_one: "#fff",d_sharp_e_one: "#fff",e_e_one: "#fff",f_two_e_one: "#fff",f_sharp_two_e_one: "#fff",open_a: "#fff",a_sharp_one_a: "#fff",b_one_a: "#fff",c_a: "#fff",c_sharp_a: "#fff",d_a: "#fff",d_sharp_a: "#fff",e_a: "#fff",f_a: "#fff",f_sharp_a: "#fff",g_a: "#fff",g_sharp_a:"#fff",a_a: "#fff",a_sharp_two_a: "#fff",b_two_a: "#fff",open_d: "#fff",d_sharp_one_d: "#fff",e_one_d: "#fff",f_d: "#fff",f_sharp_d: "#fff",g_d: "#fff",g_sharp_d: "#fff",a_d: "#fff",a_sharp_d: "#fff",b_d: "#fff",c_d: "#fff",c_sharp_d: "#fff",d_d: "#fff",d_sharp_two_d: "#fff",e_two_d: "#fff",open_g: "#fff",g_sharp_one_g: "#fff",a_one_g: "#fff",a_sharp_g: "#fff",b_g: "#fff",c_g: "#fff",c_sharp_g: "#fff",d_g: "#fff",d_sharp_g: "#fff",e_g: "#fff",f_g: "#fff",f_sharp_g: "#fff",g_g: "#fff",g_sharp_two_g: "#fff",a_two_g: "#fff",open_b: "#fff",c_one_b: "#fff",c_sharp_one_b: "#fff",d_b: "#fff",d_sharp_b: "#fff",e_b: "#fff",f_b: "#fff",f_sharp_b: "#fff",g_b: "#fff",g_sharp_b: "#fff",a_b: "#fff",a_sharp_b: "#fff",b_b: "#fff",c_two_b: "#fff",c_sharp_two_b: "#fff",open_e_two: "#fff",f_one_e_two: "#fff",f_sharp_one_e_two: "#fff",g_e_two: "#fff",g_sharp_e_two: "#fff",a_e_two: "#fff",a_sharp_e_two: "#fff",b_e_two: "#fff",c_e_two: "#fff",c_sharp_e_two: "#fff",d_e_two: "#fff",d_sharp_e_two: "#fff",e_e_two: "#fff",f_two_e_two: "#fff",f_sharp_two_e_two: "#fff",mnemonic:""}); 
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
<svg viewBox="0, 0, 1460, 208">
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
  <text x="14.1%" y="96%" style={{fill:"#000"}}>2</text>
  <text x="20.9%" y="96%" style={{fill:"#000"}}>3</text>
  <text x="27.8%" y="96%" style={{fill:"#000"}}>4</text>
  <text x="34.6%" y="96%" style={{fill:"#000"}}>5</text>
  <text x="41.5%" y="96%" style={{fill:"#000"}}>6</text>
  <text x="48.3%" y="96%" style={{fill:"#000"}}>7</text>
  <text x="55.2%" y="96%" style={{fill:"#000"}}>8</text>
  <text x="62%" y="96%" style={{fill:"#000"}}>9</text>
  <text x="68.6%" y="96%" style={{fill:"#000"}}>10</text>
  <text x="75.5%" y="96%" style={{fill:"#000"}}>11</text>
  <text x="82.3%" y="96%" style={{fill:"#000"}}>12</text>
  <text x="89.2%" y="96%" style={{fill:"#000"}}>13</text>
  <text x="96%" y="96%" style={{fill:"#000"}}>14</text>

  <line x1="10.949%" x2="10.949%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="17.798%" x2="17.798%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="24.647%" x2="24.647%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="31.496%" x2="31.496%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="38.345%" x2="38.345%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="45.194%" x2="45.194%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="52.043%" x2="52.043%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="58.892%" x2="58.892%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="65.741%" x2="65.741%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="72.59%" x2="72.59%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="79.439%" x2="79.439%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="86.288%" x2="86.288%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="93.137%" x2="93.137%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />
  <line x1="99.986%" x2="99.986%" y1="0%" y2="88.46%" style={{stroke:"#aaa69d", strokeWidth:"3"}} />

  <line x1="3.42%" x2="100%" y1="12.5%" y2="12.5%" style={{stroke:"#d1ccc0", strokeWidth:"1"}} />
  <line x1="3.42%" x2="100%" y1="25%" y2="25%" style={{stroke:"#d1ccc0", strokeWidth:"1"}} />
  <line x1="3.42%" x2="100%" y1="37.5%" y2="37.5%" style={{stroke:"#d1ccc0", strokeWidth:"1"}} />
  <line x1="3.42%" x2="100%" y1="50%" y2="50%" style={{stroke:"#d1ccc0", strokeWidth:"2"}} />
  <line x1="3.42%" x2="100%" y1="62.5%" y2="62.5%" style={{stroke:"#d1ccc0", strokeWidth:"2"}} />
  <line x1="3.42%" x2="100%" y1="75%" y2="75%" style={{stroke:"#d1ccc0", strokeWidth:"2"}} />


  <circle cx="1.71%" cy="12.5%" r="10" stroke="#000" fill={sd.open_e_two} strokeWidth="1" />
  <circle cx="7.52%" cy="12.5%" r="10" stroke="#000" fill={sd.f_one_e_two} strokeWidth="1" />
  <circle cx="14.36%" cy="12.5%" r="10" stroke="#000" fill={sd.f_sharp_one_e_two} strokeWidth="1"/>
  <circle cx="21.20%" cy="12.5%" r="10" stroke="#000" fill={sd.g_e_two} strokeWidth="1"/>
  <circle cx="28.05%" cy="12.5%" r="10" stroke="#000" fill={sd.g_sharp_e_two} strokeWidth="1"/>
  <circle cx="34.90%" cy="12.5%" r="10" stroke="#000" fill={sd.a_e_two} strokeWidth="1"/>
  <circle cx="41.75%" cy="12.5%" r="10" stroke="#000" fill={sd.a_sharp_e_two} strokeWidth="1"/>
  <circle cx="48.60%" cy="12.5%" r="10" stroke="#000" fill={sd.b_e_two} strokeWidth="1"/>
  <circle cx="55.44%" cy="12.5%" r="10" stroke="#000" fill={sd.c_e_two} strokeWidth="1"/>
  <circle cx="62.29%" cy="12.5%" r="10" stroke="#000"  fill={sd.c_sharp_e_two} strokeWidth="1"/>
  <circle cx="69.14%" cy="12.5%" r="10" stroke="#000" fill={sd.d_e_two} strokeWidth="1"/>
  <circle cx="75.99%" cy="12.5%" r="10" stroke="#000"  fill={sd.d_sharp_e_two} strokeWidth="1"/>
  <circle cx="82.84%" cy="12.5%" r="10" stroke="#000" fill={sd.e_e_two} strokeWidth="1"/>
  <circle cx="89.69%" cy="12.5%" r="10" stroke="#000"  fill={sd.f_two_e_two} strokeWidth="1"/>
  <circle cx="96.54%" cy="12.5%" r="10" stroke="#000"  fill={sd.f_sharp_two_e_two} strokeWidth="1"/>

  <circle cx="1.71%" cy="25%" r="10" stroke="#000"  fill={sd.open_b} strokeWidth="1"/>
  <circle cx="7.52%" cy="25%" r="10" stroke="#000"  fill={sd.c_one_b} strokeWidth="1"/>
  <circle cx="14.36%" cy="25%" r="10" stroke="#000"  fill={sd.c_sharp_one_b} strokeWidth="1"/>
  <circle cx="21.20%" cy="25%" r="10" stroke="#000"  fill={sd.d_b} strokeWidth="1"/>
  <circle cx="28.05%" cy="25%" r="10" stroke="#000" fill={sd.d_sharp_b} strokeWidth="1"/>
  <circle cx="34.90%" cy="25%" r="10" stroke="#000" fill={sd.e_b} strokeWidth="1"/>
  <circle cx="41.75%" cy="25%" r="10" stroke="#000" fill={sd.f_b} strokeWidth="1"/>
  <circle cx="48.60%" cy="25%" r="10" stroke="#000"  fill={sd.f_sharp_b} strokeWidth="1"/>
  <circle cx="55.44%" cy="25%" r="10" stroke="#000"  fill={sd.g_b} strokeWidth="1"/>
  <circle cx="62.29%" cy="25%" r="10" stroke="#000"  fill={sd.g_sharp_b} strokeWidth="1"/>
  <circle cx="69.14%" cy="25%" r="10" stroke="#000"  fill={sd.a_b} strokeWidth="1"/>
  <circle cx="75.99%" cy="25%" r="10" stroke="#000"  fill={sd.a_sharp_b} strokeWidth="1"/>
  <circle cx="82.84%" cy="25%" r="10" stroke="#000" fill={sd.b_b} strokeWidth="1"/>
  <circle cx="89.69%" cy="25%" r="10" stroke="#000"  fill={sd.c_two_b} strokeWidth="1"/>
  <circle cx="96.54%" cy="25%" r="10" stroke="#000"  fill={sd.c_sharp_two_b} strokeWidth="1"/>

  <circle cx="1.71%" cy="37.5%" r="10" stroke="#000"  fill={sd.open_g} strokeWidth="1"/>
  <circle cx="7.52%" cy="37.5%" r="10" stroke="#000"  fill={sd.g_sharp_one_g} strokeWidth="1"/>
  <circle cx="14.36%" cy="37.5%" r="10" stroke="#000"  fill={sd.a_one_g} strokeWidth="1"/>
  <circle cx="21.20%" cy="37.5%" r="10" stroke="#000"  fill={sd.a_sharp_g} strokeWidth="1"/>
  <circle cx="28.05%" cy="37.5%" r="10" stroke="#000" fill={sd.b_g} strokeWidth="1"/>
  <circle cx="34.90%" cy="37.5%" r="10" stroke="#000"  fill={sd.c_g} strokeWidth="1"/>
  <circle cx="41.75%" cy="37.5%" r="10" stroke="#000"  fill={sd.c_sharp_g} strokeWidth="1"/>
  <circle cx="48.60%" cy="37.5%" r="10" stroke="#000"  fill={sd.d_g} strokeWidth="1"/>
  <circle cx="55.44%" cy="37.5%" r="10" stroke="#000"  fill={sd.d_sharp_g} strokeWidth="1"/>
  <circle cx="62.29%" cy="37.5%" r="10" stroke="#000"  fill={sd.e_g} strokeWidth="1"/>
  <circle cx="69.14%" cy="37.5%" r="10" stroke="#000"  fill={sd.f_g} strokeWidth="1"/>
  <circle cx="75.99%" cy="37.5%" r="10" stroke="#000"  fill={sd.f_sharp_g} strokeWidth="1"/>
  <circle cx="82.84%" cy="37.5%" r="10" stroke="#000"  fill={sd.g_g} strokeWidth="1"/>
  <circle cx="89.69%" cy="37.5%" r="10" stroke="#000"  fill={sd.g_sharp_two_g} strokeWidth="1"/>
  <circle cx="96.54%" cy="37.5%" r="10" stroke="#000" fill={sd.a_two_g} strokeWidth="1"/>

  <circle cx="1.71%" cy="50%" r="10" stroke="#000"  fill={sd.open_d} strokeWidth="1"/>
  <circle cx="7.52%" cy="50%" r="10" stroke="#000"  fill={sd.d_sharp_one_d} strokeWidth="1"/>
  <circle cx="14.36%" cy="50%" r="10" stroke="#000"  fill={sd.e_one_d} strokeWidth="1"/>
  <circle cx="21.20%" cy="50%" r="10" stroke="#000"  fill={sd.f_d} strokeWidth="1"/>
  <circle cx="28.05%" cy="50%" r="10" stroke="#000"  fill={sd.f_sharp_d} strokeWidth="1"/>
  <circle cx="34.90%" cy="50%" r="10" stroke="#000"  fill={sd.g_d} strokeWidth="1"/>
  <circle cx="41.75%" cy="50%" r="10" stroke="#000" fill={sd.g_sharp_d} strokeWidth="1"/>
  <circle cx="48.60%" cy="50%" r="10" stroke="#000"  fill={sd.a_d} strokeWidth="1"/>
  <circle cx="55.44%" cy="50%" r="10" stroke="#000" fill={sd.a_sharp_d} strokeWidth="1"/>
  <circle cx="62.29%" cy="50%" r="10" stroke="#000"  fill={sd.b_d} strokeWidth="1"/>
  <circle cx="69.14%" cy="50%" r="10" stroke="#000" fill={sd.c_d} strokeWidth="1"/>
  <circle cx="75.99%" cy="50%" r="10" stroke="#000"  fill={sd.c_sharp_d} strokeWidth="1"/>
  <circle cx="82.84%" cy="50%" r="10" stroke="#000" fill={sd.d_d} strokeWidth="1"/>
  <circle cx="89.69%" cy="50%" r="10" stroke="#000"  fill={sd.d_sharp_two_d} strokeWidth="1"/>
  <circle cx="96.54%" cy="50%" r="10" stroke="#000"  fill={sd.e_two_d} strokeWidth="1"/>

  <circle cx="1.71%" cy="62.6%" r="10" stroke="#000" fill={sd.open_a} strokeWidth="1"/>
  <circle cx="7.52%" cy="62.6%" r="10" stroke="#000"  fill={sd.a_sharp_one_a} strokeWidth="1"/>
  <circle cx="14.36%" cy="62.6%" r="10" stroke="#000"  fill={sd.b_one_a} strokeWidth="1"/>
  <circle cx="21.20%" cy="62.6%" r="10" stroke="#000"  fill={sd.c_a} strokeWidth="1"/>
  <circle cx="28.05%" cy="62.6%" r="10" stroke="#000"  fill={sd.c_sharp_a} strokeWidth="1"/>
  <circle cx="34.90%" cy="62.6%" r="10" stroke="#000"  fill={sd.d_a} strokeWidth="1"/>
  <circle cx="41.75%" cy="62.6%" r="10" stroke="#000"  fill={sd.d_sharp_a} strokeWidth="1"/>
  <circle cx="48.60%" cy="62.6%" r="10" stroke="#000"  fill={sd.e_a} strokeWidth="1"/>
  <circle cx="55.44%" cy="62.6%" r="10" stroke="#000"  fill={sd.f_a} strokeWidth="1"/>
  <circle cx="62.29%" cy="62.6%" r="10" stroke="#000"   fill={sd.f_sharp_a} strokeWidth="1"/>
  <circle cx="69.14%" cy="62.6%" r="10" stroke="#000"   fill={sd.g_a} strokeWidth="1"/>
  <circle cx="75.99%" cy="62.6%" r="10" stroke="#000"  fill={sd.g_sharp_a} strokeWidth="1"/>
  <circle cx="82.84%" cy="62.6%" r="10" stroke="#000"  fill={sd.a_a} strokeWidth="1"/>
  <circle cx="89.69%" cy="62.6%" r="10" stroke="#000"  fill={sd.a_sharp_two_a} strokeWidth="1"/>
  <circle cx="96.54%" cy="62.6%" r="10" stroke="#000" fill={sd.b_two_a} strokeWidth="1"/>

  <circle cx="1.71%" cy="75.06%" r="10" stroke="#000"  fill={sd.open_e_one} strokeWidth="1"/>
  <circle cx="7.52%" cy="75.06%" r="10" stroke="#000"  fill={sd.f_one_e_one} strokeWidth="1"/>
  <circle cx="14.36%" cy="75.06%" r="10" stroke="#000"  fill={sd.f_sharp_one_e_one} strokeWidth="1"/>
  <circle cx="21.20%" cy="75.06%" r="10" stroke="#000"  fill={sd.g_e_one} strokeWidth="1"/>
  <circle cx="28.05%" cy="75.06%" r="10" stroke="#000"  fill={sd.g_sharp_e_one} strokeWidth="1"/>
  <circle cx="34.90%" cy="75.06%" r="10" stroke="#000"  fill={sd.a_e_one} strokeWidth="1"/>
  <circle cx="41.75%" cy="75.06%" r="10" stroke="#000"  fill={sd.a_sharp_e_one} strokeWidth="1"/>
  <circle cx="48.60%" cy="75.06%" r="10" stroke="#000"  fill={sd.b_e_one} strokeWidth="1"/>
  <circle cx="55.44%" cy="75.06%" r="10" stroke="#000" fill={sd.c_e_one} strokeWidth="1"/>
  <circle cx="62.29%" cy="75.06%" r="10" stroke="#000" fill={sd.c_sharp_e_one} strokeWidth="1"/>
  <circle cx="69.14%" cy="75.06%" r="10" stroke="#000" fill={sd.d_e_one} strokeWidth="1"/>
  <circle cx="75.99%" cy="75.06%" r="10" stroke="#000" fill={sd.d_sharp_e_one} strokeWidth="1"/>
  <circle cx="82.84%" cy="75.06%" r="10" stroke="#000" fill={sd.e_e_one} strokeWidth="1"/>
  <circle cx="89.69%" cy="75.06%" r="10" stroke="#000" fill={sd.f_two_e_one} strokeWidth="1"/>
  <circle cx="96.54%" cy="75.06%" r="10" stroke="#000"  fill={sd.f_sharp_two_e_one} strokeWidth="1"/>

  <text x="1.44%" y="14.7%"  className='notetext nopointer'>E</text>
  <text x="7.26%" y="14.7%"  className='notetext nopointer'>F</text>
  <text x="13.82%" y="14.7%"  className='notetext nopointer'>G♭</text>
  <text x="20.84%" y="14.7%"  className='notetext nopointer'>G</text>
  <text x="27.5%" y="14.7%"  className='notetext nopointer'>A♭</text>
  <text x="34.6%" y="14.7%"  className='notetext nopointer'>A</text>
  <text x="41.25%" y="14.7%"  className='notetext nopointer'>B♭</text>
  <text x="48.3%" y="14.7%"  className='notetext nopointer'>B</text>
  <text x="55.15%" y="14.7%"  className='notetext nopointer'>C</text>
  <text x="61.7%" y="14.7%"  className='notetext nopointer'>D♭</text>
  <text x="68.85%" y="14.7%"  className='notetext nopointer'>D</text>
  <text x="75.45%" y="14.7%"  className='notetext nopointer'>E♭</text>
  <text x="82.55%" y="14.7%"  className='notetext nopointer'>E</text>
  <text x="89.45%" y="14.7%"  className='notetext nopointer'>F</text>
  <text x="96.05%" y="14.7%"  className='notetext nopointer'>G♭</text>

  <text x="1.44%" y="27.2%"  className='notetext nopointer'>B</text>
  <text x="7.22%" y="27.2%"  className='notetext nopointer'>C</text>
  <text x="13.80%" y="27.2%"  className='notetext nopointer'>D♭</text>
  <text x="20.88%" y="27.2%"  className='notetext nopointer'>D</text>
  <text x="27.5%" y="27.2%"  className='notetext nopointer'>E♭</text>
  <text x="34.6%" y="27.2%"  className='notetext nopointer'>E</text>
  <text x="41.46%" y="27.2%"  className='notetext nopointer'>F</text>
  <text x="48.1%" y="27.2%"  className='notetext nopointer'>G♭</text>
  <text x="55.1%" y="27.2%"  className='notetext nopointer'>G</text>
  <text x="61.7%" y="27.2%"  className='notetext nopointer'>A♭</text>
  <text x="68.85%" y="27.2%"  className='notetext nopointer'>A</text>
  <text x="75.45%" y="27.2%"  className='notetext nopointer'>B♭</text>
  <text x="82.55%" y="27.2%"  className='notetext nopointer'>B</text>
  <text x="89.35%" y="27.2%"  className='notetext nopointer'>C</text>
  <text x="96%" y="27.2%"  className='notetext nopointer'>D♭</text>

  <text x="1.4%" y="39.7%"  className='notetext nopointer'>G</text>
  <text x="6.96%" y="39.7%"  className='notetext nopointer'>A♭</text>
  <text x="14.05%" y="39.7%"  className='notetext nopointer'>A</text>
  <text x="20.7%" y="39.7%"  className='notetext nopointer'>B♭</text>
  <text x="27.75%" y="39.7%"  className='notetext nopointer'>B</text>
  <text x="34.55%" y="39.7%"  className='notetext nopointer'>C</text>
  <text x="41.2%" y="39.7%"  className='notetext nopointer'>D♭</text>
  <text x="48.3%" y="39.7%"  className='notetext nopointer'>D</text>
  <text x="54.9%" y="39.7%"  className='notetext nopointer'>E♭</text>
  <text x="62.02%" y="39.7%"  className='notetext nopointer'>E</text>
  <text x="68.9%" y="39.7%"  className='notetext nopointer'>F</text>
  <text x="75.5%" y="39.7%"  className='notetext nopointer'>G♭</text>
  <text x="82.5%" y="39.7%"  className='notetext nopointer'>G</text>
  <text x="89.15%" y="39.7%"  className='notetext nopointer'>A♭</text>
  <text x="96.25%" y="39.7%"  className='notetext nopointer'>A</text>

  <text x="1.4%" y="52.15%"  className='notetext nopointer'>D</text>
  <text x="6.96%" y="52.15%"  className='notetext nopointer'>E♭</text>
  <text x="14.1%" y="52.15%"  className='notetext nopointer'>E</text>
  <text x="20.94%" y="52.15%"  className='notetext nopointer'>F</text>
  <text x="27.55%" y="52.15%"  className='notetext nopointer'>G♭</text>
  <text x="34.55%" y="52.15%"  className='notetext nopointer'>G</text>
  <text x="41.15%" y="52.15%"  className='notetext nopointer'>A♭</text>
  <text x="48.3%" y="52.15%"  className='notetext nopointer'>A</text>
  <text x="54.95%" y="52.15%"  className='notetext nopointer'>B♭</text>
  <text x="62%" y="52.15%"  className='notetext nopointer'>B</text>
  <text x="68.8%" y="52.15%"  className='notetext nopointer'>C</text>
  <text x="75.4%" y="52.15%"  className='notetext nopointer'>D♭</text>
  <text x="82.55%" y="52.15%"  className='notetext nopointer'>D</text>
  <text x="89.15%" y="52.15%"  className='notetext nopointer'>E♭</text>
  <text x="96.25%" y="52.15%"  className='notetext nopointer'>E</text>

  <text x="1.4%" y="64.75%"  className='notetext nopointer'>A</text>
  <text x="7%" y="64.75%"  className='notetext nopointer'>B♭</text>
  <text x="14.05%" y="64.75%"  className='notetext nopointer'>B</text>
  <text x="20.84%" y="64.75%"  className='notetext nopointer'>C</text>
  <text x="27.5%" y="64.75%"  className='notetext nopointer'>D♭</text>
  <text x="34.6%" y="64.75%"  className='notetext nopointer'>D</text>
  <text x="41.2%" y="64.75%"  className='notetext nopointer'>E♭</text>
  <text x="48.35%" y="64.75%"  className='notetext nopointer'>E</text>
  <text x="55.2%" y="64.75%"  className='notetext nopointer'>F</text>
  <text x="61.8%" y="64.75%"  className='notetext nopointer'>G♭</text>
  <text x="68.8%" y="64.75%"  className='notetext nopointer'>G</text>
  <text x="75.4%" y="64.75%"  className='notetext nopointer'>A♭</text>
  <text x="82.55%" y="64.75%"  className='notetext nopointer'>A</text>
  <text x="89.2%" y="64.75%"  className='notetext nopointer'>B♭</text>
  <text x="96.25%" y="64.75%"  className='notetext nopointer'>B</text>

  <text x="1.44%" y="77.25%"  className='notetext nopointer'>E</text>
  <text x="7.26%" y="77.25%"  className='notetext nopointer'>F</text>
  <text x="13.85%" y="77.25%"  className='notetext nopointer'>G♭</text>
  <text x="20.84%" y="77.25%"  className='notetext nopointer'>G</text>
  <text x="27.45%" y="77.25%"  className='notetext nopointer'>A♭</text>
  <text x="34.6%" y="77.25%"  className='notetext nopointer'>A</text>
  <text x="41.23%" y="77.25%"  className='notetext nopointer'>B♭</text>
  <text x="48.3%" y="77.25%"  className='notetext nopointer'>B</text>
  <text x="55.1%" y="77.25%"  className='notetext nopointer'>C</text>
  <text x="61.7%" y="77.25%"  className='notetext nopointer'>D♭</text>
  <text x="68.85%" y="77.25%"  className='notetext nopointer'>D</text>
  <text x="75.45%" y="77.25%"  className='notetext nopointer'>E♭</text>
  <text x="82.6%" y="77.25%"  className='notetext nopointer'>E</text>
  <text x="89.45%" y="77.25%"  className='notetext nopointer'>F</text>
  <text x="96.05%" y="77.25%"  className='notetext nopointer'>G♭</text>
</svg>
<p className="text-2xl text-center pt-8">{sd.mnemonic}</p>
</>
  );
}
