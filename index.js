let listContainer = document.getElementById("listContainer");

let lists = [
    {
        question: "How can I bid for your products?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
        plusBtn2: true,
        minusBtn2: false,
    },
    {
        question: "What is the function of your products?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
        plusBtn2: true,
        minusBtn2: false,
    },
    {
        question: "How can I download your app?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
        plusBtn2: true,
        minusBtn2: false,
    },
    {
        question: "How are you exchange rates calculated?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
        plusBtn2: true,
        minusBtn2: false,
    },
    {
        question: "How can I buy your products?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
        plusBtn2: true,
        minusBtn2: false,
    },
];

function listsRender(listContainer,lists){
    cleanLists();
    for(let i = 0; i < lists.length; i++){
        const  list = lists[i];
        const listItem = generateList(list,i);
        listContainer.appendChild(listItem);
    }
}

function cleanLists(){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
}

{/* <div class="list">
    <ion-icon class="plusIcon" name="add-outline"></ion-icon>
    <ion-icon class="minusIcon" name="remove-outline"></ion-icon>
    <div class="quesAndAns">
        <h4>How can I bid for your products?</h4>
        <p class="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?</p>
    </div>
</div> */}

function generateList(item,index){
    const list = document.createElement("div");
    list.classList = "list";
    const plusIcon = document.createElement("ion-icon");
    plusIcon.className = "plusIcon";
    plusIcon.name = "add-outline";
    plusIcon.id = "plusBtn" + index;
    const minusIcon = document.createElement("ion-icon");
    minusIcon.className = "minusIcon";
    minusIcon.id = "minusBtn" + index;
    minusIcon.name = "remove-outline";
    minusIcon.style.display = "none";
    const quesAndAns = document.createElement("div");
    quesAndAns.className = "quesAndAns";
    const question = document.createElement("h4");
    question.innerText = item.question;
    const answer = document.createElement("p");
    answer.innerText = item.answer;
    answer.className = "answer";
    answer.style.display = "none";

    const list2 = document.createElement("div");
    list2.classList = "list";
    const plusIcon2 = document.createElement("ion-icon");
    plusIcon2.className = "plusIcon";
    plusIcon2.name = "add-outline";
    plusIcon2.id = "PLUSBTN" + index;
    const minusIcon2 = document.createElement("ion-icon");
    minusIcon2.className = "minusIcon";
    minusIcon2.id = "MINUSBTN" + index;
    minusIcon2.name = "remove-outline";
    minusIcon2.style.display = "none";
    const quesAndAns2 = document.createElement("div");
    quesAndAns2.className = "quesAndAns";
    const question2 = document.createElement("h4");
    question2.innerText = item.question;
    const answer2 = document.createElement("p");
    answer2.innerText = item.answer;
    answer2.className = "answer";
    answer2.style.display = "none";

    if(item.plusBtn === true){
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
        answer.style.display = "none";
    }else if(item.plusBtn === false){
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
        answer.style.display = "block";
    }

    if(item.plusBtn2 === true){
        plusIcon2.style.display = "block";
        minusIcon2.style.display = "none";
        answer2.style.display = "none";
    }else if(item.plusBtn2 === false){
        plusIcon2.style.display = "none";
        minusIcon2.style.display = "block";
        answer2.style.display = "block";
    }

    quesAndAns2.append(question2,answer2);
    list2.append(plusIcon2,minusIcon2,quesAndAns2);
    
    answer.append(list2);
    quesAndAns.append(question,answer);
    list.append(plusIcon,minusIcon,quesAndAns);

    return list;
}

function openList(index){
        for(let i = 0; i < lists.length; i++){
            if(i != index){
                lists[i].plusBtn = true;
                lists[i].minusBtn = false;
                lists[i].plusBtn2 = true;
                lists[i].minusBtn2 = false;
                console.log("ha");
            }else if(i == index){
                console.log("he");
                if(lists[i].plusBtn == true){
                    lists[i].plusBtn = false;
                    lists[i].minusBtn = true;
                }else if(lists[i].plusBtn == false){
                    lists[i].plusBtn = true;
                    lists[i].minusBtn = false;
                }
            }
        };
        listsRender(listContainer,lists);
}

function openNestedList(index){
    for(let i = 0; i < lists.length; i++){
        if(i != index){
            lists[i].plusBtn2 = true;
            lists[i].minusBtn2 = false;
            console.log("ha");
        }else if(i == index){
            console.log("he");
            if(lists[i].plusBtn2 == true){
                lists[i].plusBtn2 = false;
                lists[i].minusBtn2 = true;
            }else if(lists[i].plusBtn2 == false){
                lists[i].plusBtn2 = true;
                lists[i].minusBtn2 = false;
            }
        }
    };
    listsRender(listContainer,lists);
}

function closeList(index){
    lists[index].plusBtn = true;
    lists[index].minusBtn = false;
    lists[index].plusBtn2 = true;
    lists[index].minusBtn2 = false;
    listsRender(listContainer,lists);
}

function closeNestedList(index){
    lists[index].plusBtn2 = true;
    lists[index].minusBtn2 = false;
    listsRender(listContainer,lists);
}

document.addEventListener("click",function(event){
    if(event.target.id.includes("plusBtn")){
        const index = event.target.id.slice(7);
        openList(index);
    }
    if(event.target.id.includes("minusBtn")){
        const index = event.target.id.slice(8);
        closeList(index);
    }
    if(event.target.id.includes("PLUSBTN")){
        const index = event.target.id.slice(7);
        openNestedList(index);
    }
    if(event.target.id.includes("MINUSBTN")){
        const index = event.target.id.slice(8);
        closeNestedList(index);
    }
});

listsRender(listContainer,lists);