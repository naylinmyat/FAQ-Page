let listContainer = document.getElementById("listContainer");

let lists = [
    {
        question: "How can I bid for your products?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
    },
    {
        question: "What is the function of your products?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
    },
    {
        question: "How can I download your app?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
    },
    {
        question: "How are you exchange rates calculated?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
    },
    {
        question: "How can I buy your products?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque ipsa iusto.Facilis modi unde ipsam?",
        plusBtn: true,
        minusBtn: false,
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

    if(item.plusBtn === true){
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
        answer.style.display = "none";
    }else if(item.plusBtn === false){
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
        answer.style.display = "block";
    }

    quesAndAns.append(question,answer);
    list.append(plusIcon,minusIcon,quesAndAns);

    return list;
}

function openList(index){
        for(let i = 0; i < lists.length; i++){
            if(i != index){
                lists[i].plusBtn = true;
                lists[i].minusBtn = false;
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

function closeList(index){
    lists[index].plusBtn = true;
    lists[index].minusBtn = false;
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
});

listsRender(listContainer,lists);