
let arr=[];

function fnc()
{
let x=document.querySelector('#js-text');
let name=x.value;

let y=document.querySelector('#js-amount');
let price=y.value;
arr.push({name:name,
price:price
});
console.log(arr);

x.value="";
y.value="";
calculate();



}

function calculate()
{
let list="";
let total=0;
let income=0;
let expense =0;
for(let i=0;i<arr.length;i++) {
let item=arr[i];
let borderClass = item.price >= 0 ? 'income-border' : 'expense-border';
let html=`<div class="lists ${borderClass}">
<div> ${item.name} </div> <div class="movetoright">
<div class="divs">
${item.price}
</div>


<button class="del" onclick="
arr.splice(${i},1);
calculate();
">X</button>
</div>

</div> `
list+=html;
price=parseFloat(item.price);
if(item.name=="")
{
    alert("Please add a text and amount");
}
if(price>=0)
{
    income+=price;
}
else{
    expense+=price;
}
 total+=price;
 

}
document.querySelector('.ans').innerHTML=list;
document.querySelector('.js-balance').innerHTML=`$${total}`;
document.querySelector('.js-income').innerHTML=`$${income}`;
document.querySelector('.js-expense').innerHTML=`$${expense}`;
}
