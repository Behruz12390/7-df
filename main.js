let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
let a = document.querySelector('.p')
let c = document.querySelector('body')
data.map(item =>{
    let b = document.createElement('p') 
    b.innerHTML = item
    a.append(b)
    b.style.color = 'white'
    b.style.display = 'flex'
    b.style.alignItems = 'center'
    b.style.justifyContent = 'center'
    b.style.height = '48px'
    c.style.margin = '0'
    c.style.padding = '0'
    if(item > 50){
        b.style.backgroundColor ='green'
    }else if(item <= 50){
        b.style.backgroundColor ='red'
    }
})









