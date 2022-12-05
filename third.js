const name=['shyam','ram','laxman','bharat','krishna']
 const obj={
       shyam:'shrestha',
   ram:'mahato',
    bharat:'dhungana',
   laxman:'magar',
   krishna:'pandit'
 }
 const keys=Object.keys(obj)
 const values=Object.values(obj)
 name.map((item,index)=>{
       return item +' '+obj[item]
         })
 question remove if item conssist letter a 
 const myarr=['kaylin','tul','ram','hari','situ']
 myarr.filter((item,id)=>{
   // console.log(item)
   if(!item.includes('a')){
     return item
}
})