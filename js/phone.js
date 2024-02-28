// console.log('Hunting phone 02');

const loadPhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);

}

loadPhone(); 



const displayPhones = phones =>{
        // console.log(phones);
        // step- 01
        const phoneContainer = document.getElementById('phone-container');
        phones.forEach(phone =>{
            console.log(phone);
            // // step- 02 create a div
            const phoneCard = document.createElement('div');
            phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
            // step- 03 set inner html
            phoneCard.innerHTML= `
            <figure><img src="${phone.image}"
                            alt="phone" /></figure>
            <div class="card-body">
            <h1 class="card-title">Brand: ${phone. brand}</h1>
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>Brand Properties: ${phone.slug}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary text-center mx-auto">Buy Now</button>
                </div>
            </div>
            `;
            // step- 04 append child
            phoneContainer.appendChild(phoneCard);
        })
}


