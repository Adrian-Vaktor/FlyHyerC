

const start = Date.now()

window.onload = function(){
    const millis = Date.now() - start
    console.log(start, millis)
    var triggerIcons = start + 100
    var count = 0
    var topNav = document.getElementsByClassName('top-nav-icons');
    var s1 = document.getElementsByClassName('scroll-enable');
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight

    var inter = setInterval(function(){
        if(count === 5){

            for (let i= 0 ; i < s1.length ; i++){
                var objPos = s1[i].offsetTop 
                
                if( objPos<= y ){
                    s1[i].classList.add('scroll-in-view')
                }
            }
        }

        if(count === 15){
            console.log('yay',count)
            clearInterval(inter)
            for (let i= 0 ; i < topNav.length ; i++){
                topNav[i].classList.add('scroll-in-view')

                }
            }
        count+=1

    },50)

}


// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }