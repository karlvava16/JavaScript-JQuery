function Marker(colorValue, inkPercent) {
	this.colorValue = colorValue
	this.inkPercent = inkPercent

	this.setColor = function (colorValue) {
		this.colorValue = colorValue;
	}

	this.printText = function (text) {
        console.log(this.colorValue)
		for (let char of text) {
			if (char !== ' ' && this.inkPercent >= 0.5) {
				this.inkPercent -= 0.5
			} else if (this.inkPercent < 0.5) {
				alert('Нет чернил!')
				break
			}
			let selectedElement = document.createElement('span')


			selectedElement.style.color = `${this.colorValue}`
			selectedElement.textContent = char
			document.getElementById('output').appendChild(selectedElement)

		}
        document.getElementById('output').appendChild(document.createElement('br'))

		document.getElementById(
			'inkPercent'
		).innerText = `${this.inkPercent}%`
	}
}

function RefillableMarker(colorValue, inkPercent) {
	Marker.call(this, colorValue, inkPercent)

	this.refillInk = function () {
    console.log("refillInk2");
    this.inkPercentage = 100
			document.getElementById(
				'inkPercent'
			).innerHTML = `${this.inkPercentage}%`
	}
}

function printText() {
	if (textInput.value.trim() === '') {
		alert('Введите текст')
		return
	}

	

	refillableMarker.setColor(colorInput.value)
	refillableMarker.printText(textInput.value)
}

function refillInk() {
    console.log("refillInk");
  refillableMarker.refillInk();
}

function clearContent() {
	var outputContainer = document.getElementById('output')

	while (outputContainer.firstChild) {
		outputContainer.removeChild(outputContainer.firstChild)
	}
}


// Получаем ссылки на кнопки
let printButton = document.getElementById('printBtn')
let clearButton = document.getElementById('clearBtn')
let refillButton = document.getElementById('refillBtn')

let inkPercent = document.getElementById('inkPercent')
let textInput = document.getElementById('textInput')
let colorInput = document.getElementById('colorInput')

printButton.addEventListener('click', printText)
clearButton.addEventListener('click', clearContent)
refillButton.addEventListener('click', refillInk)

const refillableMarker = new RefillableMarker(
	colorInput.value,
	100
)