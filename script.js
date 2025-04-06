//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaying the Name in the dropdown menu

const list=document.getElementById("selectMovie");
const movieName=document.getElementById("movieName");
const tiketPrice=document.getElementById("moviePrice");
const date=document.querySelector(".date");
const seatsToBeBook=document.querySelector("#numberOfSeat");
const totalPriceToBe=document.querySelector("#totalPrice");

let ticket=7;
let totalNumberOfSeates=0;

moviesList.forEach((item)=>{
    const option=document.createElement('option')
    option.value=`${item.movieName},${item.price}`
    option.appendChild(document.createTextNode(`${item.movieName} ${item.price}`))
    list.appendChild(option)      
})

list.addEventListener('change',()=>{
    const info=list.value.split(',')
    movieName.textContent=String(info[0])
    tiketPrice.textContent=`$ ${info[1]}`
    ticket=Number(info[1]);
})

const today=new Date().toDateString();
date.textContent=today

//Add eventLister to each unoccupied seat
document.querySelectorAll(".seat").forEach((seat,index)=>{
    seat.addEventListener('click',()=>{

        if(seat.classList.contains("selected")){
            seat.classList.remove("selected");
            totalNumberOfSeates--;
        }if(!seat.classList.contains("occupied")){
            seat.classList.add("selected");
            totalNumberOfSeates++;
            const seatNo=document.createElement('div')
            seatNo.classList.add("selectedSeat");
            seatNo.textContent=index-2;
            if(document.querySelector(".noSelected"))document.querySelector(".noSelected")
                .setAttribute('style','visibility:hidden')
            document.getElementById("selectedSeatsHolder").appendChild(seatNo)
        }
        seatsToBeBook.textContent=totalNumberOfSeates;
        totalPriceToBe.textContent=Number(totalNumberOfSeates) * Number(ticket);
    })
})

//Add eventLsiter to continue Button
document.getElementById("proceedBtn").addEventListener('click',()=>{
    document.querySelectorAll(".selected").forEach((seat)=>{
        seat.classList.replace("selected","occupied")
    })
    totalPriceToBe.textContent=0;
    seatsToBeBook.textContent=0;
    document.getElementById("selectedSeatsHolder").textContent=""
    //document.querySelector(".noSelected").setAttribute('style','visibility:hidden')
    alert("Yaay!!Your Seat has been booked...")
})
//Add eventListerner to Cancel Button
document.getElementById("cancelBtn").addEventListener('click',()=>{
    document.querySelectorAll(".selected").forEach((seat)=>{
        seat.classList.remove("selected")
    })
    document.getElementById("selectedSeatCont")
    document.getElementById("selectedSeatsHolder").textContent=""
    totalPriceToBe.textContent=0;
    seatsToBeBook.textContent=0;
    //document.querySelector(".noSelected").setAttribute('style','visibility:visible')
})