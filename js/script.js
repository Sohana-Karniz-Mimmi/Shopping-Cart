const allBtn = document.getElementsByClassName('add-btn');

let totalCart = 0;
for(const btn of allBtn){
    btn.addEventListener("click", function(){
        document.getElementById('cart-total').innerText = totalCart;
        if(totalCart < 3){
            btn.setAttribute('disabled', true);
        }
       if(totalCart == 2){
        disabledAllBtn();
       }
        totalCart++;
       
    });
}

function disabledAllBtn(){
    const allBtns = document.getElementsByClassName('add-btn');
    for(const btn of allBtns){
        btn.setAttribute('disabled', true);
    }
}