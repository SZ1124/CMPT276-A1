var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

var input=document.querySelector('input[value="SEND"]')
input.addEventListener('click', function(evt)
{
    evt.preventDefault()
    var inputNum=parseFloat(document.getElementById('userInput').value)

    //check if the user input met the requirement
    if (isNaN(inputNum)) 
    {
        alert("Error: Please enter a number")
    }
    else if((inputNum > parseFloat(document.getElementById('Max').value)) || (inputNum < parseFloat(document.getElementById('F').value)))
    {
        alert("Error: Please enter a number in the range")
    }
    else
    {
        grades.push(inputNum);
    }

    printGradesArr();
})

function printGradesArr()
{
    let Fcount=0, Dcount=0, CMcount=0, Ccount=0, CPcount=0, BMcount=0, Bcount=0, BPcount=0, AMcount=0, Acount=0, APcount=0

    //check if the bounds met the requirement
    if((parseFloat(document.getElementById('Max').value) <= parseFloat(document.getElementById('A+').value)))
    {
        alert("Max has to be bigger than A+");
    }
    else if(!(document.getElementById('F').value < document.getElementById('D').value))
    {
        alert("F has to be smaller than D");
    }
    else if(!((document.getElementById('D').value < document.getElementById('C-').value) && (document.getElementById('D').value > document.getElementById('F').value)))
    {
        alert("D has to be smaller than C- and bigger than F");
    }
    else if(!((document.getElementById('C-').value < document.getElementById('C').value) && (document.getElementById('C-').value > document.getElementById('D').value)))
    {
        alert("C- has to be smaller than C and bigger than D");
    }
    else if(!((document.getElementById('C').value < document.getElementById('C+').value) && (document.getElementById('C').value > document.getElementById('C-').value)))
    {
        alert("C has to be smaller than C+ and bigger than C-");
    }
    else if(!((document.getElementById('C+').value < document.getElementById('B-').value) && (document.getElementById('C+').value > document.getElementById('C').value)))
    {
        alert("C+ has to be smaller than B- and bigger than C");
    }
    else if(!((document.getElementById('B-').value < document.getElementById('B').value) && (document.getElementById('B-').value > document.getElementById('C+').value)))
    {
        alert("B- has to be smaller than B and bigger than C+");
    }
    else if(!((document.getElementById('B').value < document.getElementById('B+').value) && (document.getElementById('B').value > document.getElementById('B-').value)))
    {
        alert("B has to be smaller than B+ and bigger than B-");
    }
    else if(!((document.getElementById('B+').value < document.getElementById('A-').value) && (document.getElementById('B+').value > document.getElementById('B').value)))
    {
        alert("B+ has to be smaller than A- and bigger than A");
    }
    else if(!((document.getElementById('A-').value < document.getElementById('A').value) && (document.getElementById('A-').value > document.getElementById('B+').value)))
    {
        alert("A- has to be smaller than A and bigger than B+");
    }
    else if(!((document.getElementById('A').value < document.getElementById('A+').value) && (document.getElementById('A').value > document.getElementById('A-').value)))
    {
        alert("A has to be smaller than A+ and bigger than A-");
    }
    else if(!((parseFloat(document.getElementById('A+').value) < parseFloat(document.getElementById('Max').value)) && (parseFloat(document.getElementById('A+').value) > parseFloat(document.getElementById('A').value))))
    {
        alert("A+ has to be smaller than Max and bigger than A");
    }
    //print if the bounds met the requirement 
    else
    {
        for(let i=0; i<grades.length; i++)
        {   
            if(grades[i]>=document.getElementById('F').value)
            {
                if(grades[i]>=document.getElementById('D').value)
                {
                    if(grades[i]>=document.getElementById('C-').value)
                    {
                        if(grades[i]>=document.getElementById('C').value)
                        {
                            if(grades[i]>=document.getElementById('C+').value)
                            {
                                if(grades[i]>=document.getElementById('B-').value)
                                {
                                    if(grades[i]>=document.getElementById('B').value)
                                    {
                                        if(grades[i]>=document.getElementById('B+').value)
                                        {
                                            if(grades[i]>=document.getElementById('A-').value)
                                            {
                                                if(grades[i]>=document.getElementById('A').value)
                                                {
                                                    if(grades[i]>=document.getElementById('A+').value)
                                                    {
                                                        APcount++
                                                    }
                                                    else if(grades[i]<document.getElementById('A+').value)
                                                    {
                                                        Acount++
                                                    }
                                                }
                                                else if(grades[i]<document.getElementById('A').value)
                                                {
                                                    AMcount++
                                                }
                                            }
                                            else if(grades[i]<document.getElementById('A-').value)
                                            {
                                                BPcount++ 
                                            }
                                        }
                                        else if(grades[i]<document.getElementById('B+').value)
                                        {
                                            Bcount++
                                        }
                                    }
                                    else if(grades[i]<document.getElementById('B').value)
                                    {
                                        BMcount++
                                    }
                                }
                                else if(grades[i]<document.getElementById('B-').value)
                                {
                                    CPcount++
                                }
                            }
                            else if(grades[i]<document.getElementById('C+').value)
                            {
                                Ccount++
                            }
                        }
                        else if(grades[i]<document.getElementById('C').value)
                        {
                            CMcount++
                        }
                    }
                    else if(grades[i]<document.getElementById('C-').value)
                    {
                        Dcount++
                    }
                }
                else if(grades[i]<document.getElementById('D').value)
                {
                    Fcount++
                }
            } 
        }
    }
    
    var printLine=[];
    var output;

    //print Histogram
    for(let i=0; i<APcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printA+");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<Acount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printA");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<AMcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printA-");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<BPcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printB+");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<Bcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printB");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<BMcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printB-");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<CPcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printC+");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<Ccount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printC");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<CMcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printC-");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<Dcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printD");
    output.innerHTML=printLine;

    printLine=[];
    for(let i=0; i<Fcount; i++)
    {
        printLine.push("🧑‍🎓");
    }
    output=document.getElementById("printF");
    output.innerHTML=printLine;
}

