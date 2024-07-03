import React, { useEffect, useState } from 'react'
import { getUserData } from './lib/user-service';
import { InfiniteScrollWrapper } from './InfiniteScroll/InfiniteScrollWrapper';

const InfiniteScrollExample = () => {
  const [page,setPage] = useState(1);
  const [data,setData] = useState([])
  const [hasMore,setHasMore] = useState(true);

  const fetchData= async ()=>{
   const res=await getUserData({page,pageSize:20});
   setData(prev=>(page===1?res:[...prev,...res]));
   if(res?.length===0){
    setHasMore(false)
   }
  }

  console.log(page)

  useEffect(()=>{
    fetchData();
  },[page])

  return (
    <InfiniteScrollWrapper next={()=>setPage(prev=>prev+1)}>
      {data?.map((item)=>
       <div key={item?.userId} style={{border:'1px solid #e7e7eb',padding:16}}>
          <p>{item?.username}</p>
      </div>)}
            
    </InfiniteScrollWrapper>
  )
}

export default InfiniteScrollExample