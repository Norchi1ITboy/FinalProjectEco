const content = document.querySelector(".content")


const url = 'https://fakestoreapi.com/products?limit=5'

fetchData(url)

function showProducts(data) {
    console.log(data)


    content.innerHTML = data.map(item => `
    <div class="col-3 card mb-5">
        <img src="${item.image}" class="card-img-top" alt"...">
            <div class="card-body">
                <h5 class="card-title">
                    <div class="star">
                    ${item.title}

                        </div>    
                    
                <h5/>
                <p class="card-text">$${item.price}
                    <div class="small_card">
                        <i class="fas fa-cart-arrow-down cart"></i>
                        
                    </div>
                    <div
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${item.id}">
                    See More
                </button>
            </div>
    </div>


    <div class="modal fade" id="${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="modal-body-id">
                    <div class="row">
                        <div class="col-6">
                            <img src="${item.image}" class="card-img-top" alt="...">
                        </div>
                        <div class="col-6">
                            <h2>
                            ${item.title}
                            Carpe is the second-person singular present active imperative of carpō "pick or pluck" used by Horace to mean "enjoy, 
                            seize, use, make use of".[2] Diem is the accusative of dies "day". 
                            A more literal translation of carpe diem would thus be "pluck the day [as it is ripe]"—that is, enjoy the momen
                                
                            
                            </h2>
                        </div>
                    </div>    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    `).join("")


}

async function fetchData() {

    let res = await fetch(url)

    let data = await res.json();
    

    showProducts(data);

}

fetchData()



