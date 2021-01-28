if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removebasketItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removebasketItemButtons.length; i++) {
        var button = removebasketItemButtons[i]
        button.addEventListener('click', removebasketItem)
    }

    var quantityInputs = document.getElementsByClassName('basket-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addTobasketButtons = document.getElementsByClassName('product-button')
    for (var i = 0; i < addTobasketButtons.length; i++) {
        var button = addTobasketButtons[i]
        button.addEventListener('click', addTobasketClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var basketItems = document.getElementsByClassName('basket-items')[0]
    while (basketItems.hasChildNodes()) {
        basketItems.removeChild(basketItems.firstChild)
    }
    updatebasketTotal()
}

function removebasketItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updatebasketTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatebasketTotal()
}

function addTobasketClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('product-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('product-image')[0].src
    addItemTobasket(title, price, imageSrc)
    updatebasketTotal()
}

function addItemTobasket(title, price, imageSrc) {
    var basketRow = document.createElement('div')
    basketRow.classList.add('basket-row')
    var basketItems = document.getElementsByClassName('basket-items')[0]
    var basketItemNames = basketItems.getElementsByClassName('basket-item-title')
    for (var i = 0; i < basketItemNames.length; i++) {
        if (basketItemNames[i].innerText == title) {
            alert('This item is already added to the basket')
            return
        }
    }
    var basketRowContents = `
        <div class="basket-item basket-column">
            <img class="basket-item-image" src="${imageSrc}" width="100" height="100"><br>
            <span class="basket-item-title">${title}</span>
        </div>
        <span class="basket-price basket-column">${price}</span>
        <div class="basket-quantity basket-column">
            <input class="basket-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    basketRow.innerHTML = basketRowContents
    basketItems.append(basketRow)
    basketRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removebasketItem)
    basketRow.getElementsByClassName('basket-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updatebasketTotal() {
    var basketItemContainer = document.getElementsByClassName('basket-items')[0]
    var basketRows = basketItemContainer.getElementsByClassName('basket-row')
    var total = 0
    for (var i = 0; i < basketRows.length; i++) {
        var basketRow = basketRows[i]
        var priceElement = basketRow.getElementsByClassName('basket-price')[0]
        var quantityElement = basketRow.getElementsByClassName('basket-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('basket-total-price')[0].innerText = '$' + total
}