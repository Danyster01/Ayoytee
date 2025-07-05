    function check() {
      let name = document.getElementById("name").value.trim();
      let pass = document.getElementById("pass").value.trim();
      if(name === "Princess Aya" && pass === "1532006") {
        document.getElementById("form").style.display = "none";
        document.getElementById("message").style.display = "block";
      } else {
        document.getElementById("msg").innerText = "البيانات مش صح.. جربي تاني يا ملاكي 💔";
      }
    }
