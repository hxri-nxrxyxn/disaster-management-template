let state = false;

document.getElementById('open').addEventListener('click', () => {
    if (state == true)
    {
        state = !state;
        document.querySelector('.nav__mobile').style.display = "none"
    }
    else
    {
        state = !state;
        document.querySelector('.nav__mobile').style.display = "flex"
    }
})
