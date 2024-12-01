function initialize() {
    form = document.querySelector("form")

    form.addEventListener("submit", function(event) {
        Printer.clear()

        let transition = JSON.parse(form.elements['transition'].value)
        let tape = new Tape(form.elements['tape'].value)
        let head = new Head(form.elements['head'].value)

        m = new Machine(transition, tape, head)
        m.run()

        event.preventDefault()
    })
}

initialize()

