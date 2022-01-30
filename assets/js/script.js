function myFunction(farbe){
    const elements = document.getElementsByTagName("h1");
    console.log('elements', elements);
    console.log('Farbe', farbe);
    var i;
    for(i= 0; i< elements.length; i++){
        console.log('index', i);
        elements[i].style.color = farbe;
        elements[i].style.fontSize = '50px';
    }
}