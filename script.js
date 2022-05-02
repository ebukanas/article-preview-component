
// declaring variables
const shareBtn = document.querySelector('#shareBtn');
const shareBtn_LowRes = document.querySelector('#shareBtn_LowRes');
const dropdown_LowRes = document.querySelector('#shareBtn_dropdown_low_res');
const dropdown_HighRes = document.querySelector('#shareBtn_dropdown');

//when you click on the share button on large resolutions it 
//will change the dropdown display from none to flex
shareBtn.addEventListener('click', () => {
    dropdown_LowRes.style.display = 'flex';

//for larger resolutions
var LargeScreenResolution = window.matchMedia('(min-width: 768px)');
    if (LargeScreenResolution.matches) {
        dropdown_LowRes.style.display = 'none';
        dropdown_HighRes.classList.toggle('show');
}
})

// for smaller resolutions
var SmallScreenResolution = window.matchMedia('(max-width: 768px)');
if (SmallScreenResolution.matches) {
    dropdown_HighRes.style.display = 'none';
}

//when you click on the share button on small resolutions it 
//will change the dropdown display from flex to none
shareBtn_LowRes.addEventListener('click', () => {
    dropdown_LowRes.style.display = 'none';
})




