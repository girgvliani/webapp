class design{
    constructor(shape, size, colour){
        this.shape = shape
        this.size = size
        this.colour = colour
    }


    namesToNumbers(){
        var numberString = (this.shape);
        numberString += this.size;
        numberString += this.colour;
        this.choose(numberString)
    }


    choose(string){
                switch(string.charAt(2)){
                    case '1':
                        switch(string.charAt(0)){
                            case '1':
                                this.updateDisplay('img/images/Bone color Bronse.svg')
                                break;
                            case '2':
                                this.updateDisplay('img/images/Heart color Bronse.svg')
                                break;
                            case '3':
                                this.updateDisplay('img/images/Star color Bronse.svg')
                                break;
                            case '4':
                                this.updateDisplay('img/images/Leg color Bronse.svg')
                                break;
                            case '5':
                                this.updateDisplay('img/images/Ball color Bronse.svg')
                                break;
                            case '6':
                                this.updateDisplay('img/images/Almost ball color Bronse.svg')
                                break;
                        }
                        break;
                    case '2':
                        switch(string.charAt(0)){
                            case '1':
                                this.updateDisplay('img/images/Bone color Gold.svg')
                                break;
                            case '2':
                                this.updateDisplay('img/images/Heart color Gold.svg')
                                break;
                            case '3':
                                this.updateDisplay('img/images/Star color Gold.svg')
                                break;
                            case '4':
                                this.updateDisplay('img/images/Leg color Gold.svg')
                                break;
                            case '5':
                                this.updateDisplay('img/images/Ball color Gold.svg')
                                break;
                            case '6':
                                this.updateDisplay('img/images/Almost ball color Gold.svg')
                                break;
                        }
                        break;
                    case '3':
                        switch(string.charAt(0)){
                            case '1':
                                this.updateDisplay('img/images/Bone color Black.svg')
                                break;
                            case '2':
                                this.updateDisplay('img/images/Heart color Black.svg')
                                break;
                            case '3':
                                this.updateDisplay('img/images/Star color Black.svg')
                                break;
                            case '4':
                                this.updateDisplay('img/images/Leg color Black.svg')
                                break;
                            case '5':
                                this.updateDisplay('img/images/Ball color Black.svg')
                                break;
                            case '6':
                                this.updateDisplay('img/images/Almost ball color Black.svg')
                                break;
                        }
                        break;
                    case '4':
                        switch(string.charAt(0)){
                            case '1':
                                this.updateDisplay('img/images/Bone color Blue.svg')
                                break;
                            case '2':
                                this.updateDisplay('img/images/Heart color Blue.svg')
                                break;
                            case '3':
                                this.updateDisplay('img/images/Star color Blue.svg')
                                break;
                            case '4':
                                this.updateDisplay('img/images/Leg color Blue.svg')
                                break;
                            case '5':
                                this.updateDisplay('img/images/Ball color Blue.svg')
                                break;
                            case '6':
                                this.updateDisplay('img/images/Almost ball color Blue.svg')
                                break;
                        }
                        break;
                    case '5':
                        switch(string.charAt(0)){
                            case '1':
                                this.updateDisplay('img/images/Bone color Red.svg')
                                break;
                            case '2':
                                this.updateDisplay('img/images/Heart color Red.svg')
                                break;
                            case '3':
                                this.updateDisplay('img/images/Star color Red.svg')
                                break;
                            case '4':
                                this.updateDisplay('img/images/Leg color Red.svg')
                                break;
                            case '5':
                                this.updateDisplay('img/images/Ball color Red.svg')
                                break;
                            case '6':
                                this.updateDisplay('img/images/Almost ball color Red.svg')
                                break;
                        }
                        break;
                    case '6':
                        switch(string.charAt(0)){
                            case '1':
                                this.updateDisplay('img/images/Bone color Pink.svg')
                                break;
                            case '2':
                                this.updateDisplay('img/images/Heart color Pink.svg')
                                break;
                            case '3':
                                this.updateDisplay('img/images/Star color Pink.svg')
                                break;
                            case '4':
                                this.updateDisplay('img/images/Leg color Pink.svg')
                                break;
                            case '5':
                                this.updateDisplay('img/images/Ball color Pink.svg')
                                break;
                            case '6':
                                this.updateDisplay('img/images/Almost ball color Pink.svg')
                                break;
                        }
                        break;
                }
            }
            
    
    updateDisplay(filename){
        console.log(filename)
        document.getElementById('data-design').src = filename
    }

}

const designVariants = new design(document.getElementById('shape1').title, document.getElementById('size1').title, document.getElementById('colour_gray').title)

const numberShapeButtons = document.querySelectorAll('[shape-button]')
const numberSizeButtons = document.querySelectorAll('[size-button]')
const numberColourButtons = document.querySelectorAll('[colour-button]')

numberShapeButtons.forEach(button => {
    button.addEventListener('click', () =>{
        designVariants.shape = button.title
        designVariants.namesToNumbers()
    })
})

numberSizeButtons.forEach(button => {
    button.addEventListener('click', () =>{
        designVariants.size = button.title
        designVariants.namesToNumbers()
    })
})

numberColourButtons.forEach(button => {
    button.addEventListener('click', () =>{
        designVariants.colour = button.title
        designVariants.namesToNumbers()
    })
})
