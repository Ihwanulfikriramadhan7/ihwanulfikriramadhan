//mengambil semua elemen a dengan looping 
document.querySelector("#option a").forEach((a) => {
    //jika di klik akan menjalankan fungsi computerchoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    //tangkap pilihan user
    let pilihanUser = element.target.innerText;
    //menangkap element result dengan queryselector untuh menampung
    //nilai hasil games
    let pilihanComputer = document.querySelector("#result");

    //membuat array pilihan untuk computer
    pilihanComputer.innerHTML = choices[Math.random(Math.random() * choices.lenght)]
    pilihanComputer = pilihanComputer.innerHTML;

    //jika pilihan komputer sama dengan pilihan user (Draw)
    if (pilihanUser == pilihanComputer){
        alert("DRAW");
    }
    //jika pilihan user menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("YOU WIN")
    }else if (pilihanUser == "Paper" & pilihanComputer == "Rock"){
        alert("YOU WIN")
    }else if (pilihanUser == "Scissors" & pilihanComputer == "Paper"){
            alert("YOU WIN")
    }else {
        alert("Tidak ada pilihan")
    }
    //jika pilihan komputer menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("COMPUTER WIN")
    }else if (pilihanUser == "Paper" & pilihanComputer == "Rock"){
        alert("COMPUTER WIN")
    }else if (pilihanUser == "Scissors" & pilihanComputer == "Paper"){
        alert("COMPUTER WIN")
    }else {
        alert("Tidak ada pilihan")
    }
}