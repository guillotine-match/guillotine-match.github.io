

// 첫 실행 함수
function init() { 
    // 모든 input 요소 ele 객체로 반환
    ele = document.getElementsByTagName('input');

    result_Btn  = document.getElementById("resultbutton");
    refresh_Btn = document.getElementById('newPagebtn');

    clk_sound1 = document.getElementById("clk_sound1");
    clk_sound2 = document.getElementById("clk_sound2");

    vic_sound1 = document.getElementById("vic_sound1");
    vic_sound2 = document.getElementById("vic_sound2");

    portBox1 = document.getElementById("portrait_box0_ID"); 
    portBox2 = document.getElementById("portrait_box1_ID"); 
    portBox3 = document.getElementById("portrait_box2_ID"); 
    
    sboxList = document.getElementsByClassName("shifting_boxes");
    total_match = sboxList.length;
    // 처음 박스 시프터 함수 작동 시에는 1번 외 shiftbox 를 display none 한다
    boxShifter();
}

function toGuillotine(){
    document.getElementById('Guillotine').scrollIntoView();
}

function toQuickplay(){
    document.getElementById('QuickPlay').scrollIntoView();
}
