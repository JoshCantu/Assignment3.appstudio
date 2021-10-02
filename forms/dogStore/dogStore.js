
let wishList = []
let itemPrices = ["Crocheted Dog Toy, $10.00","Slow Feeder Bowl, $14.00","Pawz Grey Treat Jar, $20.00","Blue Sweet Dreams Thermal Pajamas, $30.00","Checker Chewy Vuiton Bowl, $32.00","Red Heart Sweater Dress, $27.00","Velvet Hair Bow - Sun Kissed, $12.00","Into the Wild Leash, $27.00"]

slctItem.onchange = function() {
  NSB.MsgBox("The item and price are: " + slctItem.value);
};

btnAdd.onclick=function(){
  wishList.push(slctItem.value)
  lblMessage.value = slctItem.value + " was added to your list. Also on your list is: " + `${wishList}`
}
