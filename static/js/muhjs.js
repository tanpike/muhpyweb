
var myUser = "bob";
var myElement = "moo"

muhdivstring = `test string
<pre>
username %muhuser% priv 15 secret %muhpass%
</pre>
`;

function refreshConfig() {
    myUser = document.getElementById("muhuser").value;
    myPass = document.getElementById("muhpass").value;
    let mdv = muhdivstring.replace(/%muhuser%/g, myUser);
    res = mdv.replace(/%muhpass%/g, myPass);
    muhbox.innerHTML = res; 
}

//document.getElementById("muhuser").addEventListener("change", newText("muhuser"));
document.getElementById("muhuser").onchange = function(){refreshConfig()};
document.getElementById("muhpass").onchange = function(){refreshConfig()};
