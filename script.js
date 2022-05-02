
// declaring variables
const shareBtn = document.querySelector('#shareBtn');
const shareBtn_LowRes = document.querySelector('#shareBtn_LowRes');
const dropdown_LowRes = document.querySelector('#shareBtn_dropdown_low_res');
const dropdown_HighRes = document.querySelector('#shareBtn_dropdown');

var LargeScreenResolution = window.matchMedia('(min-width: 768px)');
var SmallScreenResolution = window.matchMedia('(max-width: 768px)');

//for larger resolutions
shareBtn.addEventListener('click', () => {
    dropdown_LowRes.style.display = 'flex';

    if (LargeScreenResolution.matches) {
        dropdown_LowRes.style.display = 'none';
        dropdown_HighRes.classList.toggle('show');
}
})


// for smaller resolutions
shareBtn_LowRes.addEventListener('click', () => {
    dropdown_LowRes.style.display = 'none';

    if (SmallScreenResolution.matches) {
        dropdown_HighRes.style.display = 'none';
    }
})


window.addEventListener('resize', function(event) {
    if (LargeScreenResolution.matches) {
        dropdown_LowRes.style.display = 'none';
    } else if (SmallScreenResolution.matches) {
        dropdown_HighRes.style.display = 'none';
    }
}, true);
