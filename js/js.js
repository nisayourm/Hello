function onFilterInput() {
    let inputElement = document.querySelector('input');
    let listElement = document.getElementsByTagName("li");
    let filter = inputElement.value.toUpperCase();
    console.log(filter);
    let textValue;
    for (let i = 0; i < listElement.length; i++) {
        textValue = listElement[i].textContent || listElement[i].innerText;

        // console.log(textValue.indexOf(filter));
        let isFind = textValue.toUpperCase().indexOf(filter) > -1;
        if (isFind) {
            listElement[i].style.display = "block";
        } else {
            listElement[i].style.display = "none";
        }

    }
}
document.addEventListener('keyup', onFilterInput);


