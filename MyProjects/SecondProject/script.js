function firstTask()
{
    let questions = [
        ["Человек может летать без использования каких-либо устройств?" , false],
        ["Медведи - единственные животные, которые могут спать во время зимней спячки?" , false],
        ["Существует ли на Земле океан, который можно пересечь пешком?" , false],
        ["Деревья могут дышать так же, как и люди?" , true],
        ["Растения могут производить собственную пищу через фотосинтез?" , true],
        ["Все реки в мире текущие с запада на восток?" , false],
        ["Луна является единственным естественным спутником Земли?" , true],
        ["Человеческое тело состоит преимущественно из воды?" , true],
        ["Вода кипит при температуре 100 градусов Цельсия?" , true],
        ["Человек может видеть через стены, как рентгеновский луч?" , false],
        ["Коала - это медведи?" , false],
        ["Солнце является звездой?" , true]
    ]

    let sum = 0;
    
    for (element of questions)
    {
        if(confirm(element[0]) == element[1])
            sum++;
    }

    alert(`Результат: ${sum}/${questions.length}`);
}


function secondTask()
{
    let regex = /^[a-zA-Zа-яА-Я\s.]+$/;

    while(true)
    {
        let input = prompt("Enter your Name and Surname.");
        if (regex.test(input)) {
            alert(input);
            break;
        } else {
            alert("Inccorect input. Use only a-z, A-Z, а-я, А-Я, whitespace characters and dots.");
        }
    }
}

function thirdTask()
{
     let url = "http://www.ufa.com.ua/utilites/hdd/out.php?sort=2";
     alert(url);

     let protocol = "";
     let host = "";
     let path = "";
     let fileName = "";
     let queryString = "";
     
     // protocol
     protocol = url.slice(0, url.indexOf("//"));
     url = url.slice(url.indexOf("//") + 2, url.length);

     // host
     host = url.slice(0, url.indexOf("/"));
     url = url.slice(url.indexOf("/"), url.length);

    // queryString
    queryString = url.slice(url.lastIndexOf("?") + 1, url.length);
    url = url.slice(0, url.lastIndexOf("?"));

    // fileName
    fileName = url.slice(url.lastIndexOf("/") + 1, url.length);
    path = url.slice(0, url.lastIndexOf("/") + 1);

    alert(
        `protocol: ${protocol}\n` +
        `host: ${host}\n` +
        `path: ${path}\n` +
        `fileName: ${fileName}\n` +
        `queryString: ${queryString}`
        
        );
}

function forthTask()
{
    let colors = ["red", "yellow"];
    choise = 0;
    document.write("<table>")
    for (let i = 0; i < 8; i++) {
        document.write("<tr>")
        for (let j = 0; j < 8; j++) {
            document.write(`<td class="${colors[choise]}"></td>`)
            choise = (choise + 1) % 2;
        }
        choise = (choise + 1) % 2;
        document.write("</tr>")  
    }
    document.write("</table>")
}

