let i = 1;

const display = () => {
    setInterval(function () {
        document.querySelector(`g.terminal-code line:nth-of-type(${i})`).style.visibility = "visible";
        if (i === 26) {
            for (let j = 1; j < 27; j++) {
                document.querySelector(`g.terminal-code line:nth-of-type(${j})`).style.visibility = "hidden";
            }
            i = 0;
        }
        ++i;
    }, 50)
}

display();