    
    let i = 0  //start point
    let img = []
    let time = 3000
    
    //image list
    
    
        img[0] = 'imagens-MM/mm3.jpg';
        img[1] = 'imagens-MM/mm9.jpg';
        img[2] = 'imagens-MM/mm10.jpg';
        img[3] = 'imagens-MM/mm11.jpg';
    //Change image
    
    function changeimages() {
      document.slide.src = img[i]
    
      if(i < img .length - 1) {
          i++
      } else {
          i = 0
      }
      setTimeout("changeimages()",time)
    }
    window.onload = changeimages;
    

    