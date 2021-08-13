import Link from 'next/link'
import { useEffect, useState } from 'react';

const Home=(props)=>{
  const [text,setText] = useState('loading');
  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/test').then
  //   (res => res.json()).then
  //   (data=>{setText(data.message)

  //   })
  // },[])
  return(
    <>
    
    <h1>Home App</h1>
    <Link href='/products'><a>Goto Products</a></Link>
    <h2>{props.message}</h2>
    <style jsx>
      {
        `
        h1{
          color:red;
        }
        `
      }
      
    </style>
    </>
  )
}
export async function getStaticProps(context) {
  const res = fetch("http://localhost:3000/api/test")
  const data = await (await res).json()
  console.log(data)
  return {
    props: {message:data.message}, // will be passed to the page component as props
  }
}
export default Home;