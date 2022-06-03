// const words = ["devPrzemuS", "Video_Editor", "devPrzemuS", "Junior_Java_Developer", "devPrzemuS", "YouTuber"];
// let i = 0;
// let counter;
//
// function typeNow() {
//     document.title = "";
//     let word = words[i].split("");
//     var loopTyping = function () {
//         if (word.length > 0) {
//             if (word[0] == "_") {
//                 word.shift();
//                 document.title += " " + word.shift();
//             } else {
//                 document.title += word.shift();
//             }
//         } else {
//             deleteNow();
//             return false;
//         }
//         ;
//         counter = setTimeout(loopTyping, 250);
//     };
//     loopTyping();
// };
//
// function deleteNow() {
//     let word = words[i].split("");
//     var loopDeleting = function () {
//         if (word.length > 1) {
//             word.pop();
//             document.title = word.join("").replaceAll("_", " ");
//         } else {
//             if (words.length > (i + 1)) {
//                 i++;
//             } else {
//                 i = 0;
//             }
//             ;
//             typeNow();
//             return false;
//         }
//         ;
//         counter = setTimeout(loopDeleting, 250);
//     };
//     loopDeleting();
// };
// typeNow();