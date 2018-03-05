var pb1 = $('.pb_1');
var pb2 = $('.pb_2');
var pb3 = $('.pb_3');
var pb4 = $('.pb_4');
var pb5 = $('.pb_5');


$('.startest1').click(function(){
  startBar1();
  $('.stopbuttons').addClass('red').removeClass('disabled');
});
$('.startest2').click(function(){
  $('.stopbuttons').addClass('red').removeClass('disabled');
  startBar2();
});
$('.startest3').click(function(){
  startBar3();
  $('.stopbuttons').addClass('red').removeClass('disabled');
});
$('.startest4').click(function(){
  startBar4();
  $('.stopbuttons').addClass('red').removeClass('disabled');
});
$('.startest5').click(function(){
  startBar5();
  $('.stopbuttons').addClass('red').removeClass('disabled');
});


function endBar(pb) {
  pb.css('width', '100%');
  pb.css('background-color', '#00e676');
  $('.stopbuttons ').addClass('disabled').removeClass('red');
  $('.startbuttons ').addClass('disabled').removeClass('blue');
  Materialize.toast('Loading complete.', 4000);

}

function startBar3() {
  setTimeout(function(){
    pb3.css('width', '10%');
  }, 1000);
  setTimeout(function(){
    pb3.css('width', '20%');
  }, 2000);
  setTimeout(function(){
    pb3.css('width', '30%');
  }, 3000);
  setTimeout(function(){
    pb3.css('width', '40%');
  }, 4000);
  setTimeout(function(){
    pb3.css('width', '50%');
  }, 5000);
  setTimeout(function(){
    pb3.css('width', '60%');
  }, 6000);
  setTimeout(function(){
    pb3.css('width', '70%');
  }, 7000);
  setTimeout(function(){
    pb3.css('width', '80%');
  }, 8000);
  setTimeout(function(){
    pb3.css('width', '90%');
  }, 9000);
  setTimeout(function(){
    endBar(pb3);
  }, 10000);

}


function startBar2() {
  setTimeout(function(){
    pb2.css('width', '10%');
  }, 100);
  setTimeout(function(){
    pb2.css('width', '20%');
  }, 200);
  setTimeout(function(){
    pb2.css('width', '30%');
  }, 300);
  setTimeout(function(){
    pb2.css('width', '40%');
  }, 400);
  setTimeout(function(){
    pb2.css('width', '50%');
  }, 500);
  setTimeout(function(){
    pb2.css('width', '60%');
  }, 1000);
  setTimeout(function(){
    pb2.css('width', '64%');
  }, 1110);
  setTimeout(function(){
    pb2.css('width', '68%');
  }, 1220);
  setTimeout(function(){
    pb2.css('width', '72%');
  }, 1330);


  setTimeout(function(){
    pb2.css('width', '95%');
  }, 3330);
  setTimeout(function(){
    pb2.css('width', '99%');
  }, 5000);

  setTimeout(function(){
      endBar(pb2);
  }, 10000);

}

function startBar1() {
  setTimeout(function(){
    pb1.css('width', '10%');
  }, 1000);
  setTimeout(function(){
  }, 2000);
  setTimeout(function(){
    pb1.css('width', '20%');
  }, 3000);
  setTimeout(function(){
  }, 4000);
  setTimeout(function(){
  }, 5000);
  setTimeout(function(){
    pb1.css('width', '50%');
  }, 6000);
  setTimeout(function(){
    pb1.css('width', '90%');
  }, 7000);
  setTimeout(function(){
  }, 8000);
  setTimeout(function(){
  }, 9000);
  setTimeout(function(){
      endBar(pb1);
  }, 10000);
}

