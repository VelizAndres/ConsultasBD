// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getPokemons } from "@/Storage/script";

export default async function Pokemon(req, res) {
  try{
    if (req.method === "GET")
    {
      const data = await getPokemons();
      res.status(200).json({data})
    }
  }
  catch (error)
  {
    console.log("Error", error)
    res.status(500).json({error})
  }  
}
