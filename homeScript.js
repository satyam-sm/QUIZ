function toggleNav(){
    let navBar = document.getElementById('navBar');

    if(navBar.className === '')
        navBar.className = 'responsive';
    else
        navBar.className = '';
}