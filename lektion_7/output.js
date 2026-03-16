let brElement = document.createElement('br')

function output(data) {
    let text = document.createTextNode(data)
    document.body.append(text)
    document.body.append(brElement.cloneNode())
}
