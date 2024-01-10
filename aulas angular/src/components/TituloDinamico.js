class TituloDinamico extends HTMLElement{
    constructor(){
    super();
    const shadow = this.attachShadow({mode:"open"});

    //base co component <h1>Elisangela/h1>
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo") || "Default Title";
    //estilizar o component
    const style = document.createElement("style");
    style.textContent = `
        h1{
            color: red;
        }`;

    //enviar para a shadow os components criados acima
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
    }
}
//E eles vão utilizar esse seletor abaixo no html
customElements.define("titulo-dinamico", TituloDinamico);