const btnRes = document.querySelector('.btn-responsive-menu');
const liste = document.querySelector('.liste-nav');
const items = document.querySelectorAll('.item')

btnRes.addEventListener('click', () => {

    btnRes.classList.toggle('active');
    liste.classList.toggle('active-menu');

})

items.forEach(item => {
    item.addEventListener('click', () => {
        
        btnRes.classList.toggle('active');
        liste.classList.toggle('active-menu');
    
    })
})