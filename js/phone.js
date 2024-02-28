// console.log('Hunting phone 02');

const loadPhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    console.log(data);
    const phones = data.data;
    console.log(phones);

}

loadPhone();