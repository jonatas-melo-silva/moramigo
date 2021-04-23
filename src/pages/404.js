import React, {useEffect} from 'react';
import Link from "next/link"
import {useRouter} from "next/router";

function NotFound() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      // return (
      //   <Home />
      // )
      router.push("/")
    }, 3000)
  },[])

  return (
    <div>
      <h1>Ooooops</h1>
      <h2>Essa página não pode ser encontrada</h2>
      <p>Volte para <Link href="/"><a>página inicial</a></Link></p>
    </div>
  )
}

export default NotFound;
