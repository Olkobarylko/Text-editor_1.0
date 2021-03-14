let button_1 = document.querySelector('.edit');
let button_2 = document.querySelector('.style');
let textarea = document.querySelector('.textarea');
let upbox = document.querySelector('.up-box');
let save = document.querySelector('.save');
let hide = document.querySelector('.hide');
let radio_button = document.querySelector('.editfont');
let form_size = document.querySelector('.form-size');
let formfamily = document.querySelector('.form-family')
button_1.addEventListener('click', function () {
    textarea.style.display = 'block';
    save.style.display = 'block';
    edit.style.display = 'block';
    hide.style.display = 'block';
    radio_button.style.display = 'none';
    textarea.value = upbox.innerHTML;
});

save.addEventListener('click', function () {
    upbox.innerHTML = textarea.value;
    hide.style.display = 'none';
});

button_2.addEventListener('click', function () {
    radio_button.style.display = 'block';
    hide.style.display = 'none';
});

form_size.addEventListener('click', function () {
    for (let i = 0; i < form_size.length; i++) {
        if (form_size.elements[i].checked) {
            upbox.style.fontSize = form_size.elements[i].value + 'px';
        }
    }
})

formfamily.addEventListener('click', function () {
    //selected
    for (let i = 0; i < formfamily.length; i++) {
        if (formfamily.options[i].selected) {
            upbox.style.fontFamily = formfamily.options[i].value;
        }
    }
})
let colors_font = document.querySelector('.color-block');
let all_mini_font = document.querySelector('.color-block').querySelectorAll('div');
let colors = document.querySelector('.colors-body');
colors.addEventListener('click', function (event) {
    event.preventDefault();
    colors_font.style.display = 'flex';
    for (let i = 0; i < all_mini_font.length; i++) {
        all_mini_font[i].addEventListener('click', function () {
            upbox.style.color = window.getComputedStyle(all_mini_font[i]).backgroundColor;
            colors_font.style.display = 'none';
        })
    }
})

let bgcolors_font = document.querySelector('.bg-block');
let all_bgmini_font = document.querySelector('.bg-block').querySelectorAll('div');
let bgcolors = document.querySelector('.bg-colors-body');
bgcolors.addEventListener('click', function (event) {
    event.preventDefault();
    bgcolors_font.style.display = 'flex';
    for (let i = 0; i < all_bgmini_font.length; i++) {
        all_bgmini_font[i].addEventListener('click', function () {
            upbox.style.backgroundColor = window.getComputedStyle(all_bgmini_font[i]).backgroundColor;
            bgcolors_font.style.display = 'none';
        })
    }
})

let check_bold = document.querySelector('.bolded');
let check_cursive = document.querySelector('.cursive');
let form_checked = document.querySelector('.form-checked');
form_checked.addEventListener('click', function () {
    if (form_checked[0].checked) {
        upbox.style.fontWeight = 'bold';
    } else {
        upbox.style.fontWeight = '';

    }
    if (form_checked[1].checked) {
        upbox.style.fontStyle = 'italic';
    } else {
        upbox.style.fontStyle = '';
    }
})

let edit = document.querySelector('.edited');
let container = document.querySelector('.container');
let table_box = document.querySelector('.table-box')
edit.addEventListener('click', function () {
    container.style.display = 'none';
    table_box.style.display = 'flex';
})

let form_tables = document.querySelector('.form-tables');
let hide_table = document.querySelector('.hide-table');
let hide_list = document.querySelector('.hide-list');
form_tables.addEventListener('click', function () {
    if (form_tables[0].checked) {
        hide_table.style.display = 'block';
        hide_list.style.display = 'none';
    } else {
        hide_table.style.display = 'none';
        hide_list.style.display = 'block';

    }

})

let button_table = document.querySelector('.button-table');
let button_list = document.querySelector('.button-list');
let count_tr = document.querySelector('.count_tr');
let count_td = document.querySelector('.count_td');
let width_td = document.querySelector('.width_td');
let hight_td = document.querySelector('.hight_td');
let width_border = document.querySelector('.width_border');
let type_border = document.querySelector('.type_border');
let color_border = document.querySelector('.color_border');
let table = document.createElement('table');
let borderstyle;
let bordercolor;
type_border.addEventListener('click', function () {
    for (let i = 0; i < type_border.length; i++) {
        if (type_border.options[i].selected) {
            table.style.borderStyle = type_border.options[i].value;
            borderstyle = type_border.options[i].value
        }
    }
})
color_border.addEventListener('click', function () {
    for (let i = 0; i < color_border.length; i++) {
        if (color_border.options[i].selected) {
            table.style.borderColor = color_border.options[i].value;
            bordercolor = color_border.options[i].value;
        }
    }
})
button_table.addEventListener('click', function () {
    container.style.display = 'block';
    table_box.style.display = 'none';

    table.style.borderWidth = width_border.value + 'px';
    for (let i = 0; i < count_tr.value; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < count_td.value; j++) {
            let td = document.createElement('td');
            tr.appendChild(td)
            td.innerHTML = 'TD';
            td.style.width = width_td.value + 'px';
            td.style.height = hight_td.value + 'px';
            td.style.borderWidth = width_border.value + 'px';
            td.style.borderStyle = borderstyle;
            td.style.borderColor = bordercolor;
        }
        table.appendChild(tr);
    }
    textarea.value += table.outerHTML;

})

let tipe_mark = document.querySelector('.tipe_mark');
tipe_mark.addEventListener('click', function () {
    for (let i = 0; i < tipe_mark.length; i++) {
        if (tipe_mark.options[i].selected) {
            ul_list.style.listStyle = tipe_mark.options[i].value;
        }
    }
})
let ul_list = document.createElement('ul');
let count_li = document.querySelector('.count_li');
button_list.addEventListener('click', function () {
    container.style.display = 'block';
    table_box.style.display = 'none';

    for (let i = 0; i < count_li.value; i++) {
        let li_list = document.createElement('li');
        li_list.innerHTML = 'item' + ' ' + (i + 1);
        ul_list.appendChild(li_list);
    }
    textarea.value += ul_list.outerHTML
});