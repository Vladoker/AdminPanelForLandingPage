document.addEventListener("DOMContentLoaded", () => {
    const Editor = require("./editor");
    const UIkit = require("uikit");

    window.editor = new Editor();

    window.onload = () => {
        window.editor.open("index.html");
    }


    savePage.addEventListener("click", ()=> {
        window.editor.save(
            () => {
            UIkit.notification({message: 'Успешно сохранено', status: 'success'});
        },
        () => {
            UIkit.notification({message: 'Ошибка сохранения!', status: 'danger'});
        });
    });

   
});


