var link = [];

for (i = 0; i < 4; i++) {
    let x = 600 * i;
    let y = i + 1;
    link[i] = document.getElementById("link" + i);
    link[i].addEventListener("click", function () {
        let pageindex = "apage" + y.toString();
        let page = document.getElementById(pageindex);
        let contain = document.getElementById("apage1");
        console.log(y);
        page.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    })
};

var i = 0;

$(document).ready(() => {
    $("#contactForm #name").on('change', function () {
        $('#insertName').html($('#name').val());
        console.log('help');
    });

    $("#contactForm button").on("click", function(){
        if($(".flip-card-inner").hasClass('clickclass')){
            $(".flip-card-inner").addClass('clickclass')
        } else{
            $(".flip-card-inner").addClass('clickclass')
        }

        setTimeout(()=>{
            $(".flip-card-inner").removeClass('clickclass');
            $('#insertName').html('')
        },4100);
    });

})
