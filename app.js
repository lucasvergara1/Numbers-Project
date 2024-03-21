
const items = [...document.querySelectorAll('.number')];
//console.log(items)


const updateCount = (el) => {
 const value = parseInt(el.dataset.value);
 const increment = Math.ceil(value/1000)
 //const increment = 1;
 let inicialValue = 0;

 const increaseCount = setInterval(()=>{
    inicialValue += increment

    if(inicialValue > value){
        el.textContent = `${value}+`;
        clearInterval(increaseCount);
        return;
    }

    el.textContent = `${inicialValue}+`;
 }, 1);
console.log(increaseCount);
};

items.forEach((item1) => {
updateCount(item1)
});

