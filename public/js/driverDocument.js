const input = document.getElementById('PanTextField');


input.onkeyup = function(){
    this.value = this.value.toUpperCase();
}