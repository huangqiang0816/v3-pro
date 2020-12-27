class Control {
    private state: any
}

interface SelectableControl extends Control {
    seclt()
}

class Button extends Control implements SelectableControl {
    seclt() {

    }
}

class TextBox extends Control {
    select() {

    }
}


