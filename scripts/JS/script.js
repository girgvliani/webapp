class design{
    constructor(shape, size, colour){
        this.shape = shape
        this.size = size
        this.colour = colour
    }


    namesToNumbers(){
        console.log('n2n')
        var numberString = (this.shape);
        numberString += this.size;
        numberString += this.colour;
        this.choose(numberString)
    }


    choose(string){
        console.log("choose")
        console.log(string)
        switch(string){
            case '222':
                this.updateDisplay('D:/user mine/desktop/JS project/webapp/img/5/des_5.png')
                break;
            case '322':
                this.updateDisplay('D:/user mine/desktop/JS project/webapp/img/3/des_5.png')
                break;
        }
    }
    
    updateDisplay(filename){
        console.log('display')
        document.getElementById('data-design').src = filename
    }

}

const designVariants = new design(document.getElementById('shape2').title, document.getElementById('size2').title, document.getElementById('colour2').title)

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
