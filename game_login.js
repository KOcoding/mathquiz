function adduser(){
    player1name=document.getElementById("player_1").value ;
    player2name=document.getElementById("player_2").value ;
    localStorage.setItem("p1",player1name);
    localStorage.setItem("p2",player2name);
    window.location="game_page.html";
    
}