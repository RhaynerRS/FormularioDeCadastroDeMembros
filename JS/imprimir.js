function printDiv(div){
    var printContent=document.getElementById(div)
    printContent=printContent.innerHTML
    var originalContents=document.body.innerHTML;
    
    document.body.innerHTML=printContent
    document.body.style.alignItems="center"
    document.body.style.marginTop="10%"
    document.body.style.flexDirection="column"
    document.getElementById("subContent").style.margin="0 auto"
    document.getElementById("subContent").style.maxWidth="700px"
    document.getElementById("subContent").style.width="700px"
    document.getElementById("subContent").style.textAlign="left"
    let element=document.querySelectorAll("p")
    for (let i=0;i<element.lenght;i++){
        element[i].style.width="300px"
    }
    window.print()
    document.body.style.marginTop="0%"
    window.location.reload()
    console.log("oi")
    document.body.innerHTML=originalContents
   

}