function startBar4() {

  setTimeout(function(){
    pb4.css('width', '7%');
  }, 500);

  setTimeout(function(){
    pb4.css('width', '14%');
  }, 2000);
  setTimeout(function(){
    pb4.css('width', '16%');
  }, 2300);
  setTimeout(function(){
    pb4.css('width', '18%');
  }, 2700);

  setTimeout(function(){
    pb4.css('width', '20%');
  }, 3000);
  setTimeout(function(){
    pb4.css('width', '21%');
  }, 3200);
  setTimeout(function(){
    pb4.css('width', '22%');
  }, 3400);
  setTimeout(function(){
    pb4.css('width', '23%');
  }, 3500);
  setTimeout(function(){
    pb4.css('width', '24%');
  }, 3600);
  setTimeout(function(){
    pb4.css('width', '25%');
  }, 3700);
  setTimeout(function(){
    pb4.css('width', '26%');
  }, 3800);
  setTimeout(function(){
    pb4.css('width', '27%');
  }, 3900);
  setTimeout(function(){
    pb4.css('width', '28%');
  }, 4000);
  setTimeout(function(){
    pb4.css('width', '29%');
  }, 4100);
  setTimeout(function(){
    pb4.css('width', '30%');
  }, 4400);
  setTimeout(function(){
    pb4.css('width', '45%');
  }, 4500);
  setTimeout(function(){
    pb4.css('width', '50%');
  }, 4600);
  setTimeout(function(){
    pb4.css('width', '50%');
  }, 4700);
  setTimeout(function(){
    pb4.css('width', '52%');
  }, 4800);
  setTimeout(function(){
    pb4.css('width', '54%');
  }, 4900);

  setTimeout(function(){
    pb4.css('width', '55%');
  }, 5000);
  setTimeout(function(){
    pb4.css('width', '56%');
  }, 5250);
  setTimeout(function(){
    pb4.css('width', '57%');
  }, 5500);
  setTimeout(function(){
    pb4.css('width', '58%');
  }, 5700);

  setTimeout(function(){
    pb4.css('width', '59%');
  }, 5800);
  setTimeout(function(){
    pb4.css('width', '60%');
  }, 5900);
  setTimeout(function(){
    pb4.css('width', '61%');
  }, 6000);
  setTimeout(function(){
    pb4.css('width', '62%');
  }, 6100);
  setTimeout(function(){
    pb4.css('width', '63%');
  }, 6200);
  setTimeout(function(){
    pb4.css('width', '64%');
  }, 6550);

  setTimeout(function(){
    pb4.css('width', '65%');
  }, 7000);
  setTimeout(function(){
    pb4.css('width', '69%');
  }, 7500);
  setTimeout(function(){
    pb4.css('width', '70%');
  }, 8000);
  setTimeout(function(){
    pb4.css('width', '80%');
  }, 8500);
  setTimeout(function(){
    pb4.css('width', '90%');
  }, 9000);
  setTimeout(function(){
    pb4.css('width', '95%');
  }, 9500);

  setTimeout(function(){
    endBar(pb4);
  }, 10000);
}

function startBar5() {

  setTimeout(function(){
    pb5.css('width', '2%');
  }, 500);
  setTimeout(function(){
    pb5.css('width', '5%');
  }, 1300);


  setTimeout(function(){
    pb5.css('width', '7%');
  }, 2100);
  setTimeout(function(){
    pb5.css('width', '10%');
  }, 3300);

  setTimeout(function(){
    pb5.css('width', '14%');
  }, 4400);
  setTimeout(function(){
    pb5.css('width', '19%');
  }, 4900);

  setTimeout(function(){
    pb5.css('width', '30%');
  }, 5000);
  setTimeout(function(){
    pb5.css('width', '35%');
  }, 5400);
  setTimeout(function(){
    pb5.css('width', '40%');
  }, 5800);
  setTimeout(function(){
    pb5.css('width', '45%');
  }, 6200);


  setTimeout(function(){
    pb5.css('width', '50%');
  }, 7000);


  setTimeout(function(){
    pb5.css('width', '75%');
  }, 7900);
  setTimeout(function(){
    pb5.css('width', '77%');
  }, 8600);



  setTimeout(function(){
    endBar(pb5);
  }, 10000);

}
