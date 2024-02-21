const allBtn = document.getElementsByClassName('add-btn');

let totalCart = 1;
for(const btn of allBtn){
    btn.addEventListener("click", function(){
        document.getElementById('cart-total').innerText = totalCart;
        if(totalCart < 4){
            btn.setAttribute('disabled', true);
        }
       if(totalCart == 3){
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