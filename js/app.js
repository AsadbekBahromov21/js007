$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    stagePadding: 50,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})



// {
//     // case1 masala
//     function Dayneme(n) {
//         switch (n) {
//             case 1:
//                 return "Duyshanba"
//             case 2:
//                 return "Seyshanba"
//             case 3:
//                 return "chorshanba"
//             case 4:
//                 return "Payshanba"
//             case 5:
//                 return "Juma"
//             case 6:
//                 return "Shanba"
//             case 7:
//                 return "Yakshanba"
//             default:
//                 return  "Bunday hafta kuni yo"
//         }
//     }
//     console.log(Dayneme(1));
// }
// {
//     // case 2 masla
//     function Pirce(n){
//         switch (n){
//             case 1:
//             return "yomon"
//              case 2:
//             return "qoniqarsiz"
//              case 3:
//             return "qoniqarli"
//              case 4:
//             return "yaxshi"
//              case 5:
//             return "alo"
//             default:
//                 return "xato"
//         }
//     }
//     console.log(Pirce(6));
// }
// {
//     // case 3 masla
//     function moon(n) {
//         switch (n) {
//             case 1:
//                 return " 1 oy qish"
//             case 2:
//                 return "2 oy qish"
//             case 3:
//                 return "3 oy qish"
//             case 4:
//                 return "4 oy baxor"
//             case 5:
//                 return "5 oy baxor"
//             case 6:
//                 return "6 oy baxor"
//             case 7:
//                 return "7 oy yoz"
//             case 8:
//                 return "8 oy yoz"
//             case 9:
//                 return "9 oy yoz"
//             case 10:
//                 return "10 oy kuz"
//             case 11:
//                 return "11 oy kuz"
//             case 12:
//                 return "12 oy kuz"

//             default:
//                 return "bunday oy yoq"

//         }
//     }
//     console.log(moon(6));
// }

// {
//     // case 4 masla
//     function moon(n) {
//         switch (n) {
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 return "30 kundan iborat"
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 9:
//             case 10:
//                 return "31 kundan iborat"
//             case 2:
//                 return "28 kundan iborat"
//             default:
//                 return "bunday oy kunlari yo"
//         }
//     }
//     console.log(moon(4));
// }



// {
//     // case 5 masala
//     function son(a, b, amal) {
//         let sum;
//         switch (amal) {
//             case 1:
//                 sum = a + b;
//                 break;
//             case 2:
//                 sum = a - b;
//                 break
//             case 3:
//                 sum = a / b;
//                 break;
//             case 4:
//                 sum = a * b;
//                 break;

//         }
//         console.log(sum);
//     }
//     console.log(son(6, 3, 3));
// }


// {
//     //case  6 masala
//     function olchov(n,) {
//         switch (n) {
//             case 1:
//                 return "1 dm : 0,1 m"
//             case 2:
//                 return "1 km; 2000 m"
//             case 3:
//                 return "3 m"
//             case 4:
//                 return "4 mm; 0,001mm"
//             case 5:
//                 return "5 sm; 0.05 m"
//         }
//     }
//     console.log(olchov(5));

// }

// {
//     // case 7 masala
//     function ogirlik(n, amal) {
//         let sum;
//         switch (amal) {
//             case 1:
//                 sum = n * 1;
//                 break;
//             case 2:
//                 sum = n / 1000;
//                 break;
//             case 3:
//                 sum = n / 1000;
//                 break;
//             case 4:
//                 sum = n * 1000;
//                 break;
//             case 5:
//                 sum = n * 100;
//                 break;
//                 default:
//                     sum = "hech narsa yo";

//         }
//         console.log(sum , "kg");
//     }
//     console.log(ogirlik(2, 4));
// }

// {
//     // case 8 masala
//     function yil(year){
//         return(year % 4 === 0 &&  year % 100 !== 0) || year % 400 === 0;
//     }
//     function andyil(year){
//         return yil(year) ? 366 : 365;
//     }
//     console.log(andyil(2020));
// }

// {
//     // case 9 masala
//     function yil(year, moon) {
//         let sum;
//         switch (moon) {
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//                 sum = 31;
//                 break;
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 sum = 30;
//                 break;
//             case 2:
//                 sum = isLeapyear(year) ? 29 : 28;
//                 break;
//             default:
//                 sum = "bunday javob yoq";
//         }
//         return sum
//     }
//     console.log(yil(2020, 11));
// }

