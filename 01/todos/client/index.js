import { users } from "../modules/db.js";

let okno_one = document.querySelector('.okno_one')
let okno_two = document.querySelector('.okno_two_post')

let homepage = document.querySelector('.homepage_two')
let only_today = document.querySelector('.only_today')

function todos() {

    only_today.onclick = () => {
        okno_one.classList.remove('.okno_one')
        okno_one.classList.add('okno_one_post')

        okno_two.classList.remove('okno_two_post')
        okno_two.classList.add('okno_two')
    }

    homepage.onclick = () => {
        okno_one.classList.remove('okno_one_post')
        okno_one.classList.add('.okno_one')

        okno_two.classList.remove('okno_two')
        okno_two.classList.add('okno_two_post')
    }
}

todos()

let places = {
    one: document.querySelector('.for_today'),
    two: document.querySelector('.for_tomorrow'),
    three: document.querySelector('.for_later'),
    four: document.querySelector('.for_today_two')
}

let arrays = {
    one: [],
    two: [],
    three: [],
    four: []
}

users.map(item => {
    if (item.left === 0) {
        arrays.one.push(item)
        arrays.four.push(item)
    } else if (item.left === 1) {
        arrays.two.push(item)
    } else {
        arrays.three.push(item)
    }
})

let reload = (arr, place) => {
    place.innerHTML = ''

    for (let item of arr) {
        place.innerHTML += `
    <div class="box">
        <div class="one">
             <input type="checkbox" class="checkbox">
            <p class="Buy">${item.id}</p>
        </div>
        <div class="two">
            <p class="info">${item.title}</p>
        </div>
            
    </div>
        `
    }
}

reload(arrays.one.slice(0, 4), places.one)
reload(arrays.two.slice(0, 4), places.two)
reload(arrays.three.slice(0, 4), places.three)
reload(arrays.four.slice(0, 4), places.four)
