import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Fetch_error, Fetch_request, Fetch_success } from '../Redux/actionType'

const Product = () => {
    const {loading,iserror,data}=useSelector((state)=>state.Productreducer)
    const dispatch=useDispatch()
    const getdata=()=>{
        dispatch({type:Fetch_request})
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            dispatch({type:Fetch_success,payload:res.data})
            console.log(res)
        })
        .catch((err)=>{
            dispatch({type:Fetch_error})
            console.log(err)
        })
    }

    useEffect(()=>{
        getdata()
    },[])
  return loading ? <h1>Loading...</h1> : iserror ? <h1>Error not found</h1> : (
    <>
        <h1>Product</h1>
        {data.map((el)=>(
            <div key={el.id}>
                <h2>{el.title}</h2>
                <img src={el.image} alt="" />
            </div>
        ))}
    </>
  )
}

export default Product