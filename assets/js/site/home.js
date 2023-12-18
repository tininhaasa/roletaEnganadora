/**
 *
 * Script de perfil
 *
 * @author 
 *
 **/
(function ($, PATH, Helpers) {

    /right-top, right-bottom, left-top, left-bottom, center-top, center-bottom, center-center/
    var position = "left-bottom";

    /verde, azul, vermelho, amarelo/
    var color = "verde";

    /fade, zoom, from-right, from-left, from-top, from-bottom/
    var animation = "from-left";

    /nome do produto/
    var product_name = "";

    /frase depois do nome da pessoa/
    var phrase = "ACABOU DE GANHAR";
    var timeout = 4000;

    /masc, fem, any/
    var type_name = "masc, fem";
    var msg_final = "";

    var min_time = 4;
    var max_time = 20;

    var names_masc = ['Jose', 'Joao', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel', 'Mateus', 'Andre', 'Fernando', 'Fabio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 'Ricardo', 'Marcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sergio', 'Claudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogerio', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Manuel', 'Jeferson', 'Cicero', 'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Benedito', 'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Valdir', 'Emerson', 'Luan', 'David', 'Renan', 'Severino', 'Fabricio', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Fabiano', 'Wesley', 'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 'Helio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 'Adao', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 'Otavio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido'];
    var names_fem = ['Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitoria', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sonia', 'Renata', 'Eliane'];
    var randomvalues = [100,200,300,400,500]
    var option = {
        position: position,
        cssAnimationStyle: animation,
        plainText: false,
        timeout: timeout
    };

	var next_previous = function(){

        $("body").on("click", ".btn-back", function () {

            $(".btn-next").addClass("disabled");
            $(".btn-back").addClass("disabled");
            current_page = parseInt($("#page").val());
            $("#badge"+current_page).removeClass("is-active");
            current_page = current_page-1;
            $("#page").val(current_page);
            
            $(".btn-correction").addClass("d-none");
            $(".btn-menu").addClass("d-none");
            $(".btn-next:not(.btn-menu)").removeClass("d-none");
            $(".btn-back:not(.btn-menu)").removeClass("d-none");
            switch (current_page) {
                case 1:
                    $(".btn-back").addClass("d-none");
                    $(".btn-back:is(.btn-menu)").removeClass("d-none");
                    break;
                case 2:
                    $(".btn-correction").removeClass("d-none");
                    break;
                case 4:
                    console.log("a")
                    $(".btn-next").addClass("d-none");
                    $(".btn-menu").removeClass("d-none");
                    
                    break;
            
            }
            
            setTimeout(() => {
                $(".btn-next").removeClass("disabled");
                $(".btn-back").removeClass("disabled");
            }, 500);
        });

        $('body').on('click', '.btn-save', function() {

            if($('#name').val() == ""){
                Swal.fire({
                    type: "warning",
                    title: "Ops!",
                    text: "Insira o seu nome completo antes de continuar",
                    confirmButtonText: "Tentar Novamente",
                });
                return false;
            }
            if($('#email').val() == ""){
                Swal.fire({
                    type: "warning",
                    title: "Ops!",
                    text: "Insira o seu e-mail antes de continuar",
                    confirmButtonText: "Tentar Novamente",
                });
                return false;
            }
            if($('#tel').val() == ""){
                Swal.fire({
                    type: "warning",
                    title: "Ops!",
                    text: "Insira o seu telefone antes de continuar",
                    confirmButtonText: "Tentar Novamente",
                });
                return false;
            }
            
            $('#carouselExample').carousel('next');
            current_page = parseInt($("#page").val());
            
            current_page = parseInt(current_page)+1;
            console.log(current_page)

            $("#page").val(current_page);
            
            switch (current_page) {
                case 2:
                    $(".btn-rescue").addClass("d-none")
                    $(".btn-save").removeClass("d-none")

                    break;
                case 3:
                    $(".btn-save").addClass("d-none")
                    $(".loading").removeClass("d-none")
                    porcentage = 20;
                    
                    $(".loading .progress-bar").css({
                        'width': porcentage + "%"
                    })
                    countdown = 5;
                    setInterval((e) => {
                        porcentage += 20;
                        console.log(porcentage)
                        $(".loading .progress-bar").css({
                            'width': porcentage + "%"
                        })
                        countdown--;   
                        $(".counter").text(countdown)                  
                    }, 1000);
                    setTimeout(() => {
                        
                        $("#lead-form").submit();
                    }, 5000);
                case 4:
                    console.log("a")
                    $(".btn-next").addClass("d-none")
                    $(".btn-next:is(.btn-menu)").removeClass("d-none")
                    
                    break;
            
            }


            $("#badge"+current_page).addClass("is-active");

        })


        $("body").on("click", ".btn-next", function () {
            
            $(".btn-next").addClass("disabled");
            $(".btn-back").addClass("disabled");
            current_page = parseInt($("#page").val());

            current_page = parseInt(current_page)+1;
            console.log(current_page)

            $("#page").val(current_page);
            
            $(".btn-correction").addClass("d-none");
            $(".btn-menu").addClass("d-none");
            $(".btn-next:not(.btn-menu)").removeClass("d-none");
            $(".btn-back:not(.btn-menu)").removeClass("d-none");
            switch (current_page) {
                case 2:
                    $(".btn-rescue").addClass("d-none")
                    $(".btn-save").removeClass("d-none")

                    break;
                case 3:
                    setTimeout(() => {
                        $(".btn-save").addClass("d-none");
                        $(".loading").removeClass("d-none");
                        console.log($(".loading").removeClass("d-none"));
                        porcentage = 20;
                        
                        $(".loading .progress-bar").css({
                            'width': porcentage + "%"
                        })
                        countdown = 5;
                        setInterval((e) => {
                            porcentage += 20;
                            console.log(porcentage)
                            $(".loading .progress-bar").css({
                                'width': porcentage + "%"
                            })
                            countdown--;   
                            $(".counter").text(countdown)                  
                        }, 1000);
                        setTimeout(() => {
                            
                            $("lead-form").submit();
                        }, 5000);
                        
                    }, 200);
               
            
            }

            $("#badge"+current_page).addClass("is-active");
            setTimeout(() => {
                $(".btn-next").removeClass("disabled");
                $(".btn-back").removeClass("disabled");
            }, 500);
        });
	}

    var notificationFooter = function(){
            }

    
    function show_notification() {
        if (type_name == "masc") {
            msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
        } else if (type_name == "fem") {
            msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
        } else {
            var array_aux = ["masc", "fem"];

            if (array_aux[Math.floor(Math.random() * array_aux.length)] == "masc") {
                msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
            } else {
                msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
            }
        }

        msg_final += decodeURIComponent(escape(" " + phrase + " R$" + randomvalues[Math.floor(Math.random() * randomvalues.length)] + ",00"));


        $('footer p').html(msg_final)

        var rand = Math.floor(Math.random() * (max_time - min_time + 1) + min_time);
        setTimeout(show_notification, rand * 1000);
    }

    $(document).ready(function () {

            setTimeout(show_notification, 4 * 1000);


            $('.content').css({
                'min-height' : $(window).height() - $("footer").height() - $("header").height() - $(".loading-bar").height() - 100
            });
		next_previous();
        notificationFooter();
        
    });
})($, PATH, Helpers);