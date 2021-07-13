
// 승자 저장 -   출력
function showResult(){
    
    vic_sound1.pause();
    vic_sound2.pause();

    let mem1 = document.getElementById('team1ID');
    let mem2 = document.getElementById('team2ID');
    
    mem1.innerHTML = mem1.className;
    mem2.innerHTML = mem2.className;
    
    if(m1==m2){ // 무승부
        portBox1.style.display = "block";	//  초상화
        portBox2.style.display = "none";	// player1 초상화
        portBox3.style.display = "none";	// player2 초상화
        winner="an"; 
        
        // 승자 텍스트
        mem1.style.display = "none";
        mem2.style.display = "none";
        
        // audio display
        audio_area_ID.style.display = "none";

        // reset_gradient
        reset_gradient();
        
        // 재경기 메시지
        alert("무승부입니다! 다시 선택해 주세요.")

    } else if(m1>m2){ // 1번 승
        portBox1.style.display = "none";	
        portBox2.style.display = "block";	
        portBox3.style.display = "none";	
        document.getElementById('portrait_box1_ID').scrollIntoView();
        winner="p1";

        // 승자 텍스트
        mem1.style.display = "block";
        mem2.style.display = "none";
        
        // audio display
        audio_area_ID.style.display = "block";

        // team1_stylesheet
        team1_stylesheet_on();

    } else if(m1<m2){// 2번 승
        portBox1.style.display = "none";	
        portBox2.style.display = "none";	
        portBox3.style.display = "block";	
        document.getElementById('portrait_box2_ID').scrollIntoView();
        winner="p2";
        
        // 승자 텍스트'
        mem1.style.display = "none";
        mem2.style.display = "block";
        
        // audio display
        audio_area_ID.style.display = "block";
        
        // team2_stylesheet
        team2_stylesheet_on();  
    }
}

function winnerMP3() {
    
    anchor.load();
    anchor.play();

    if(winner=='p1'){
        vic_sound1.load();
        vic_sound1.play();
    }
    if(winner=='p2'){
        vic_sound2.load();
        vic_sound2.play();
    }
}