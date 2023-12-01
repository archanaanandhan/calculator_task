const div=document.createElement("div");
div.setAttribute("id","calculator");
div.innerHTML=`<input type="text" id="display" readonly>
<br>
<button onclick="clearDisplay()" >C</button>
<button onclick="button('<-')"><--</button>
<button onclick="button ('.')">.</button>
<button onclick="button ('*')">*</button>
<br>
<button onclick="button ('7')">7</button>
<button onclick="button ('8')">8</button>
<button onclick="button ('9')">9</button>
<button onclick="button ('/')">/</button>
<br>
<button onclick="button ('4')">4</button>
<button onclick="button ('5')">5</button>
<button onclick="button ('6')">6</button>
<button onclick="button ('-')">-</button>
<br>
<button onclick="button ('1')">1</button>
<button onclick="button ('2')">2</button>
<button onclick="button ('3')">3</button>
<button onclick="button ('+')">+</button>
<br>
<button onclick="button ('0')">0</button>
<button onclick="button ('00')">00</button>
<button onclick="result()" class="box">=</button>`

document.body.append(div);
let display = document.getElementById('display');

function button(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function result() {
   
 display.value = eval(display.value);
   
}
