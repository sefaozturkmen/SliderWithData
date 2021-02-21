$(document).ready(function() {
    loadItem();
});


function swiper() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            468: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }
    });
}

function loadItem() {
    $.get('sample_products.txt', function(data) {
        var products = JSON.parse(data);
        let html = "";
        for (i = 0; i <= products.length; i++) {
            if (i <= 10) {
                html += `<div class="swiper-slide">
                            <div class="product-box">
                                <img src="${products[i].imageS}" >
                                <div class="card-box">
                                    <div class="card-title">
                                        <h3 class="product-name">${products[i].name}</h3>
                                    </div>
                                    <div class="product-land">${products[i].params.land}</div>
                                    <div class="price-box ">
                                        <div class="d-flex justify-content-center">
                                            <div>${products[i].priceText}</div>
                                            <div><s>${products[i].oldPriceText}</s></div>
                                        </div>
                                    </div>
                                    <div class="product-baseprice">${products[i].params.basePrice}</div>
                                </div>
                            </div>
                        </div>`
                $('#first-slider').append(html)
            }
            if (i <= 20 && i > 10) {
                html += `<div class="swiper-slide">
                            <div class="product-box">
                                <img src="${products[i].imageS}" >
                                <div class="card-box">
                                    <div class="card-title">
                                        <h3 class="product-name">${products[i].name}</h3>
                                    </div>
                                    <div class="product-land">${products[i].params.land}</div>
                                    <div class="price-box ">
                                        <div class="d-flex justify-content-center">
                                            <div>${products[i].priceText}</div>
                                            <div><s>${products[i].oldPriceText}</s></div>
                                        </div>
                                    </div>
                                    <div class="product-baseprice">${products[i].params.basePrice}</div>
                                </div>
                            </div>
                        </div>`
                $('#second-slider').append(html)
            }
            if (i < 30 && i > 20) {
                html += `<div class="swiper-slide">
                            <div class="product-box">
                                <img src="${products[i].imageS}" >
                                <div class="card-box">
                                    <div class="card-title">
                                        <h3 class="product-name">${products[i].name}</h3>
                                    </div>
                                    <div class="product-land">${products[i].params.land}</div>
                                    <div class="price-box ">
                                        <div class="d-flex justify-content-center">
                                            <div>${products[i].priceText}</div>
                                            <div><s>${products[i].oldPriceText}</s></div>
                                        </div>
                                    </div>
                                    <div class="product-baseprice">${products[i].params.basePrice}</div>
                                </div>
                            </div>
                        </div>`
                $('#third-slider').append(html)
            }
        }
        swiper();
    });
}




/*function loadItem() {
    $.get('sample_products.txt', function(data) {
        var products = JSON.parse(data);
        console.log(products);
        let html = "";
        products.forEach(product => {
            html += `<div class="swiper-slide"><img src="${product.imageS}"></div>`
        });
        $('.swiper-wrapper').append(html)
        swiper();
    })*/