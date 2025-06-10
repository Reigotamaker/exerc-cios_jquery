$(document).ready(function () {
    // Adicionar uma nova tarefa à lista
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

    // Efeito de riscar texto ao clicar na tarefa
    $(document).on("click", "#lista li", function () {
        $(this).toggleClass("completed");
    });

    // Limpar todas as tarefas ao clicar no botão reset
    $("button[type='reset']").click(function () {
        $("#lista").empty();
    });
});
