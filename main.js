var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hinh1.jpg') {
      myImage.setAttribute ('src','images/back.png');
    } else {
      myImage.setAttribute ('src','images/next.png');
    }
}