$(function(){
    $('.caixa img').mouseover(()=>{
        $('.box h3').eq(0).show()
        setInterval(() => {
            $('.box h1').show()
        }, 300);
        setInterval(() => {
            $('.box h3').eq(1).show()
        }, 500);
        setInterval(()=>{
            $('.box h3').eq(2).show()
        }, 700)
        setInterval(()=>{
            $('.box p').eq(0).show()
        }, 1000)

        setInterval(()=>{
            $('.dds img').eq(0).show()
            $('.txt').eq(0).show()
        }, 1300)

        setInterval(()=>{
            $('.dds img').eq(1).show()
            $('.txt').eq(1).show()
        }, 1600)

        setInterval(()=>{
            $('.dds img').eq(2).show()
            $('.txt').eq(2).show()
        }, 1800)    
    })

    const dados =
    [
        {title:'HTML 5', desc:'Configuração de Meta Tags <br />Marcação Semantica<br />  Inserção de Bibliotecas e Frameworks'},
        {title:'CSS 3', desc:'Box Moldel <br /> Position<br /> Display<br />Flexbox'},
        {title:'JS', desc:'Programação Assincrona<br /> Manipulação da DOM <br /> Sólido conhecimento em ES5 ou ES6'},
        {title:'MysQl', desc:'Comandos DDL , DML<br> Habilidades PDO<br />Importação e Expostação de DUMPS'},
        {title:'PHP', desc:'Create<br /> Read<br /> Update<br />Delete'},
        {title:'React', desc:'Hooks<br />Ecossistema'},
       
    ]

    dados.map((i, index)=>{
        $('.inform').append(`
        <div class="cx" key="${index}">
            <h3>${i.title} </h3>
            <button>saiba mais...</button>
        </div>
        `)
        $('.cx button').click((e)=>{
            let key = e.target.closest('.cx').getAttribute('key')

           $('.item').html(`
            <h1>${dados[key].title}</h1>
            <p>${dados[key].desc}</p>
           `)
       })

    })


})