$(document).ready(function () {

    $("#atividades").submit(function (event) {
        event.preventDefault();

        let atividade = $("#atividade").val().trim();
        let horario = new Date().toLocaleString();

        if (atividade !== "") { 
            $("#lista").append(`<li>${atividade} - ${horario}</li>`);
            $("#atividade").val(""); 
        } else {
            alert("Por favor, insira uma atividade antes de adicionar.");
        }
    });

    $("button[type='reset']").click(function () {
        $("#lista").empty();
    });
});
