// 1-get total
// أول خطوة هنا لازم نستدعي كل اللي هنحتاجهم من الآي دي 
let title=document.getElementById("title")
let price=document.getElementById("price")
let taxes=document.getElementById("taxes")
let ads=document.getElementById("ads")
let discount=document.getElementById("discount")
let small=document.getElementById("small")
let count=document.getElementById("count")
let category=document.getElementById("category")
let btnpapa   =document.getElementById("btnpapa")
let search=document.getElementById("search")
let searchby=document.getElementById("searchby")
let searchcategory=document.getElementById("searchcategory")
let mood='create';
let HOK;
// بعد كدا هنحتاج نتأكد من ان الكلام ده موجود ولا لا
// console.log(title,price,taxes,ads,discount,small,count,category,btnpapa,search,searchby,searchcategory)
// كدا اتأكدنا ان كله تمام و برافوو عليا
function gettotal(){
    if(price!=''){
        let result=(+price.value+ +taxes.value+ +ads.value)+-discount.value
        small.innerHTML=result;
        small.style.backgroundColor="#040";
    } else{
        small.style.backgroundColor="rgb(176, 37, 37);";
    }
}

// plus(+)فبل أي string بتخليه numper;
// The End This Task
// 2-create Product
let dataMama;
// التحقق من وجود البيانات في localStorage وتحويلها إلى كائن JavaScript
if(localStorage.getItem('good') !== null){
    dataMama = JSON.parse(localStorage.getItem('good'));
} else {
    // إذا لم تكن هناك بيانات في localStorage، قم بتعريف متغير dataMama كمصفوفة فارغة
    dataMama = [];
}
// الاستماع لنقرة زر btnpapa وإضافة بيانات المنتج الجديدة إلى مصفوفة dataMama
btnpapa.onclick = function(){
    let obj = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        small: small.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
        
        
    };
    Read()
    // إضافة البيانات الجديدة إلى مصفوفة dataMama
    if(title.value!=''&&category.value!=''&&obj.count < 100){

        if(mood==='create'){
            if(obj.count > 1){
                for(let T = 0;T < obj.count; T++){
                    dataMama.push(obj);
                }
                }else{
                        dataMama.push(obj);
                        
                    }
    }else{
        clear()

    }
  
   }else{

dataMama[HOK]=obj;
btnpapa.innerHTML='Create'
count.style.display='block'

   }
    // تحويل مصفوفة dataMama إلى سلسلة JSON وحفظها في localStorage
    localStorage.setItem('good', JSON.stringify(dataMama));
    console.log(obj);
    clear()
    Read()

};
Read()

// start Clear data
function clear(){
title.value='';
price.value='';
taxes.value='';
ads.value='';
discount.value='';
small.value='';
count.value='';
category.value='';

}
// End Clear data
// Read Data
function Read(){
gettotal()
let HoHo='';
for(let H=0; H<dataMama.length; H++){
   HoHo+=`
   <tr>
   <th  >${H}</th>
   <td>${dataMama[H].title}</td>
   <td>${dataMama[H].price}</td>
   <td>${dataMama[H].ads}</td>
   <td>${dataMama[H].discount}</td>
   <td>${dataMama[H].small}</td>
   <td>${dataMama[H].category}</td>
   <td><button onclick="updatedata(${H})" class="btn btn-halopeno">UPDATE  </td>
   <td><button onclick="DELETEdata(${H})" class="btn btn-halopeno" >DELETE</button></td>
  </tr> 
   `
}

 document.getElementById("tbody").innerHTML= HoHo;
 let DELETEALL=document.getElementById("DELETEALL")
 if(dataMama.length > 0){
    DELETEALL.innerHTML =`
    <button onclick="pigDELETE()" class="Handmade">Delete All(${dataMama.length})</button>
    `
 }else{
DELETEALL.innerHTML=''
 }
}

// DELETE DATA
function DELETEdata(H)  {
dataMama.splice(H,1);
localStorage.good=JSON.stringify(dataMama);
Read();
}
// DELETE ALL
function pigDELETE(){
localStorage.clear()
dataMama.splice(0)
Read()

}
// Update
function updatedata(H){
title.value=dataMama[H].title
price.value=dataMama[H].price
category.value=dataMama[H].category

taxes.value=dataMama[H].taxes
ads.value=dataMama[H].ads
discount.value=dataMama[H].discount
gettotal()
count.style.display='none'
btnpapa.innerHTML="UPdate"
mood='update';
HOK=H;
scroll({
top:0,
behavior:"smooth",
})
}
//search mood
let searchMood='title';
function SEARCH(id){
   if(id=='searchbytitle'){

    searchMood='title';
    search.placeholder='Search by title'


   }else{
    searchMood='category';
    search.placeholder='Search by category'

   }
    search.focus()
    search.value='';
   


}
let HoHo='';
function searchDATA(value){
if(searchMood=='title'){
  for(let i=0;i<dataMama.length;i++){
if(dataMama[i].title.includes(value)){
    HoHo+=`
    <tr>
    <th  >${i}</th>
    <td>${dataMama[i].title}</td>
    <td>${dataMama[i].price}</td>
    <td>${dataMama[i].ads}</td>
    <td>${dataMama[i].discount}</td>
    <td>${dataMama[i].small}</td>
    <td>${dataMama[i].category}</td>
    <td><button onclick="updatedata(${i})" class="btn btn-halopeno">UPDATE  </td>
    <td><button onclick="DELETEdata(${i})" class="btn btn-halopeno" >DELETE</button></td>
   </tr> 
    `
}
  }
// by category
}else{
 for(let i=0;i < dataMama.length;i++){
        if(dataMama[i].category.includes(value.toLowerCase())){
            HoHo+=`
            <tr>
            <th  >${i}</th>
            <td>${dataMama[i].title}</td>
            <td>${dataMama[i].price}</td>
            <td>${dataMama[i].ads}</td>
            <td>${dataMama[i].discount}</td>
            <td>${dataMama[i].small}</td>
            <td>${dataMama[i].category}</td>
            <td><button onclick="updatedata(${i})" class="btn btn-halopeno">UPDATE  </td>
            <td><button onclick="DELETEdata(${i})" class="btn btn-halopeno" >DELETE</button></td>
           </tr> 
            `
        }
          }      
          
}
document.getElementById('tbody').innerHTML= HoHo;

}
