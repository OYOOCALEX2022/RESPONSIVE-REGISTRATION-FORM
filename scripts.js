let confirm = document.getElementById("confirmation_")
        let close = document.getElementById("form_") 

        function confirmation()
        {
            confirm.classList.add("open-confirmation")
            close.classList.add("close-form")
        }
        function closewindow()
        {
            confirm.classList.remove("open-confirmation")
        }
