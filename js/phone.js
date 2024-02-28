// pg link : https://github.com/ProgrammingHero1/phone-hunter-api


// console.log('Hunting phone 02');

const loadPhone = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);

}

// loadPhone(searchText); 



const displayPhones = phones =>{
        console.log(phones);
        // step- 01
        const phoneContainer = document.getElementById('phone-container');
        // clear phone container cards before adding new cards
        phoneContainer.textContent = '';

        // display show all button if there are more than 12 phones
        const showAllContainer = document.getElementById('show-all-container');
        if (phones.length > 12) {
            showAllContainer.classList.remove('hidden');
        }
        else{
            showAllContainer.classList.add('hidden');
        }

        // display or show first 10 values 
        console.log(phones.length);
        phones = phones.slice(0,10);



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

// handle search button
const handleSearch = () =>{
    // console.log(' search here');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

const nextHandlesearch = () =>{
    // console.log('next-searchField');
    const nextsearchField = document.getElementById('next-searchField');
    const nextsearchFieldText = nextsearchField.value;
    console.log(nextsearchFieldText);
    loadPhone(nextsearchFieldText);
}
