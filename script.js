const menuItems = document.querySelectorAll('.nav-menu');
console.log(menuItems);
const LEN = menuItems.length;

for (let i=0; i<LEN; i++){
    menuItems[i].onclick = function(){
        for(let j=0; j<LEN;j++){
            menuItems[j].classList.remove('active')
        }
        menuItems[i].classList.add('active')
        console.log(menuItems[i].innerHTML);
    }
}