// {
//     // case 10 masala
//     function robot(commands) {
//         let sum = [0, 0];
//         let andsum = 0; 

//         for (let command of commands) {
//             switch (command) {
//                 case 's':
//                     sum[1]++;
//                     break;
//                 case 'j':
//                     sum[1]--;
//                     break;
//                 case 'q':
//                     sum[0]++;
//                     break;
//                 case 'g':
//                     sum[0]--;
//                     break;
//                 case '1':
//                     andsum = (andsum + 3) % 4;
//                     break;
//                 case '2':
//                     andsum = (andsum + 1) % 4;
//                     break;
//                 case '0':
//                     if (andsum === 0) sum[1]++;
//                     else if (andsum === 1) sum[0]++;
//                     else if (andsum === 2) sum[1]--;
//                     else if (andsum === 3) sum[0]--;
//                     break;
//             }
//         }
//         return sum;
//     }
//     console.log(robot(['s', 's', '2', 'q', '0']));
// }


// {
//         // for 1 masala
//         function number( k, n ) {
//             if ( n > 0) {
//                 for (let i = 0; i < n; i++) {
//                 console.log(k);
//                 }
//             } else {
//                 return  " n soni musbat bo'lishi kerak"
//             }
//         }
    
//         console.log( number(3, -1) );
//     }


// {
//     // for 2 masla
//     function son(a, b){
//         if(a < b){
//             for(let i = a; i <= b; i++ ){
//                 console.log(i);
//             }
//         }else{
//             return "a soni b dan kichik bolishi kere"
//         }
//     }
//    console.log(son(3, 7));
// }
// {
//     // for 3 masla
//     function son(a, b){
//         if(a  < b){
//             for(let i = b -= 1; i > a; i--){
//                 console.log(i);
//             }
//         }else{
//             return " a soni b sonidan kichik bolishi kere"
//         }
//     }
//     console.log(son(2, 6));
// }
// {
//     // for 4 masala
//     function son(a){
//         for(let i = 1; i <= 10; i++){
//             // console.log(i);
//             console.log(a * i);
//         }
//     }
//     console.log(son(10000));
// }
// {
//     // for 5 masala
//     function son(a){
//         for(let i = 0; i < 1; i += 0.1){
//             console.log(a * i);
//         }
//         return "bunday kg yoq"
//     }
//     console.log(son(10000));
// }
// {
//     // for6
//     function son( a ) {
//         for (let i = 1; i <= 2; i += 0.2) {
//             console.log( i * a);
//         }
//     }
//     console.log( chocolate(1000) );
// }
// {
//     // for7
//     function sum( a, b ) {
//         let sum = 0
//         if ( a < b ) {
//             for (let i = a; i < b; i++) {
//                 sum = sum + i
//             }
//         } else {
//             return "a soni b sonidan kichik bo'lishi kerak"
//         }
//         console.log(sum);
//     }
//     console.log( son( 2, 7 ) );
// }
// {
//         // for 8 masala
//         function son( a, b ) {
//             let sum = 1
//             if ( a < b) {
//                 for (let i = a; i < b; i++) {
//                     sum = sum * i
//                 }
//             } else {
//                 return "a soni b sonidan kichik bo'lishi kerak"
//             }
//             console.log( sum);
//         }
    
//         console.log( son(2, 7) );
// }

// {
//     // for 9 masla
//     function son( a, b) {
//         let sum = 0
//         if ( a < b) {
//             for (let i = a; i < b; i++) {
//                 sum = sum + (i * i)
//             }
//         } else {
//             return "a soni b sonidan kichik bo'lishi kerak"
//         }
//         console.log(a , b,sum );
//     }
//     console.log( son(3, 7) );
// }

{
        // for 10 masala
        function son(n) {
            let sum = 0
            if ( n > 0 ) {
                for (let i = 1; i <= n; i++) {
                    sum = i/n + sum
                }
            } else {
                return "n soni 0 dan kichik bo'lishi mumkin emas"
            }
            console.log(sum);
        }
        console.log( son(5) );
}