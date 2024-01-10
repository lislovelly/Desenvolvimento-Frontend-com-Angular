class CardNews extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());          
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class" ,"card");

        const card_left = document.createElement("div");
        card_left.setAttribute("class","card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        card_left.appendChild(autor);
        card_left.appendChild(linkTitle);
        card_left.appendChild(newsContent);

        const card_rigth = document.createElement("div");
        card_rigth.setAttribute("class","card_rigth");

        const img = document.createElement("img");
        img.src= this.getAttribute("photo") || "assets/OIP.jpg";
        img.alt="Foto da Noticia"
        
        card_rigth.appendChild(img);

        componentRoot.appendChild(card_left);
        componentRoot.appendChild(card_rigth);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;   
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > span{
            font-weight: 400;
        
        }
        
        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_rigth > img {
            width: 300px;
            height: 100%;
        }
        
        .card_left > p{
            color: gray;

            
        }`;

        return style;
    }
}customElements.define("card-news", CardNews)