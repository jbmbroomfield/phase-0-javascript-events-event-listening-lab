clickAlert = () => {
    alert('I was clicked!')
}

function addingEventListener() {
    const input = document.getElementById('input')
    input.addEventListener('click', clickAlert)

    const div5 = document.getElementById('div5')
    div5.addEventListener('click',clickAlert)
}

addingEventListener()