const taxi = document.getElementById('rajana');

const circle = document.querySelectorAll('input[type="checkbox"]');

circle.forEach((circle, number) => {
    circle.addEventListener('change', () => {
        if (circle.checked) {
            if(number == 0) taxi.setAttribute('camera-orbit', '0deg 75deg 4m');
            if(number == 1) taxi.setAttribute('camera-orbit', '90deg 75deg 4m');
            if(number == 2) taxi.setAttribute('camera-orbit', '180deg 75deg 4m');
            if(number == 3) taxi.setAttribute('camera-orbit', '270deg 75deg 4m');
            if(number == 4) taxi.setAttribute('camera-orbit', '0deg 20deg 4m');
            if(number == 5) taxi.setAttribute('camera-orbit', '0deg 90deg 4m');
        }






    })
})