// pg hero link : https://github.com/ProgrammingHero1/phone-hunter-api


// console.log('Hunting phone 02');

const loadPhone = async(searchText='13' , isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones , isShowAll);

}

loadPhone(searchText='13'); 



const displayPhones = (phones , isShowAll) =>{
        // console.log(phones);
        // step- 01
        const phoneContainer = document.getElementById('phone-container');
        // clear phone container cards before adding new cards
        phoneContainer.textContent = '';

        // display show all button if there are more than 12 phones
        const showAllContainer = document.getElementById('show-all-container');
        if (phones.length > 12 && !isShowAll) {
            showAllContainer.classList.remove('hidden');
        }
        else{
            showAllContainer.classList.add('hidden');
        }
        // console.log('is show all' , isShowAll);
        // display or show first 10 values  if not show All
        // console.log(phones.length);
        if (!isShowAll) {
            phones = phones.slice(0,10);
        }



        phones.forEach(phone =>{
            // console.log(phone);
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
                <div class="card-actions justify-center">
                    <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary text-center mx-auto">Show Details</button>
                </div>
            </div>
            `;
            // step- 04 append child
            phoneContainer.appendChild(phoneCard);
        });
        // hide loading spinner
        toggleLoadingSpinner(false);
}

// handle search button
const handleSearch = (isShowAll) =>{
    // console.log(' search here');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText , isShowAll);
}


// handle search recap
// const nextHandlesearch = () =>{
//     // console.log('next-searchField');
//     toggleLoadingSpinner(true);
//     const nextsearchField = document.getElementById('next-searchField');
//     const nextsearchFieldText = nextsearchField.value;
//     console.log(nextsearchFieldText);
//     loadPhone(nextsearchFieldText);
// }


<!-- spinner or loader section -->

const toggleLoadingSpinner = (isloading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    // loadingSpinner.classList.remove('hidden')
    if (isloading) {
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}


// handle show all
const handleshowAll = () =>{
        handleSearch(true);
}

// show Details function
const handleShowDetail = async (id) => {
    // console.log(' handle show details : ', id);
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;
    showPhoneDetails(phone);
}

// show phone details
const showPhoneDetails = (phone) =>{
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
    <img src="${phone.image}" alt="">
    <p><span>storage: </span>${phone?.mainFeatures?.storage}</p>
    <p><span>Display Size: </span>${phone?.mainFeatures?.displaySize}</p>
    <p><span>Chipset: </span>${phone?.mainFeatures?.chipSet}</p>
    <p><span>memory: </span>${phone?.mainFeatures?.memory}</p>
    <p><span>Slug: </span>${phone?.slug}</p>
    <p><span>Release date: </span>${phone?.releaseDate}</p>
    <p><span>Brand: </span>${phone?.brand}</p>
    <p><span>gps: </span>${phone?.others. GPS}</p>
    <p><span>gps: </span>${phone.others?. GPS || 'No GPS available'}</p>
    <p><span>gps: </span>${phone.others?. GPS ? phone.others.GPS:  'No GPS available in this device'}</p>
    `
    // show the modal
    show_details_modal.showModal()

}




