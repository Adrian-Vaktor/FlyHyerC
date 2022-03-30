var body = document.body
var shareb = document.getElementById("shareb");
var ondb = document.getElementById("ondb");
document.getElementById("formtitle").innerHTML


function clickLogin(){
    var element = document.getElementById("userLogin");
    element.classList.toggle("is-visible");
    body.classList.toggle("body-y-overflow-hide");
}

function clickOnDemand(){
    var element = document.getElementById("bookOnDemand");
    element.classList.toggle("is-visible");
    body.classList.toggle("body-y-overflow-hide");
    console.log('ay', formtitle)
}

function ondcli(){
    ondb.classList.add("button-brown");
    shareb.classList.remove("button-brown");
    var newHTML = 'Book On-Demand'

    document.getElementById("formtitle").innerHTML = newHTML
    console.log(ondb,'yes')

}


function sharecli(){
    shareb.classList.add("button-brown");
    ondb.classList.remove("button-brown");
    var newHTML = 'Book A Shared Flight'
    document.getElementById("formtitle").innerHTML = newHTML
    console.log('no')


}

// function test(){
//     console.log('go')
//     }
// window.onscroll = test;


