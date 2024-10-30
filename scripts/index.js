const countSheep = (list) => {
    let text = 'UPS!!! Wolfs eaten Sheeps'
    let count = 0

    for (let i = 0; i < list.length; i++) {
        let item = list[i]

        if (item) count++
    }

    if (count >= 1) text = `There are ${count} sheep in total`

    console.log(text)
}

let list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]
let list2 = [false, false, false]

countSheep(list1)
countSheep(list2)